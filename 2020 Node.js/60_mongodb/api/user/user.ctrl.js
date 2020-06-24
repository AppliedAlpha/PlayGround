const UserModel = require("../../models/user");
const bcrypt = require("bcrypt"); 

const showSignupPage = (req, res) => {
    res.render("user/signup");
}

const showLoginPage = (req, res) => {
    res.render("user/login");
}

// 에러: 입력값 누락 400, 이메일 중복 409
const signup = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).send("필수값 없음");

    UserModel.findOne({ email }, (err, result) => {
        if (err) return res.status(500).send("사용자 조회 오류");
        if (result) return res.status(409).send("이미 있는 이메일");

        // 단방향 암호화 : 해시
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) return res.status(500).send("해시 생성 오류");

            const user = new UserModel({ name, email, password: hash });
            user.save((err, result) => {
                if (err) return res.status(500).send("사용자 등록 오류");
                res.status(201).json(result);
            });
        });
    });
};

module.exports = { showSignupPage, showLoginPage, signup };
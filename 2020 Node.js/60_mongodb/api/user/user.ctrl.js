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

// Email, Password 일치 시 200
// 미입력 400, 없는 이메일 404, 패스워드 미일치 500
const login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("비어있음");
    UserModel.findOne({ email }, (err, user) => {
        if (err) return res.status(500).send("로그인 시 오류");
        if (!user) return res.status(404).send("가입 안 된 계정");
        
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).send("로그인 시 오류.");
            if (!isMatch) return res.status(500).send("비밀번호 틀림");

            // 다 맞으면 토큰 발급 (jsonwebtoken)
            
        });
    });
}

module.exports = { showSignupPage, showLoginPage, signup, login };
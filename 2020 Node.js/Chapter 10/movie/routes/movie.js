// 목록 조회 (/movie)
function searchMovie(req, res) {
  console.log("session:", req.session.user);

  // 세션 체크 추가
  if (!req.session.user) {
    res.render("login.html");
  } else {
    Movie.find({}, function(err, result) {
      if (err) {
        res.json({ code: 500, message: "목록 조회 실패" });
      } else {
        res.json(result);
      }
    });
  }
}
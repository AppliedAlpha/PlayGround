// 데이터
let music = [
    { id: 1, title: "아무노래", singer: "지코" },
    { id: 2, title: "비", singer: "폴킴" },
    { id: 3, title: "별보러가자", singer: "적재" },
  ];
  
  // 목록조회
  // - 성공 : limit 수만큼 music 객체를 담은 배열 리턴 (200 : OK)
  // - 실패 : limit가 숫자형이 아니면 400을 응답 (400: Bad Request)
  const list = (req, res) => {
    // 127.0.0.1:3000/music?limit=2
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);
  
    if (Number.isNaN(limit)) {
      return res.status(400).end();
    }
  
    res.json(music.slice(0, limit));
  };

  module.exports = {list};
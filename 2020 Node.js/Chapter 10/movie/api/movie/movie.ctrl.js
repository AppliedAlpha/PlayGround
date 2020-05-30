var MovieModel = require("../../models/movie");

// 등록
// - 성공 : 201 응답, 생성된 movie 객체 반환 (201 : Created)
// - 실패 : 입력값 누락 시 400 반환 (400 : Bad Request)
const create = (req, res) => {
  const title = req.body.title;
  const director = req.body.director;
  const year = req.body.year;
  if (!title || !director) return res.status(400).end();

  // save() : 모델의 instance인 document를 생성
  let movie = new MovieModel({ title, director, year });
  movie.save((err, result) => {
    if (err) return res.status(500).end();
    res.status(201).json(result);
  });
};

// 목록조회
// - 성공 : limit 수만큼 movie 객체를 담은 배열 리턴 (200 : OK)
// - 실패 : limit가 숫자형이 아니면 400을 응답 (400: Bad Request)
const list = (req, res) => {
  // 127.0.0.1:3000/movie?limit=2
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10);

  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }

  MovieModel.find((err, result) => {
    if (err) return res.status(500).end();
    res.json(result);
  }).limit(limit);
};

// 상세조회
// - 성공 : id에 해당하는 movie 객체 리턴 (200 : OK)
// - 실패 : id가 숫자가 아닐 경우 400 응답, 해당하는 id가 없는 경우 404 응답 (404 : Not Found)
const detail = (req, res) => {
  // 127.0.0.1:3000/movie/1
  const id = req.params.id;

  MovieModel.findById(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    res.json(result);
  });
};

// 변경
// - 성공 : id에 해당하는 객체 반환 (200 : OK)
// - 실패 : 없는 id일 경우 404 응답 (404 : Not Found)
const update = (req, res) => {
  // 127.0.0.1:3000/movie/2
  const id = req.params.id;
  const title = req.body.title;
  const director = req.body.director;
  const year = req.body.year;

  MovieModel.findByIdAndUpdate(id, { title, director, year }, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    res.json(result);
  });
};

// 삭제
// - 성공 : 삭제 후 결과 배열 리턴 (200 : OK)
// - 실패 : 해당 id가 없는 경우 404 (404 : Not Found)
const remove = (req, res) => {
  // 127.0.0.1:3000/movie/1
  const id = req.params.id;

  MovieModel.findByIdAndDelete(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    res.json(result);
  });
};

module.exports = {create, list, detail, update, remove}
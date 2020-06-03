var MovieModel = require("../../models/movie");
const mongoose = require('mongoose');

const checkId = (req, res, next) => {
  const Id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(Id)) {
    return res.status(400).end();
  }
  next();
}

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

const detail = (req, res) => {
  const id = req.params.id;

  MovieModel.findById(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    res.json(result);
  });
};

const update = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const director = req.body.director;
  const year = req.body.year;

  MovieModel.findByIdAndUpdate(id, { title, director, year }, {new: true}, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    res.json(result);
  });
};

const remove = (req, res) => {
  // 127.0.0.1:3000/movie/1
  const id = req.params.id;

  MovieModel.findByIdAndDelete(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    res.json(result);
  });
};

module.exports = {create, list, detail, update, remove, checkId}
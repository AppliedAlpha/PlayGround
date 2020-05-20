// 데이터
let movie = [
    { id: 1, title: "스타워즈", director: "조지 루커스", year: "1977" },
    { id: 2, title: "아바타", director: "제임스 카메론", year: "2009" },
    { id: 3, title: "인터스텔라", director: "크리스토퍼 놀란", year: "2014" },
  ];
  

  const list = (req, res) => {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);
  
    if (Number.isNaN(limit)) {
      return res.status(400).end();
    }
  
    res.json(movie.slice(0, limit));
  };

const detail = (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).end();
  }

  const result = movie.find((m) => m.id === id);

  if (!result) return res.status(404).end();
  res.status(200).json(result);
};

const create = (req, res) => {
  //console.log(req.body);
  const title = req.body.title;
  const director = req.body.director;
  const year = req.body.year;
  if (!title) return res.status(400).end();
  if (!director) return res.status(400).end();
  if (!year) return res.status(400).end();

  const id = Date.now();
  const m = { id, title, director, year };
  movie.push(m);
  res.status(201).json(movie);
};


const update = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  const title = req.body.title;
  const director = req.body.director;
  const year = req.body.year;
  //if (!name) return res.status(400).end();

  const result = movie.find((m) => m.id === id);
  if (!result) return res.status(404).end();

  if (title) result.title = title;
  if (director) result.director = director;
  if (year) result.year = year;
  res.status(200).json(result);
};

const remove = (req, res) => {
  // 127.0.0.1:3000/users/1
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).end();
  }

  movie = movie.filter((m) => m.id !== id);
  res.status(200).json(movie);
};

module.exports = {list, detail, create, update, remove};
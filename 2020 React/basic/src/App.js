import React, { useRef, useState } from 'react';
import Hello from './Hello';
import Hello2 from './Hello2';
import Hello3 from './Hello3';
import './App.css';
import MusicList from './MusicList';
import CreateMusic from './CreateMusic';
import MovieList from './MovieList';
import CreateMovie from './CreateMovie';

/*
 <<JSX Rule>>
 1. 두 개 이상의 태그는 반드시 하나의 부모로 감싸야 함 (Fragment로 Binding)
 2. 여는 태그 + 닫는 태그 (Self-Closing)
 3. JSX 안에서 JS 값 사용 시 {} 사용
 4. In-line Style 작성 시 Object Format
 5. CSS Class 설정 시 className으로
 6. 주석은 { // } 형태로
 */

function App() {
  const [movie, setMovie] = useState({
    title: "", director: "", year: "", active: false,
  });

  const { title, director, year, active } = movie;

  const [movieList, setMovieList] = useState([
    { id: 1, title: "디미고", director: "안산", year: "2002", active: false},
    { id: 2, title: "코로나19", director: "방역단체", year: "2019", active: false},
  ]);
  const nextId = useRef(3);

  const onCreate = () => {
    setMovieList([
      ... movieList, 
      {
        id: nextId.current,
        title, director, year, active
      },
    ])
    setMovie({
      title: "", director: "", year: "", active: false
    });
    nextId.current += 1;
  };

  const onChange = (e) => {
    const {name, value} = e.target;
    setMovie({
      ... movie,
      [name]: value,
    });
  };

  const onRemove = (id) => {
    setMovieList(
      movieList.filter(movie => movie.id !== id)
    );
  }

  const onToggle = (id) => {
    setMovieList(
      movieList.map((movie) => movie.id === id ? {...movie, active: !movie.active} : movie)
    );
  }

  return (
  <>
    <CreateMovie title={title} director={director} year={year} onChange={onChange} onCreate={onCreate} />
    <MovieList onRemove={onRemove} onToggle={onToggle} movieList={movieList} />
  </>
  );
}

function App2() {
  const name = "React";
  const style = {
    backgroundColor: "yellow",
    color: "blue",
    fontSize: 30,
  };

  return (
  <>
    { /* <div style={style}>{name}</div>, <div className="box" /> */ }
    <Hello name={name} color="blue" isLoggedIn={true} />
    <Hello2 id="3405" name="김지훈" color="blue">내별명</Hello2>
    <Hello2 />
    <Hello3 messages={["11", "22", "33"]} />
    <Hello3 />
    
  </>
  );
}

function App3() {
  const [music, setMusic] = useState({
    title: "", singer: "", active: false,
  });

  const { title, singer } = music;

  const [musicList, setMusicList] = useState([
    { id: 1, singer: "나", title: "너"},
  ]);
  const nextId = useRef(2);

  const onCreate = () => {
    setMusicList([
      ... musicList, 
      {
        id: nextId.current,
        singer,
        title
      },
    ])
    setMusic({
      title: "", singer: "",
    });
    nextId.current += 1;
  };

  const onChange = (e) => {
    const {name, value} = e.target;
    setMusic({
      ... music, // singer, title
      [name]: value,
    });
  };
}

export default App;

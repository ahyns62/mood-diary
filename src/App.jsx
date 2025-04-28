import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import NewDiary from "./pages/NewDiary";
import DiaryList from "./pages/DiaryList";
import NotFound from "./pages/Notfound";

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new-diary");
  };

  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new-diary"}>NewDiary</Link>
        <Link to={"/list"}>List</Link>
      </div>
      <button onClick={onClickButton}>새 일기 작성 페이지로 이동</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-diary" element={<NewDiary />} />
        <Route path="/list/:id" element={<DiaryList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

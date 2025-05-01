import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NewDiary from "./pages/NewDiary";
import DiaryList from "./pages/DiaryList";
import EditDiary from "./pages/EditDiary";
import NotFound from "./pages/Notfound";
// import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/common/Button/Button";
import Header from "./components/layout/Header/Header";

function App() {
  //   const nav = useNavigate();

  //   const onClickButton = () => {
  //     nav("/new-diary");
  //   };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-diary" element={<NewDiary />} />
        <Route path="/list/:id" element={<DiaryList />} />
        <Route path="/edit/:id" element={<EditDiary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NewDiary from "./pages/NewDiary";
import DiaryList from "./pages/DiaryList";
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
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      <Button
        text={"123"}
        onClick={() => {
          console.log("버튼 클릭");
        }}
      />

      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("버튼 클릭");
        }}
      />

      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("버튼 클릭");
        }}
      />

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

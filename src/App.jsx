import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewDiary from "./pages/NewDiary";
import DiaryList from "./pages/DiaryList";
import EditDiary from "./pages/EditDiary";
import NotFound from "./pages/Notfound";

const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기",
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기",
  },
];

function reducer(state, action) {
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

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

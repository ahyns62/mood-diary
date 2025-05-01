import { useReducer, useRef } from "react";
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
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정

  // 기존 일기 삭제

  return (
    <>
      <button onClick={() => onCreate(new Date().getTime(), 1, "hello")}>
        일기 추가 테스트
      </button>
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

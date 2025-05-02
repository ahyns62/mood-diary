import { useReducer, useRef, createContext } from "react";
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
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

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
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <button onClick={() => onCreate(new Date().getTime(), 1, "hello")}>
        일기 추가 테스트
      </button>

      <button
        onClick={() => onUpdate(1, new Date().getTime(), 3, "수정된 일기")}
      >
        일기 수정 테스트
      </button>

      <button onClick={() => onDelete(1)}>일기 삭제 테스트</button>

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-diary" element={<NewDiary />} />
            <Route path="/list/:id" element={<DiaryList />} />
            <Route path="/edit/:id" element={<EditDiary />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;

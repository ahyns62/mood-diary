import Header from "../components/layout/Header/Header";
import Editor from "../components/layout/Editor/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const NewDiary = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  usePageTitle("새 일기 작성");

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header title={"오늘의 일기"} />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default NewDiary;

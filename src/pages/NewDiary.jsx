import Header from "../components/layout/Header/Header";
import Editor from "../components/layout/Editor/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const NewDiary = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
  };

  return (
    <div>
      <Header title={"오늘의 일기"} />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default NewDiary;

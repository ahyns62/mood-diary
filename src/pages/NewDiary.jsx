import Header from "../components/layout/Header/Header";
import Editor from "../components/layout/Editor/Editor";

const NewDiary = () => {
  return (
    <div>
      <Header title={"오늘의 일기"} />
      <Editor />
    </div>
  );
};

export default NewDiary;

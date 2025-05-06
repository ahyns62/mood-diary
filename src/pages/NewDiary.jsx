import Header from "../components/layout/Header/Header";
import Button from "../components/common/Button/Button";
import Editor from "../components/layout/Editor/Editor";

const NewDiary = () => {
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} />}
      />
      <Editor />
    </div>
  );
};

export default NewDiary;

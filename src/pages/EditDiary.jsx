import { useParams } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Button from "../components/common/Button/Button";
import Editor from "../components/layout/Editor/Editor";

const EditDiary = () => {
  const params = useParams();

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        rightChild={<Button text={"삭제"} type={"NEGATIVE"} />}
      />
    </div>
  );
};

export default EditDiary;

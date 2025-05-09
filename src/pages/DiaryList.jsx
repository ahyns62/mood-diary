import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Button from "../components/common/Button/Button";
import Viewer from "../components/layout/Viewer/Viewer";

const DiaryList = () => {
  const params = useParams();
  const nav = useNavigate();

  return (
    <div>
      <Header
        title={"yyyy-mm-dd 기록"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer />
    </div>
  );
};

export default DiaryList;

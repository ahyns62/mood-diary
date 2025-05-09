import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Button from "../components/common/Button/Button";
import Viewer from "../components/layout/Viewer/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

const DiaryList = () => {
  const params = useParams();
  const nav = useNavigate();
  const currDiaryItem = useDiary(params.id);
  if (!currDiaryItem) {
    return <div>데이터 로딩 중..</div>;
  }
  const { createdDate, emotionId, content } = currDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"<"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default DiaryList;

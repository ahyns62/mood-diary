import { useParams } from "react-router-dom";

const DiaryList = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.id}번 일기입니다.</div>;
};

export default DiaryList;

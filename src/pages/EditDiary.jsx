import { useParams } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Button from "../components/common/Button/Button";
import Editor from "../components/layout/Editor/Editor";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const EditDiary = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [currDiaryItem, setCurrDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurrDiaryItem(currentDiaryItem);
  }, [params.id, data]);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={currDiaryItem} />
    </div>
  );
};

export default EditDiary;

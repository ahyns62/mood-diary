import { getEmotionImage } from "../../../util/get-emotion-image";
import Button from "../Button/Button";
import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  return (
    <div onClick={() => nav(`/list/${id}`)} className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            nav(`/edit/${id}`);
          }}
          text={"수정"}
        />
      </div>
    </div>
  );
};

export default DiaryItem;

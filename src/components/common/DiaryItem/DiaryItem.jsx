import { getEmotionImage } from "../../../util/get-emotion-image";
import Button from "../Button/Button";

const DiaryItem = () => {
  return (
    <div className="DiaryItem">
      <div className="img_section">
        <img src={getEmotionImage(1)} />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="content">일기 내용</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;

import "./Viewer.css";
import { getEmotionImage } from "../../../util/get-emotion-image";
import { emotionList } from "../../../util/constants";

const Viewer = () => {
  const emotionId = 1;

  return (
    <div>
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div>
          <img src={getEmotionImage(emotionId)} />
          <div></div>
        </div>
      </section>
      <section className="content_section"></section>
    </div>
  );
};

export default Viewer;

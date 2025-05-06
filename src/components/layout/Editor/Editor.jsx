import "./Editor.css";
import EmotionItem from "../../common/EmotionItem/EmotionItem";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";

const emotionList = [
  { emotionId: 1, emotionName: "매우 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "보통" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "매우 나쁨" },
];

const Editor = () => {
  const emotionId = 2;
  const nav = useNavigate();

  return (
    <div className="Editor">
      <section className="date_section">
        <h3>날짜</h3>
        <input type="date" />
      </section>
      <section className="emotion_section">
        <h3>오늘의 감정</h3>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h3>내용</h3>
        <textarea placeholder="오늘 어떤 하루를 보내셨나요?" />
      </section>
      <section className="button_section">
        <Button onClick={() => nav("/")} text={"취소"} />
        <Button text={"저장"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;

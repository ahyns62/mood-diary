import "./Editor.css";
import EmotionItem from "../../common/EmotionItem/EmotionItem";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { emotionList } from "../../../util/constants";
import { getStringedDate } from "../../../util/get-stringed-date";

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h3>날짜</h3>
        <input
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h3>오늘의 감정</h3>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h3>내용</h3>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          laceholder="오늘 어떤 하루를 보내셨나요?"
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소"} />
        <Button onClick={onClickSubmitButton} text={"저장"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;

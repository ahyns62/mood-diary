import Header from "../components/layout/Header/Header";
import Button from "../components/common/Button/Button";
import DiaryList from "../components/layout/DiaryList/DiaryList";

const Home = () => {
  return (
    <div>
      <Header
        title={"2025 - 05"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />

      <DiaryList />
    </div>
  );
};

export default Home;

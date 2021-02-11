import { useBeforeLeave } from "./useBeforeLeave";
import { useConfirm } from "./useConfirm";
import { useFadeIn } from "./useFadeIn";

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hi</h1>
      <p {...fadeInP}>lore asdklfjasdkfl</p>
    </div>
  );
};

export default App;

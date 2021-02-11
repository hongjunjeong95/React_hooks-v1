import { useBeforeLeave } from "./useBeforeLeave";
import { useConfirm } from "./useConfirm";
import { usePreventLeave } from "./usePreventLeave";

const App = () => {
  const begForLife = () => console.log("Please don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <hi>Hi</hi>
    </div>
  );
};

export default App;

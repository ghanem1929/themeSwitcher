import "./App.css";
import Theme from "./components/themeComponent";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const style =
    theme === "light"
      ? { backgroundColor: "#fff" }
      : { backgroundColor: "#121212" };

  return (
    <div className="App" style={style}>
      <Theme disp={dispatch} theme={theme} />
    </div>
  );
}

export default App;

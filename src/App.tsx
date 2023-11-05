import "./styles.css";
import Wordle from "./Wordle";

const word = "ҚЫМЫЗ";

export default function App() {
    return <Wordle matchWord={word}/>;
}

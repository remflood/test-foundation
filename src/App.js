import { useRef, useState } from "react";
import { generateBlocks } from "./helpers/functions";
import Day from "./Day";
import "./styles.css";
import Float from "./Float";

export default function App() {
  const daysArray = useRef([]);
  const [action, setAction] = useState({});
  const [float, setFloat] = useState(null);

  if (daysArray.current.length === 0) {
    let monday = { blocks: generateBlocks("Monday", 5) };
    let tuesday = { blocks: generateBlocks("Tuesday", 5) };
    monday.blocks[0].subject = "Law";
    monday.blocks[1].subject = "Physics";
    daysArray.current = [monday, tuesday];
  }

  const handleClick = (block) => {
    setFloat(block);
  };

  return (
    <div className="App">
      {daysArray.current.map((day) => {
        return <Day day={day} handleClick={handleClick} />;
      })}
      {float !== null ? <Float float={float} /> : null}
    </div>
  );
}

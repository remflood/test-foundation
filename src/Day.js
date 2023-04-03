import Slot from "./Slot";
import { NUMBER_OF_SLOTS } from "./helpers/global";

export default function Day({ day, handleClick }) {
  let slots = [];

  for (let i = 0; i < NUMBER_OF_SLOTS; i++) {
    slots.push(
      <Slot
        blocks={day.blocks.filter((block) => block.slot === i)}
        handleBlockClick={handleBlockClick}
      />
    );
  }

  function handleBlockClick(event) {
    let slot = +event.target.getAttribute("slot");
    let id = +event.target.getAttribute("id");
    console.log("Block click handled: " + slot + ":" + id);
    //Activate float
    handleClick();
  }

  return (
    <div day={day.blocks[0].day} className="day">
      {slots}
    </div>
  );
}

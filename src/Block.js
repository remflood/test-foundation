import { useEffect } from "react";

export default function Block({ block, handleClick }) {
  let blockElem = null;

  function getRef(elem) {
    if (elem !== null) blockElem = elem;
  }

  useEffect(() => {
    function onMouseDown(event) {
      handleClick(block);
    }

    blockElem.addEventListener("mousedown", onMouseDown);

    return () => {
      blockElem.removeEventListener("mousedown", onMouseDown);
    };
  }, [blockElem, handleClick, block]);

  return (
    <div
      ref={getRef}
      day={block.day}
      slot={block.slot}
      id={block.id}
      className="block"
    >
      {block.subject}
    </div>
  );
}

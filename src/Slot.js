import Block from "./Block";

export default function Slot({ blocks, handleBlockClick }) {
  return (
    <div className="Slot">
      {blocks.map((block) => {
        return <Block block={block} handleClick={handleBlockClick} />;
      })}
    </div>
  );
}

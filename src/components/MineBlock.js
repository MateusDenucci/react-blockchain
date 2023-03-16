import { useState } from "react";

function MineBlock({ handleMining }) {
  const [blockPayload, setBlockPayload] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleMining(blockPayload);
    setBlockPayload("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          rows={5}
          maxLength={200}
          onChange={(e) => setBlockPayload(e.target.value)}
          value={blockPayload}
        ></textarea>
        <hr></hr>
        <button>Mine now</button>
      </form>
    </div>
  );
}

export default MineBlock;

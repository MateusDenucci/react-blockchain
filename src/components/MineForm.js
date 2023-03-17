import { useState } from "react";

function MineForm({ handleMining }) {
  const [blockPayload, setBlockPayload] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleMining(blockPayload);
    setBlockPayload("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-start">
          <div className="form-floating col">
            <textarea
              className="form-control"
              onChange={(e) => setBlockPayload(e.target.value)}
              value={blockPayload}
              style={{ height: "200px", width: "100%" }}
            ></textarea>
            <label>Insert block payload here</label>
          </div>
          <div className="col align-self-end">
            <button className="btn btn-primary btn-lg">Mine now</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MineForm;

function DisplayBlockchain({ blockchain }) {
  const renderedBlockchain = blockchain.reverse().map((block) => {
    return (
      <div key={block.hash} className="row justify-content-md-center">
        <div className="col-md-auto">
          <div
            className="card mb-3 p-1"
            style={{ width: "40em", whiteSpace: "pre-line" }}
          >
            <div className="card-body">
              <h6 className="card-title">{block.hash}</h6>
              <p className="card-subtitle mb-2 text-muted">{block.nonce}</p>
              <p className="card-text">{block.payload}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div className="">{renderedBlockchain}</div>;
}

export default DisplayBlockchain;

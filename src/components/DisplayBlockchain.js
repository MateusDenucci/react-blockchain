function DisplayBlockchain({ blockchain }) {
  const renderedBlockchain = blockchain.map((block) => {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <div
            key={block.hash}
            className="card mb-3 p-1"
            style={{ width: "40em" }}
          >
            <div className="card-body">
              <h6 className="card-title">{block.hash}</h6>
              <h7 className="card-subtitle mb-2 text-muted">{block.nonce}</h7>
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

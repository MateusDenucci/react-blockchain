function DisplayBlockchain({ blockchain }) {
  const renderedBlockchain = blockchain.map((block) => {
    return (
      <div key={block.hash} className="card mb-3" style={{ width: "40%" }}>
        <div className="card-body">
          <h6 className="card-title">{block.hash}</h6>
          <h7 className="card-subtitle mb-2 text-muted">{block.nonce}</h7>
          <p className="card-text">{block.payload}</p>
        </div>
      </div>
    );
  });
  return <div>{renderedBlockchain}</div>;
}

export default DisplayBlockchain;

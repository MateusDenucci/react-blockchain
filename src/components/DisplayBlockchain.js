function DisplayBlockchain({ blockchain }) {
  const renderedBlockchain = blockchain.map((block) => {
    return (
      <div
        key={block.hash}
        style={{
          borderStyle: "solid",
          width: "800px",
          margin: "10px 0px 0px 10px",
        }}
      >
        <p>paylod: {block.payload}</p>
        <p>nonce: {block.nonce}</p>
        <p>hash: {block.hash}</p>
      </div>
    );
  });
  return <div>Blockchain here: {renderedBlockchain}</div>;
}

export default DisplayBlockchain;

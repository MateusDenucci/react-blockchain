import { useState } from "react";
import DisplayBlockchain from "../components/DisplayBlockchain";
import MineForm from "../components/MineForm";
import getSHA256Hash from "../utils/sha256";
import miningGif from "../images/mining.gif";

const MINING_DIFICULTY = 4;

function MiningPage() {
  const [blockchain, setBlockchain] = useState([]);
  const [isMining, setIsMining] = useState(false);

  const handleMining = async (payload) => {
    setIsMining(true);
    let nonce = 0;
    let hash = await getSHA256Hash(payload);
    while (!hash.endsWith("0".repeat(MINING_DIFICULTY))) {
      hash = await getSHA256Hash(payload + nonce.toString());
      nonce++;
    }
    setIsMining(false);
    const block = {
      payload,
      nonce,
      hash,
    };
    setBlockchain([...blockchain, block]);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-5">Blockchain Toy</h1>
      <MineForm handleMining={handleMining} />
      {isMining && (
        <div className="d-flex justify-content-center mb-2 mt-2">
          <img
            className="img-responsive"
            width={300}
            alt="Mining gif"
            src={miningGif}
          />
        </div>
      )}
      <hr></hr>
      <DisplayBlockchain blockchain={blockchain} />
    </div>
  );
}

export default MiningPage;

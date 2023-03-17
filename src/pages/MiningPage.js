import { useState } from "react";
import DisplayBlockchain from "../components/DisplayBlockchain";
import MineBlock from "../components/MineBlock";
import getSHA256Hash from "../utils/sha256";

function MiningPage() {
  const [blockchain, setBlockchain] = useState([]);
  const [isMining, setIsMining] = useState(false);

  const handleMining = async (payload) => {
    setIsMining(true);
    let nonce = 0;
    let hash = await getSHA256Hash(payload);
    while (!hash.endsWith("000")) {
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
    <div>
      <h1>Blockchain toy</h1>
      <MineBlock handleMining={handleMining} />
      <hr></hr>
      <DisplayBlockchain blockchain={blockchain} />
    </div>
  );
}

export default MiningPage;

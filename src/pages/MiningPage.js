import { useState } from "react";
import DisplayBlockchain from "../components/DisplayBlockchain";
import MineBlock from "../components/MineBlock";

function MiningPage() {
  const [blockchain, setBlockchain] = useState([]);
  const [isMining, setIsMining] = useState(false);

  const handleMining = (payload) => {
    const block = {
      payload,
    };
    setBlockchain([...blockchain, block]);
  };

  return (
    <div>
      <h1>Blockchain toy</h1>
      <MineBlock handleMining={handleMining} />
      <hr></hr>
      <DisplayBlockchain />
    </div>
  );
}

export default MiningPage;

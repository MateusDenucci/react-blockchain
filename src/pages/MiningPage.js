import { useState } from "react";
import DisplayBlockchain from "../components/DisplayBlockchain";
import MineBlock from "../components/MineBlock";

function MiningPage() {
  return (
    <div>
      <h1>Blockchain toy</h1>
      <MineBlock />
      <hr></hr>
      <DisplayBlockchain />
    </div>
  );
}

export default MiningPage;

import InputBox from "../components/InputBox";
import MineButton from "../components/MineButton";
import DisplayBlockchain from "../components/DisplayBlockchain";

function MiningPage() {
  return (
    <div>
      <h1>Blockchain toy</h1>
      <InputBox />
      <MineButton />
      <DisplayBlockchain />
    </div>
  );
}

export default MiningPage;

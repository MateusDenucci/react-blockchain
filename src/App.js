import MiningPage from "./pages/MiningPage";
import getSHA256Hash from "./utils/sha256";

function App() {
  getSHA256Hash("oi").then((result) => console.log(result));
  return (
    <div>
      <MiningPage />
    </div>
  );
}

export default App;

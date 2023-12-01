import { useState } from "react";
import { invoke } from "@tauri-apps/api";

function App() {
  const [num, setNum] = useState(0);
  const generateNumb = async () => {
    const data = await invoke("generate_rand_num");
    setNum(data);
  };
  return (
    <div>
      {num}
      <button onClick={generateNumb}>点击和RUST通信生成一个随机数</button>
    </div>
  );
}

export default App;

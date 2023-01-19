import TestLess from "./test-less";
import TestEnv from "./test-env";
import TestAlias from "./test-alias";
import { CaseWrapper } from "@/components";

function App() {
  return (
    <CaseWrapper>
      <TestAlias title="测试别名" />
      <TestEnv title="测试环境变量" />
      <TestLess title="测试CSS预处理器" />
    </CaseWrapper>
  );
}

export default App;

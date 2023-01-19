import React, { memo } from "react";

const TestEnv = () => {
  const env = import.meta.env;
  return <div>{JSON.stringify(env)}</div>;
};

export default memo(TestEnv);

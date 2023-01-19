import React, { memo } from "react";
import styles from "./index.module.less";
console.log("styles", styles);
const TestLess = () => {
  return (
    <div className={styles["test-less"]}>
      TestLessssss
      <div className={styles["test-case"]}>testCase</div>
    </div>
  );
};

export default memo(TestLess);

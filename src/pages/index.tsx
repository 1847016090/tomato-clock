/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useRef, useState } from "react";
import AlarmClock from "./components/clock";
import clockAudio from "./clock.mp3";
import "./index.less";
import { formatSeconds } from "./utils";
import { message } from "antd";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [time, setTime] = useState(-1);
  const [initialTime, setInitialTime] = useState(0);
  const timeRef = useRef<any>(null);
  useEffect(() => {
    if (time > 0) {
      timeRef.current = setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      message.success("任务已结束");
      playClock();
      setTime(-1);
    }
    return () => {
      timeRef.current && clearTimeout(timeRef.current);
    };
  }, [time]);

  const playClock = () => {
    const audio = new Audio(clockAudio);
    // audio.loop = true;
    audio.play();
  };

  const onWork = () => {
    const workTime = 25 * 60;
    setTime(workTime);
    setInitialTime(workTime);
  };

  const onRest = () => {
    const restTime = 1 * 60;
    setTime(restTime);
    setInitialTime(restTime);
  };
  return (
    <div className="clock-container">
      <AlarmClock time={time} initialTime={initialTime} />
      <div className="timer">{formatSeconds(time)}</div>
      <div className="types">
        <button className="long" onClick={onWork}>
          工作
        </button>
        <button className="short" onClick={onRest}>
          休息
        </button>
      </div>
    </div>
  );
};

export default Home;

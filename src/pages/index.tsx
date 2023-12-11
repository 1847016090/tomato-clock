/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useMemo, useRef, useState } from "react";
import AlarmClock from "./components/clock";
import clockAudio from "./clock.mp3";
import "./index.less";
import { formatSeconds } from "./utils";
import { message } from "antd";
import pause from "@/assets/pause.svg";
import play from "@/assets/play.svg";
import stop from "@/assets/stop.svg";

interface HomeProps {}
enum ClockStatusEnum {
  Play,
  Pause,
  Stop,
}

const Home: React.FC<HomeProps> = () => {
  const [time, setTime] = useState(-1);
  const [initialTime, setInitialTime] = useState(0);
  const [status, setStatus] = useState<ClockStatusEnum>(ClockStatusEnum.Stop);

  const timeRef = useRef<any>(null);
  useEffect(() => {
    if (time > 0) {
      timeRef.current =
        status === ClockStatusEnum.Play &&
        setTimeout(() => {
          setTime((time) => time - 1);
        }, 1000);
    } else if (time === 0) {
      message.success("任务已结束");
      playClock();
      onStop();
    }
    return () => {
      timeRef.current && clearTimeout(timeRef.current);
    };
  }, [time, status]);

  const playClock = () => {
    const audio = new Audio(clockAudio);
    // audio.loop = true;
    audio.play();
  };

  const onWork = () => {
    const workTime = 25 * 60;
    setStatus(ClockStatusEnum.Play);
    setTime(workTime);
    setInitialTime(workTime);
  };

  const onRest = () => {
    const restTime = 1 * 60;
    setTime(restTime);
    setInitialTime(restTime);
    setStatus(ClockStatusEnum.Play);
  };

  const onPlay = () => {
    setStatus(ClockStatusEnum.Play);
  };

  const onPause = () => {
    setStatus(ClockStatusEnum.Pause);
  };

  const onStop = () => {
    setStatus(ClockStatusEnum.Stop);
    setTime(-1);
  };

  const content = useMemo(() => {
    if (status === ClockStatusEnum.Stop) {
      return (
        <>
          <button className="long" onClick={onWork}>
            工作
          </button>
          <button className="short" onClick={onRest}>
            休息
          </button>
        </>
      );
    }
    if (status === ClockStatusEnum.Pause) {
      return (
        <img
          className="status-icon"
          src={pause}
          onClick={onPlay}
          title="点击播放"
        />
      );
    }
    if (status === ClockStatusEnum.Play) {
      return (
        <img
          className="status-icon"
          src={play}
          onClick={onPause}
          title="点击暂停"
        />
      );
    }
  }, [status]);

  return (
    <div className="clock-container">
      <AlarmClock time={time} initialTime={initialTime} />
      <div className="timer">{formatSeconds(time)}</div>
      <div className="types">{content}</div>
      {status !== ClockStatusEnum.Stop && (
        <img
          className="status-icon stop"
          src={stop}
          title="点击终止该次番茄钟"
          onClick={onStop}
        />
      )}
    </div>
  );
};

export default Home;

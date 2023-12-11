/* eslint-disable @typescript-eslint/explicit-function-return-type */
// export const formatTime =(time: number)=>{
//   const minutes = time / 60;
//   const seconds = time % 60;
//   if (minutes > )
// }

const showTime = (time: number) => {
  return time >= 10 ? String(time).slice(0, 2) : `0${time}`.slice(0, 2)
}
/** @name 将秒转化为时分秒格式 */
export const formatSeconds = (seconds: number) => {
  if (seconds < 0) return '00:00'
  /** @name 剩余的秒 */
  const restSeconds: number = seconds % 60
  /** @name 剩余的分 */
  const restMinutes: number = seconds / 60 >= 1 ? (seconds / 60) % 60 : 0
  /** @name 剩余的时 */
  const restHour: number = seconds / 60 / 60 >= 1 ? (seconds / 60 / 60) % 60 : 0

  if (restHour > 0) {
    return `${showTime(restHour)}:${showTime(restMinutes)}:${showTime(restSeconds)}`
  } else {
    return `${showTime(restMinutes)}:${showTime(restSeconds)}`
  }
}

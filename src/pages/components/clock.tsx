import { memo, useMemo } from 'react'
import './clock.less'

const AlarmClock = (props: any) => {
  const time = props.time
  const initialTime = props.initialTime

  const secondsDeg = useMemo(() => {
    if (time === -1) {
      return -90
    }
    return -90 + (initialTime - time) * 6
  }, [time])

  const minuteDeg = useMemo(() => {
    if (time === -1) {
      return -90
    }
    return -90 + ((initialTime - time) / 60) * 6
  }, [time])

  return (
    <div className="alarm-clock">
      <div
        className="second-pointer"
        style={{
          transform: `translateY(-50%) rotateZ(${secondsDeg}deg)`
        }}
      ></div>
      <div
        className="minute-pointer"
        style={{
          transform: `translateY(-50%) rotateZ(${minuteDeg}deg)`
        }}
      ></div>
    </div>
  )
}

export default memo(AlarmClock)

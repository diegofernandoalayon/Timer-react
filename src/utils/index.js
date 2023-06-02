export const addZero = (value) => {
  return value < 10 ? '0' + value : value
}

export const calculateTimeMilli = (timeStamp) => {
  const days = Math.floor(timeStamp / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeStamp % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeStamp % (1000 * 60)) / 1000)
  return {
    days,
    hours,
    minutes,
    seconds
  }
}
export const calculateTimeSeconds = (timeStamp) => {
  const hours = Math.floor((timeStamp % (60 * 60 * 60)) / (60 * 60))
  const minutes = Math.floor((timeStamp % (60 * 60)) / (60))
  const seconds = Math.floor((timeStamp % 60))
  return {
    hours,
    minutes,
    seconds
  }
}

export function formatViewCount(count) {
  if(count >= 100000000) {
    return (count / 100000000).toFixed(1) + '亿'
  } else if(count > 10000) {
    return (count / 10000).toFixed(1) + '万'
  }
  return count
}
export function formatPlayTime(time) {
  time /= 1000
  var min = Math.floor(time / 60)
  var sec = Math.floor(time % 60)
  min = min < 10 ? '0' + min: min
  sec = sec < 10 ? '0' + sec: sec
  var timeString = min + ':' + sec
  return timeString
}
export function formatLyrics(lyrics) {
  const lyricsList = []
  const lyricsLine = lyrics.split("\n")
  const timeReg = /\[(\d{2}):(\d{1,2}).(\d{2,3})\]/
  for(const lyric of lyricsLine) {
    if(!lyric) continue
    const result = timeReg.exec(lyric)
    // console.log(result);
    const min = result[1] * 60 * 1000
    const sec = result[2] * 1000
    const mil = result[3].length > 2 ? result[3] * 1 : result[3] * 10
    const time = min + sec + mil
    const text = lyric.replace(timeReg, "")
    lyricsList.push({time, text})
  }
  return lyricsList
}

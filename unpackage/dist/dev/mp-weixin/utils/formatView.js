"use strict";
function formatViewCount(count) {
  if (count >= 1e8) {
    return (count / 1e8).toFixed(1) + "亿";
  } else if (count > 1e4) {
    return (count / 1e4).toFixed(1) + "万";
  }
  return count;
}
function formatPlayTime(time) {
  time /= 1e3;
  var min = Math.floor(time / 60);
  var sec = Math.floor(time % 60);
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  var timeString = min + ":" + sec;
  return timeString;
}
function formatLyrics(lyrics) {
  const lyricsList = [];
  const lyricsLine = lyrics.split("\n");
  const timeReg = /\[(\d{2}):(\d{1,2}).(\d{2,3})\]/;
  for (const lyric of lyricsLine) {
    if (!lyric)
      continue;
    const result = timeReg.exec(lyric);
    if (!result)
      return [];
    const min = result[1] * 60 * 1e3;
    const sec = result[2] * 1e3;
    const mil = result[3].length > 2 ? result[3] * 1 : result[3] * 10;
    const time = min + sec + mil;
    const text = lyric.replace(timeReg, "");
    lyricsList.push({ time, text });
  }
  return lyricsList;
}
exports.formatLyrics = formatLyrics;
exports.formatPlayTime = formatPlayTime;
exports.formatViewCount = formatViewCount;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/formatView.js.map

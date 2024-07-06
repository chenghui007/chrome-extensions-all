chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
  console.log(JSON.stringify(info))
  document.querySelector('video').playbackRate = 4
}



chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: '视频倍数播放',
    id: 'playback'
  });
});


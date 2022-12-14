import _throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);
const KEY_STORAGE = 'videoplayer-current-time';

getTimeFromStorage();

player.on(
  'timeupdate',
  _throttle(function ({ seconds }) {
    giveTimetoStorage(seconds);
  }, 1000)
);

function giveTimetoStorage(sec) {
  localStorage.setItem(KEY_STORAGE, JSON.stringify(sec));
}

function getTimeFromStorage() {
  const timeCurrent = localStorage.getItem(KEY_STORAGE);
  if (timeCurrent) {
    player.setCurrentTime(JSON.parse(timeCurrent));
  }
}

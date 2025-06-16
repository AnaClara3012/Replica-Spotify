function playSong(path) {
  const audio = document.getElementById('audioPlayer');
  audio.src = path;
  audio.play();
  audio.hidden = false;
}

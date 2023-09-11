/* --------- Cached Elements ----------*/
const newHere = document.getElementById('new-here')


/* ---------- Music Function ----------*/
newHere.addEventListener('click', play)

function play() {
  const audioElem = new Audio('../assets/audio/retro-action-arcade-music-for-games-free-download.mp3')
  audioElem.volume = 0.1
  audioElem.play()
  console.log(audioElement)
}
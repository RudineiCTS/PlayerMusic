export default {
  createAudioElement(audio){
    this.audio = new Audio(audio);
  },
  get(){
    this.playPause = document.querySelector('button[name="play"]');
    this.playImg = document.querySelector('img[name="play-img"]')
    this.nextTrack = document.querySelector('button[name="next"]')
  },
  action(){
    this.playPause.onclick = () => this.togglePlayPause();
    this.nextTrack.onclick = () => this.next();
  }
}
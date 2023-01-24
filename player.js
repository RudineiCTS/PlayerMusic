 import elements from './playerElements.js'; 
 window.player ={
  audioData: audios,
  currentAudio:{},
  currentTrack:0,
  isPlaying:false,
  start(){
    elements.get.call(this);
    elements.action.call(this);
    this.currentAudio= this.audioData[this.currentTrack];
    elements.createAudioElement.call(this, this.currentAudio.file)
    // this.audio.src = this.currentAudio.file;
    this.audio.onended = () => this.next();
  },
  play(){
    this.isPlaying = true;
    this.audio.play()
    this.playImg.src = "./assets/pause.svg"
    console.log("tocando")
  },
  pause(){
    this.isPlaying = false;
    this.audio.pause();
    this.playImg.src = "./assets/playIcon.svg"
    console.log("pausado")
  },
  togglePlayPause(){
    if(this.isPlaying){
      this.pause();
    }else{
      this.play();
    }
  },
  next(){
    this.currentTrack++;
    if(this.currentTrack >= this.audioData.length){
      this.currentTrack = 0;
      this.audio.src = this.audioData[this.currentTrack].file
    }else{
      this.audio.src = this.audioData[this.currentTrack].file;
    }
    this.audio.play();
  }
}



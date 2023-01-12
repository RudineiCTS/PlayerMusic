 window.player ={
  audio: document.querySelector('audio'),
  audioData: audios,
  currentAudio:{},
  currentTrack:0,
  start(){
    this.currentAudio= this.audioData[this.currentTrack];
    this.audio.src = this.currentAudio.file;
    this.audio.onended = () => this.next();
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



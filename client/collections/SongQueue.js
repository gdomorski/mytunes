// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    //listens to the add event and calls the dequeue function 
    this.on('add', this.enqueue, this);
    //listens to the dequeue event and calls the dequeue function
    this.on('dequeue', this.dequeue, this);
    //listens to the ended event and calls the playnext function
    this.on('ended', this.playNext, this);
  },
  enqueue: function(song){
    //if there is only one song in the list
    if(this.length === 1){
      //play the first song
      this.playFirst();
    }
  },

  dequeue: function(song){

    //if there is still a song in the list
    if(this.at(0) === song){
      //call the playNext method
      this.playNext();
    } else {
      //or else remove the song
      this.remove(song);
    }
  },

  playNext: function(){
    //take away the first song
    this.shift();
    //if there are still songs in the list
    if (this.length >= 1) {
      //play the first song
      this.playFirst();
    } else {
      //or else trigger the stop method
      this.trigger('stop');
    }
  },

  playFirst: function(){
    //play the first song 
    this.at(0).play();
  }


});




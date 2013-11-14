var twitter = require('twitter')
//MAKE SURE YOU NEVER PUT YOUR ACTUAL KEYS INTO GITHUB
var twit = new twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
})
var SerialPort = require('serialport').SerialPort

var port = new SerialPort('/dev/ttyUSB0')

port.on('open', function(err) {
  if(!err) {
    twit.stream('user', {'with': 'user'}, function(stream) {
      stream.on('data', function(data){
        if(data.text){
          port.write(data.text.length)
          console.log(data.text.length)
        }
      })
    })
  }
  else{
    console.log(err);
  }
})

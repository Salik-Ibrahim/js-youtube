const clock = document.querySelector('#clock')

setInterval(function () {// this functions executes itself every n millisecond here n is 1000
   let date = new Date()
   // date.toLocaleTimeString();
   clock.innerHTML = date.toLocaleTimeString()
}, 1000)
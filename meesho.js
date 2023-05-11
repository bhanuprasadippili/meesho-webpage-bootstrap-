
// var deadline = new Date("Nov 23, 2022 15:28:00").getTime();
// var x = setInterval(function(){
//   var now = new Date().getTime();
//   var remainingTime = deadline - now;
//   var days = Math.floor(remainingTime/(1000*60*60*24));
// var hours = Math.floor((remainingTime%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
// document.getElementById("immgg").innerHTML ="Days: " +  days + " Hours: " + hours + " Minutes: " +  minutes + " Seconds: " + seconds;
//     if (remainingTime < 0) {
//         clearInterval(x);
//         document.getElementById("imgg").innerHTML = "EXPIRED";
//         document.getElementById("timer").style.backgroundImage="url(https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=)";
//         document.getElementById("timer").style.backgroundRepeat="no-repeat";
//         document.getElementById("timer").style.backgroundSize="100%";
//         document.getElementById("img").src="https://thumbs.gfycat.com/AdvancedApprehensiveAlligatorsnappingturtle-size_restricted.gif";
//     }
// },1000);
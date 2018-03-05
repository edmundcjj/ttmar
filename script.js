
var colours = ["red", "purple", "indigo", "grey"];
var clicks = 0;

function check_num_of_clicks(){
  if (clicks === 5){
    alert("You have clicked 5 times already");
  }
}

// Part 1
function change_background_colour(){
  clicks += 1;
  check_num_of_clicks();
  var colour_index = Math.floor((Math.random() * 4) + 0);
  var body = document.getElementsByTagName('body');
  body[0].style.backgroundColor = colours[colour_index];

}
document.getElementById('first_paragraph').addEventListener('click', change_background_colour);


// Part 2 - Paragrah 2
function reveal_para2_lyrics(){
  check_num_of_clicks();
  change_background_colour();
  var para2 = document.getElementsByClassName('second_paragraph');
  para2[0].style.display = "inline";
}
document.getElementById('second_paragraph').addEventListener('click', reveal_para2_lyrics);

// Part 2 - Chorus 1
function reveal_chorus1_lyrics(){
  check_num_of_clicks();
  change_background_colour();
  var chorus1 = document.getElementsByClassName('first_chorus');
  chorus1[0].style.display = "inline";
}
document.getElementById('first_chorus').addEventListener('click', reveal_chorus1_lyrics);

// Part 2 - Paragrah 3
function reveal_para3_lyrics(){
  check_num_of_clicks();
  change_background_colour();
  var para3 = document.getElementsByClassName('third_paragraph');
  for (var i=0; i<para3.length; i++){
    para3[i].style.display = "block";
  }
}
document.getElementById('third_paragraph').addEventListener('click', reveal_para3_lyrics);

// Part 2 - Paragrah 4
function reveal_para4_lyrics(){
  check_num_of_clicks();
  change_background_colour();
  var para4 = document.getElementsByClassName('fourth_paragraph');
  for (var i=0; i<para4.length; i++){
    para4[i].style.display = "block";
  }
}
document.getElementById('fourth_paragraph').addEventListener('click', reveal_para4_lyrics);

// Part 2 - Chorus 2
document.getElementById('second_chorus').addEventListener('click', function(){
  change_background_colour();
  check_num_of_clicks();
  var chorus2 = document.getElementsByClassName('second_chorus');
  if (clicks != 7) {
    chorus2[clicks - 1].style.display = "block";
  }
  else if (clicks >= 7) {
    alert("Sorry, no more clicking. This chorus only has 6 lines");
  }
});

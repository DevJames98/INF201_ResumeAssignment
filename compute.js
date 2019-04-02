//Salary Calculator Function

function SalaryCalculator(){

//Part1
  var hourlyRate = document.getElementById("rate").value;
  var numOfHours = document.getElementById("hours").value;

  var r = parseFloat(hourlyRate);
  var h = parseFloat(numOfHours);

  var mult = (r * h ) * 52;

  document.getElementById("change").innerHTML = mult;

//Part2
  var eval = "";

  //less than 20,000
  if(mult < 20000){
    eval = "The salary is too little.";
  }
  //between 20,000 - 25,000
  else if (mult >= 20000 && mult < 25000) {
    eval = "The salary is almost enough. Let's negotiate.";
  }
  //greater than 25,000
  else if (mult >= 25000){
    eval = "This is a great salary for me.";
  }
  else{
    eval = "";
  } //end if statement

  document.getElementById("eval").innerHTML = eval;

}

//Form Validation - Assignment 6
function ValidLikeSalad(){

  var hourlyRate = document.getElementById("rate").value;
  var numOfHours = document.getElementById("hours").value;

  if(hourlyRate == "" && numOfHours == ""){
    alert("Hey you didn't even fill out the form :(");
    return false;
  }
  else if(hourlyRate == ""){
    alert("Hey you missed something! Enter your hourly rate.");
    return false;
  }
  else if(numOfHours == ""){
    alert("Hey you missed something! Enter your hours per week.");
    return false;
  }

}


//Employment History Functions

function DisplayHunter(){

  var num = document.getElementById("numHunter").value;
  var convInt = parseInt(num);
  var output = "";

  var tasks=  ["Assisted in the creation of a new Hunter School of Education website using Google Sites.<br>",
              "In charge of managing and distributing necessary resources and copies to members of faculty of the Special Education Department.<br>",
              "Used Excel software to create and keep track of inventory within the office.<br>",
              "Learned how to use mail merge to send out mass amounts of emails to applicants.<br>",
              "In charge of keeping track of which Room Keys professors were using and when they were returned.<br>"
              ]

  var i = 0;
  while(i < convInt){

    output += tasks[i];
    //document.write("<br>");
    i++;

  }

  document.getElementById("changeHunter").innerHTML = output;


}

function DisplayCWC(){

  var num = document.getElementById("numCWC").value;
  var convInt = parseInt(num);
  var output = "";

  var tasks=  ["Acted as one of the building security members to ensure safety of the children.<br>",
              "Helped to serve food and ensure the cleanliness of the area.<br>",
              "Was in charge of taking photographs of the children during activities to showcase for parents.<br>",
              "Responsible for making sure kids were safe and hydrated while in the park.<br>",
              "In charge of managing the games that the kids would play throughout the day."
              ]

  var i = 0;
  while(i < convInt){

    output += tasks[i];
    //document.write("<br>");
    i++;

  }

  document.getElementById("changeCWC").innerHTML = output;


}

function DisplayIBM(){

var num = document.getElementById("numIBM").value;
var convInt = parseInt(num);
var output = "";

var tasks=  ["Assisted in the creation of a stylesheet that was used in one of their projects.<br>",
            "Worked in a team based environment to help create a design for a new game.<br>",
            "Expanded my knowledge of coding in HTML/CSS, JavaScript and AngularJS.<br>",
            "Learned the basics of how to network using LinkedIn.<br>",
            "Learned how to work and collaborate in a team environment."
            ]

var i = 0;
while(i < convInt){

  output += tasks[i];
  //document.write("<br>");
  i++;

}

document.getElementById("changeIBM").innerHTML = output;

}

/*
-----------------------------------------------------------------
/Scripts

*/

//Comment trail script- By Kurt (kurt.grigg@virgin.net)
//Script featured on Dynamic Drive
//Visit http://www.dynamicdrive.com for this script and more

colours=new Array('#ff0000','#00ff00','#ffffff','#ff00ff','#ffa500','#ffff00','#00ff00','#ffffff','ff00ff')

n = 10;
y = 0;
x = 0;

n6=(document.getElementById&&!document.all);
ns=(document.layers);
ie=(document.all);

d=(ns||ie)?'document.':'document.getElementById("';
a=(ns||n6)?'':'all.';
n6r=(n6)?'")':'';
s=(ns)?'':'.style';

if (ns){

for (i = 0; i < n; i++)

document.write('<layer name="dots'+i+'" top=0 left=0 width='+i/2+' height='+i/2+' bgcolor=#ff0000></layer>');

}

if (ie)

document.write('<div id="con" style="position:absolute;top:0px;left:0px"><div style="position:relative">');

if (ie||n6){

for (i = 0; i < n; i++)

document.write('<div id="dots'+i+'" style="position:absolute;top:0px;left:0px;width:'+i/2+'px;height:'+i/2+'px;background:#ff0000;font-size:'+i/2+'"></div>');

}

if (ie)

document.write('</div></div>');

(ns||n6)?window.captureEvents(Event.MOUSEMOVE):0;

function Mouse(evnt){

y = (ns||n6)?evnt.pageY+4 - window.pageYOffset:event.y+4;

x = (ns||n6)?evnt.pageX+1:event.x+1;

}

(ns)?window.onMouseMove=Mouse:document.onmousemove=Mouse;

function animate(){

o=(ns||n6)?window.pageYOffset:0;

if (ie)con.style.top=document.body.scrollTop + 'px';

for (i = 0; i < n; i++){

var temp1 = eval(d+a+"dots"+i+n6r+s);



randcolours = colours[Math.floor(Math.random()*colours.length)];

(ns)?temp1.bgColor = randcolours:temp1.background = randcolours;

if (i < n-1){

 var temp2 = eval(d+a+"dots"+(i+1)+n6r+s);

 temp1.top = parseInt(temp2.top) + 'px';

 temp1.left = parseInt(temp2.left) + 'px';

 }

else{

 temp1.top = y+o + 'px';

 temp1.left = x + 'px';

 }

}

setTimeout("animate()",10);

}

animate();

// -->

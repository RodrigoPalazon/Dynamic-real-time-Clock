//**** AUTO REFRESH PAGE *****************

function AutoRefresh( t ) {
    setTimeout("location.reload(true);", t);
}
document.body.setAttribute("onload" , "JavaScript:AutoRefresh(10000);")
//----------------------------------------------


//*******DATE and HOUR methods ******/
const date = new Date();
const hour = date.getHours();
let message ;
//-----------------------------------


//*****    H1   *********** */
let title1 = document.createElement('h1');
document.body.appendChild(title1);
let title1_message = document.createTextNode('The time now is: ');
title1.appendChild(title1_message);

title1.style.fontSize = '60px'; 
//-----------------------------------


//************CURRENT HOUR *******************/
let currentHour = document.createElement('div');
currentHour.setAttribute('id','currentHour');
document.body.appendChild(currentHour);
let currentHour_message = document.createTextNode(date.toLocaleString());
currentHour.appendChild(currentHour_message);

currentHour.style.fontSize = '100px';
//--------------------------------------------




//*****************  Body CSS  **********************
let bodyStyle = document.body.style;

bodyStyle.display = 'flex';
bodyStyle.flexDirection = 'column';
bodyStyle.alignItems = 'center';
bodyStyle.justifyContent = 'center';
bodyStyle.marginTop = '8%';
// --------------------------------------------------


//******** Div element to the Messages below  + (CSS)*/
let newDiv = document.createElement('div');
document.body.appendChild(newDiv);
newDiv.setAttribute('id','myDivStyle');

newDiv.style.fontSize = "130px";
//------------------------------------------


//*************  MESSAGES + CSS *************************


if(hour >=18 && hour <= 24 ){
    message = document.createTextNode('Good Evening');
    newDiv.style.color = 'white';
    newDiv.appendChild(message);
    bodyStyle.background = 'black';  
    title1.style.color = 'white';
    currentHour.style.color = 'yellow';
} 
else if(hour >= 12 && hour <= 17){
    message = document.createTextNode('Good Afternoon');
    newDiv.style.color = '#c9047b';
    newDiv.appendChild(message);
    bodyStyle.background = '#7dffff';
    title1.style.color = '#c9047b';
}
else{
    message = document.createTextNode('Good Morning');
    newDiv.style.color = 'green';
    newDiv.appendChild(message);
    bodyStyle.background = '#fff700';
    currentHour.style.color = 'black';
    title1.style.color = 'red';
}
//-----------------------------------------------





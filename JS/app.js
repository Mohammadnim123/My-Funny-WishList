'use strict'

// ------------------------------

function getRandomArbitrary(min, max) {
    var x= Math.random() * (max - min) + min;
   var y = Math.floor(x);
   return y ;
}






// -----------------------------------
var Submitions = function(wish,date,years){
    this.wish=wish;
    this.date=date;
    this.years=years;
    Submitions.all.push(this);

}
Submitions.all = [];
console.log(Submitions.all);


// ----------------------------------------
var form = document.getElementById('myform');

form.addEventListener('submit',handelSubmit);

function handelSubmit(event){
    event.preventDefault()

    var wish1 = document.getElementById("first").Value;
    
    var date1 = document.getElementById("second").Value;
var years1 = getRandomArbitrary(1,99);

new Submitions(wish1,date1,years1);
table.innerHTML='';
saveLS();
render();

}
// -------------------------------
var table = document.getElementById('mytable');
function render(){

var tabelArr = ['Wish Title','Expected Date','Your wish will come true after xD' ];
var tr1 = document.createElement('tr');
table.appendChild(tr1);
for(var i=0 ; i<tabelArr.length ; i++){
    var td1 = document.createElement('th');
    td1.textContent=tabelArr[i];
    tr1.appendChild(td1);
}
for(var j=0 ; j<Submitions.all.length ; j++){
    var tr = document.createElement('tr');
    
    var td = document.createElement('td');
    td.textContent=Submitions.all[j].wish;
    tr.appendChild(td);


    var td2 = document.createElement('td');
    td2.textContent=Submitions.all[j].date;
    tr.appendChild(td2);


    var td3 = document.createElement('td');
    td3.textContent=Submitions.all[j].years;
    tr.appendChild(td3);

}
}

function saveLS(){
    var saveSub = JSON.stringify(Submitions.all);
    localStorage.setItem('subkey' ,saveSub);
}

function getLS(){
var getJson = localStorage.getItem('subkey');

if(getJson){
    Submitions.all = JSON.parse(getJson);
}
}
getLS()
render();

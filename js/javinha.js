let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  let x = 0.1;
  let y = 0.2;
  let z = x + y            // the result in z will not be 0.3

  const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;      // person.length will return 0
person[0];          // person[0] will return undefined

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  document.getElementById("demo").innerHTML =
  person.firstName + " is " + person.age + " years old.";

  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  delete person["age"];
  
  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

  const person = {
    name: "John",
    today: new Date()
  };
  
  let myString = JSON.stringify(person);
  document.getElementById("demo").innerHTML = myString;

  // Define object
const obj = {counter : 0};

// Define setters and getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };

  // Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

// Define object
const obj = {counter:0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (i) {this.counter -= i;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let xw = sum(4, 9, 16, 25, 29, 100, 66, 77);

// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
myObj.firstName;

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);

const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);

const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

// the counter is now 3

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCarXY = new Car("Ford");

document.getElementById("demo").innerHTML = myCarXY.carname;

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCarWE = new Car("Ford");

// You can call 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demoXAXA").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();

function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

function changeText(id) {
  id.innerHTML = "Ooops!";
}

document.getElementById("id02").innerHTML = 
document.getElementById("id01").childNodes[0].nodeValue;

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
const child = document.getElementById("p1");
element.insertBefore(para, child);

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// some code (try to change x to 5)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

const myCollection = document.getElementsByTagName("p");
for (let i = 0; i < myCollection.length; i++) {
  myCollection[i].style.color = "red";
}

const myNodeList = document.querySelectorAll("p");

function goForward() {
  window.history.forward()
}

document.getElementById("demo").innerHTML = navigator.javaEnabled();

if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}

function myFunction() {
  alert('Hello');
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const myElement = document.getElementById("demoxew");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }
}

function myFunction() {
  window.history.go(-2);
}

sessionStorage.setItem("namex", "John Doex");

let i = 0;

function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  myDisplay(myText);
}

const xy = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    xy.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  xy.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

loadDoc("url-1", myFunction1);

loadDoc("url-2", myFunction2);

function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {cFunction(this);}
  xhttp.open("GET", url);
  xhttp.send();
}

function myFunction1(xhttp) {
  // action goes here
}
function myFunction2(xhttp) {
  // action goes here
}

const xmlDoc = xhttp.responseXML;
const xxw = xmlDoc.getElementsByTagName("ARTIST");

let txt = "";
for (let i = 0; i < x.length; i++) {
  txt += xxw[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("demo").innerHTML = txt;

xhttp.open("GET", "cd_catalog.xml");
xhttp.send();

xhttp.open("GET", "demo_get.asp?t=" + Math.random());
xhttp.send();

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {myFunction(this);}
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CD");
  let table="<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}

function showHint(str) {
  if (str.length == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
  xmlhttp.open("GET", "gethint.php?q=" + str);
  xmlhttp.send();
  }
}

function showHint(str) {
  if (str.length == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
  xmlhttp.open("GET", "gethint.asp?q=" + str);
  xmlhttp.send();
  }
}

function showCustomer(str) {
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("txtHint").innerHTML = this.responseText;
  }
  xhttp.open("GET", "getcustomer.php?q="+str);
  xhttp.send();
}

function displayCD(i) {
  document.getElementById("showCD").innerHTML =
  "Artist: " +
  cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br>Title: " +
  cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br>Year: " +
  cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}

person = {name:"John", age:31, city:"New York"};

/* {"employees":[
  { "firstName":"John", "lastName":"Doe" },
  { "firstName":"Anna", "lastName":"Smith" },
  { "firstName":"Peter", "lastName":"Jones" }
]}

<employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees>

*/

const texter = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(texter, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

// Storing data:
const myObjS = {name: "John", age: 31, city: "New York"};
const myJSON = JSON.stringify(myObjS);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let textS = localStorage.getItem("testJSON");
let obj = JSON.parse(textS);
document.getElementById("demoS").innerHTML = obj.name;

const myJSONX = '{"name":"John", "age":30, "car":null}';
const myObjX = JSON.parse(myJSONX);
x = myObjX.name;

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
};
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj[2];
}
xmlhttp.open("GET", "demo_file_array.php", true);
xmlhttp.send();

const dbParam = JSON.stringify({table:"customers",limit:20});
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  let text = "<select>"
  for (let x in myObj) {
    text += "<option>" + myObj[x].name + "</option>";
  }
  text += "</select>"
  document.getElementById("demo").innerHTML = text;
  }

xmlhttp.open("POST", "json_demo_html_table.php", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);

const obj = { table: "products", limit: 10 };
let s = document.createElement("script");
s.src = "jsonp_demo_db.php?x=" + JSON.stringify(obj);
document.body.appendChild(s);

function myFunc(myObj) {
  let txt = "";
  for (let x in myObj) {
    txt += myObj[x].name + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}

myElements = document.querySelectorAll("p.intro");

content = myElement.html();

myElement.hide();

myParent = $("#02").parent().prop("nodeName"); ;

const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Plot Scatter
ctx.fillStyle = "red";
for (let i = 0; i < xArray.length-1; i++) {
  let x = xArray[i]*400/150;
  let y = yArray[i]*400/15;
  ctx.beginPath();
  ctx.ellipse(x, y, 2, 3, 0, 0, Math.PI * 2);
  ctx.fill();
}

const xArrayS = [55, 49, 44, 24, 15];
const yArrayS = ["Italy","France","Spain","USA","Argentina"];

const data = [{
  x: xArrayS,
  y: yArrayS,
  type: "bar",
  orientation: "h",
  marker: {color:"rgba(255,0,0,0.6)"}
}];

const layout = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production"
    }
  }
});

function drawChart() {
  // Set Data
  const data = google.visualization.arrayToDataTable([
    ['Price', 'Size'],
    [50,7],[60,8],[70,8],[80,9],[90,9],[100,9],
    [110,10],[120,11],[130,14],[140,14],[150,15]
    ]);
  // Set Options
  const options = {
    title: 'House Prices vs Size',
    hAxis: {title: 'Square Meters'},
    vAxis: {title: 'Price in Millions'},
    legend: 'none'
  };
  // Draw Chart
  const chart = new google.visualization.LineChart(document.getElementById('myChart'));
  chart.draw(data, options);
  }

  // Set Dimensions
const xSize = 500;
const ySize = 500;
const margin = 40;
const xMax = xSize - margin*2;
const yMax = ySize - margin*2;

// Create Random Points
const numPoints = 100;
const datazz = [];
for (let i = 0; i < numPoints; i++) {
  data.push([Math.random() * xMax, Math.random() * yMax]);
}

// Append SVG Object to the Page
const svg = d3.select("#myPlot")
  .append("svg")
  .append("g")
  .attr("transform","translate(" + margin + "," + margin + ")");

// X Axis
const xzz = d3.scaleLinear()
  .domain([0, 500])
  .range([0, xMax]);

svg.append("g")
  .attr("transform", "translate(0," + yMax + ")")
  .call(d3.axisBottom(x));

// Y Axis
const yzz = d3.scaleLinear()
  .domain([0, 500])
  .range([ yMax, 0]);

svg.append("g")
  .call(d3.axisLeft(y));

// Dots
svg.append('g')
  .selectAll("dot")
  .data(data).enter()
  .append("circle")
  .attr("cx", function (d) { return d[0] } )
  .attr("cy", function (d) { return d[1] } )
  .attr("r", 3)
  .style("fill", "Red");
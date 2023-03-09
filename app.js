/*
let x = 0;

let myArray1 = ["white", "#e6ccff", "#d9b3ff", "#cc99ff", "#bf80ff", "#b366ff", "#a64dff", "#9933ff", "#8c1aff"];


let y = 0;
function addOne() {
    x = x + 1;
    document.getElementById('valuePara').innerHTML = ("Count: " + x);
    y = y + 1;
    let colorArr1 = myArray1[y];
    document.body.style.backgroundColor = colorArr1;

}


function subOne() {
    x = x - 1;
    document.getElementById('valuePara').innerHTML = ("Count: " + x);
    y = y - 1;
    let colorArr1 = myArray1[y];
    document.body.style.backgroundColor = colorArr1;
}


function showArray() {
    document.getElementById("show").innerHTML = myArray1;
}

let obj = "max";

let myObject = {
    0: "Vasya",
    [obj + "Speed"]: 12,
    height: 1,
};

let first = myObject.wheels = 4;

function showObject() {
    let value = myObject.wheels;
    document.getElementById("showObject").innerHTML = myObject.wheels;
}

console.log(myObject[0]);
console.log(myObject["0"]);



let Example_1 = Symbol('id');


alert(Example_1.toString());
console.log(Example_1);

*/


/*let correctName = "admin";
let correctPassword = "password";


let currentBalance = 1000;

function testName() {
    let attemptName = document.getElementById('formName').value;

    let attemptPassword = document.getElementById('formPass').value;

    let attemptBalance = document.getElementById('withdrawal').value;

    let newBalance = currentBalance - attemptBalance;

    if (attemptName != correctName) {
        alert("Incorrect name");
    } else if (attemptPassword != correctPassword) {
        alert("Incorrect password");
    } else if (attemptBalance > currentBalance) {
        alert("Insufficient funds");
    } else if (attemptBalance < 0) {
        alert("Incorrect value of Withdrawal");
    } else {
        document.getElementById('Info').innerHTML = 'Your balance:' + newBalance;
    }
в
}*/

/* 
const ourArea = document.querySelector('textarea');

const onKey = e => {
    document.getElementById('pId').innerHTML += e.code + e.key;

}
ourArea.addEventListener('keydown', onKey); */



/* 
let items = document.querySelectorAll('.word');
let item = document.querySelector('.word');


function showWord() {
    
    for ( let  item1 of items) {
    item1.classList.remove('word-active');
    }
    item.classList.add('word-active');
    item = item.nextElementSibling;

}


setInterval(showWord, 1000);
setInterval(() => {
    item = document.querySelector('.word');
}, 8000);
 */



/* 
let btn = document.getElementById('btn1');
let colText = document.getElementById('colorText');

btn.onclick = function() {
    let text = document.getElementById('text1').value;
    let arr1 = Array.from(text);



    for( let i = 0; i < arr1.length; i++) {
    if (isFinite(arr1[i])) { 
        alert('no numbers');
        return;
    }

    
    for( let i = 0; i < arr1.length; i++) {

        if (arr1[i] === arr1[i].toUpperCase()) {
            let bigDiv = document.createElement('span');
            bigDiv.className = 'colored1';
            bigDiv.innerHTML = arr1[i];
            colText.append(bigDiv);
        } else if (arr1[i] === arr1[i].toLowerCase()) {

            let smallDiv = document.createElement('span');
            smallDiv.innerHTML = arr1[i];
            colText.append(smallDiv);
        }

  
    }
    }
} */


/* 

function numberReturn(str) {

     let ar1 = Array.from(str);
     let ar2 = [];

     for ( let i = 0; i < ar1.length; i++) {
        if (isFinite(ar1[i]) && ar1[i] !== '' && ar1[i] !== ' ') {
            ar2.push(ar1[i]);
        }
     }
     console.log(ar2);

}

numberReturn('asd23rd32e321 .234567uhgrew234  5 67 ytre w456y'); */

/* 
let url = 'https://jsonplaceholder.typicode.com/users';




function sendRequest(method, url, body = null) {

    return new Promise((resolve,reject) => {
        
let xhr = new XMLHttpRequest;


xhr.open(method, url);
xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = () => {
    if(xhr.status >= 400) {
        reject(xhr.response);
    } else  {
        resolve(xhr.response);
    }
}

xhr.onerror = () => {
    reject(xhr.response);
}

xhr.send(JSON.stringify(body))
    })

} */


/* sendRequest('GET', url)
.then(data => {console.log(data)})
.catch(err => {console.log(err)}) */
    



/* let body = {
    name: "asf",
    age: 23,
}

let url = 'https://jsonplaceholder.typicode.com/users';

let div = document.querySelector('.response');


function sendRequest(method, url, body = null) {
    const headers = {
        "Content-Type": 'application/json'
    };
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers,
    }).then(response => {
        if(response.ok) {
        return response.json()
        }

        return response.json().then(error => {

            const err = new Error('Something went wrong');
            err.data = error;
            throw err;
        
        })
    });

}

sendRequest('POST', url, body)
.then(data => {div.innerHTML = JSON.stringify(data);})
.catch(err => {console.log(err)}); */




/* 
function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);

}


function getcookie(name) {
    const cookies = document.cookie.split('; ');
    const result = cookies.find(el => el.startsWith(name + '='));
    return result ? decodeURIComponent(result.slice(name.length + 1)) : null;
}


setCookie('username', 'Ivan');
getcookie('username'); */




/*
let element = document.querySelector('.reveal');
window.onscroll = () => {
    let result  = element.getBoundingClientRect();
    
    if (result.bottom > 114 && result.bottom < 614) {
        element.className = 'reveal-active'
        console.log(result.bottom);
    } else {
        element.className = 'reveal'
        
    }

}

const options = {
    threshold: 1, 
    
};



const callback = function( entries, observer) {
    
    entries.forEach(element => {
        
        const {  target, isIntersecting, intersectingRatio } = element;
        
        if(isIntersecting) {
            target.style.backgroundColor = 'red';
        } else {
            target.style.backgroundColor = 'black';
            console.log(element);
        }
        
    });
}
let target = document.querySelector('.reveal');


const observer = new IntersectionObserver( callback, options);

observer.observe(target);
*/
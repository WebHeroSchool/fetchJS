


let body = document.body;
let url = window.location.toString();

let getName = (url) => {
 let urlSeparation = url.split('=');
 console.log(urlSeparation);
 let userName = urlSeparation[1];
 if (userName == undefined){
  userName = 'MariaKasa';
 }
 return userName;
}
let name = getName(url);
getName()

fetch(`https://api.github.com/users/${getName(url)}`)
.then(res => res.json()) 
.then(json => {
let name = json.name;
let login = json.login;
let id = json.id;
let body = document.body;
let imya = document.createElement('p');
imya.innerHTML = name;
document.body.appendChild(imya)
let logo = document.createElement('p');
logo.innerHTML = login;
document.body.appendChild(logo)
let nomer = document.createElement('p');
nomer.innerHTML = id;
document.body.appendChild(nomer)
})


.catch(err =>console.log(err))

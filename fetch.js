


fetch('https://api.github.com/users/MariaKasa')
.then(res=>res.json())
// .then(json=> console.log(json))
.then(json => {
	let name = json.name;
console.log(name)
let login = json.login;
console.log(login);
let id = json.id;
console.log(id)
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


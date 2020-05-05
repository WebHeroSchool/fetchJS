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
    getName(url);

    function notFound(name) {
        if(name == undefined) {
        document.write('User is not found');
    }
}


    fetch(`https://api.github.com/users/${getName(url)}`)
    .then(res => res.json()) 
    .then(json => {
    let name = json.name;
    let login = json.login;
    let id = json.id;
    let photo = json.avatar_url;
    const body = document.body;
    let userName = document.createElement('p');
    userName.innerHTML = name;
    document.body.appendChild(userName)
    let logo = document.createElement('p');
    logo.innerHTML = login;
    document.body.appendChild(logo)
    let userId = document.createElement('p');
    userId.innerHTML = id;
    document.body.appendChild(userId)
    let elementForPhoto = document.createElement('img');
    let newString = document.createElement('br');
    elementForPhoto.src = photo;
    body.appendChild(newString);
    body.appendChild(elementForPhoto);
    notFound(name)
    })


    .catch(err =>console.log(err));

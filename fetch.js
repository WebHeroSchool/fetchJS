

    let url = window.location.toString();
     const date = new Date();

     function withoutLoader  () {
        var preloader = document.querySelector('#preload'); 
        if ( !preloader.classList.contains('done'));
        {
            preloader.classList.add('done');
        }
     }

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

 const getDate = new Promise((resolve, reject) =>
  setTimeout(() => date ? resolve(date) : reject('Unknown'), 2000)
);
   


    let getRequest = fetch(`https://api.github.com/users/${getName(url)}`)

    Promise.all([getRequest, getDate])
  .then(([request, date]) => {
    requestFromPromise = request;
    dateFromPromise = date;
  })

    .then(res => requestFromPromise.json()) 
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
    const date = document.createElement('p');
    date.innerHTML = `${dateFromPromise}`;
    body.appendChild(date);
    withoutLoader(preload);
  })
   

    .catch(err =>notFound);

 

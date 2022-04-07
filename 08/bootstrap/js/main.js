
const validCrendentials = {
    username: 'camilo@gmail.com',
    password: '12345678'
};


const $username = document.getElementById('inUsername')
const $password = document.getElementById('inPassword')
const $submit = document.getElementById('submitbtn')
const $private = document.getElementById('private')
const myCrendentials = {
    username: null,
    password: null,
};

const handleUsername = (event) => {    
    myCrendentials.username = event.target.value
}

const handlePassword = (event) => {
    myCrendentials.password = event.target.value
}

const handlesubmit = (e) => {
    e.preventDefault()
    const username = myCrendentials.username === validCrendentials.username;
    console.log(username)
    const password = myCrendentials.password === validCrendentials.password;
    console.log(password)
    if (username && password) {
        console.log('permitir acceso')
        $private.classList.remove('disabled')

    } else {
        console.log('denegar acceso')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    $username.addEventListener('input', handleUsername)
    $password.addEventListener('input', handlePassword)
    $submit.addEventListener('click', handlesubmit)
} )


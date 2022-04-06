
const validCrendentials = {
    username: 'celulares@gmail.com',
    password: '12345678'
};


const $username = document.getElementById('inUsername')
const $password = document.getElementById('inPassword')
const $submit = document.getElementById('submitbtn')

const myCrendentials = {
    username: null,
    password: null,
};

const handleUsername = (event) => {
    //console.log('value', event.target.value)
    myCrendentials.username = event.target.value
}

const handlePassword = (event) => {
    //console.log('value', event.target.value)
    myCrendentials.password = event.target.value
}

const handlesubmit = () => {
    const username = myCrendentials.username === validCrendentials.username;
    //console.log('username')
    const password = myCrendentials.password === validCrendentials.password;
    //console.log('password')
    if (username && password) {
        console.log('permitir acceso')
    } else {
        console.log('denegar acceso')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    $username.addEventListener('input', handleUsername)
    $password.addEventListener('input', handlePassword)
    $submit.addEventListener('click', handlesubmit)
} )


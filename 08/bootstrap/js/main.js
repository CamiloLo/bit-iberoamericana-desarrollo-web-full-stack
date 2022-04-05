const $username = document.getElementById('inUsername')
const $password = document.getElementById('inPassword')
const $submit = document.getElementById('submitbtn')

const handleUsername = () => {
    console.log('inUsername')
}

const handlePassword = () => {
    console.log('inPassword')
}

const handlesubmit = () => {
    console.log('submitbtn')
}

document.addEventListener('DOMContentLoaded', () => {
    $username.addEventListener('input', handleUsername)
    $password.addEventListener('input', handlePassword)
    $submit.addEventListener('click', handlesubmit)
} )


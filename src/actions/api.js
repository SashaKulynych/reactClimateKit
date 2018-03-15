import {host} from './const'

export async function login(login) {
    let formData = new FormData();
    for(let i in login){
        console.log(i,login[i])
        formData.append(i, login[i]);
    }
    let response = await fetch(host+'api/login', {
        method: 'POST',
        body: formData
    })
    return response
}

export async function register(registration) {
    let formData = new FormData();
    for(let i in registration){
        console.log(i,registration[i])
        formData.append(i, registration[i]);
    }
    console.log(formData)
    let response = await fetch(host+'api/register', {
        method: 'POST',
        body:formData
    })
    return response
}
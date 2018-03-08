import {host} from './const'

export async function login() {
    let response = await fetch(host+'api/login', {
        method: 'POST',
        body: JSON.stringify({})
    })
}

export async function register(registration) {
    let formData = new FormData();
    for(let i in registration){
        console.log(i,registration[i])
        formData.append(i, registration[i]);
    }
    console.log(formData)
    let response = await fetch(host+'api/register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        mode:'no-cors',
        body:formData
    })


    console.log(response)
    if(response.status !== 200) throw new Error('Проблема з реєстрацією');


}
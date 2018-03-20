import {host} from './const'

export async function login(login) {
    let formData = new FormData();
    for(let i in login){
        console.log(i,login[i])
        formData.append(i, login[i]);
    }

    return await fetch(host+'api/login', {
        method: 'POST',
        body: formData
    })
}

export async function register(registration) {
    let formData = new FormData();
    for(let i in registration)
        formData.append(i, registration[i]);
    return await fetch(host+'api/register', {
        method: 'POST',
        body:formData
    })
}
export async function getNews() {
    await fetch(host+'api/get-news', {
        method: 'GET',
    }).then((response)=>response.json())
        .then((res)=>console.log('getNews ',res))
}
export async function getManufact() {
    await fetch(host+'api/get-manufact', {
        method: 'GET',
    }).then((response)=>response.json())
        .then((res)=>console.log('getManufact ',res))
}
export async function getCategories(id) {
    return await fetch(host+'api/get-category?manufact='+id, {
        method: 'GET'
    }).then((response)=>response.json())
}
export async function getSubCategories(id) {
    await fetch(host+'api/get-sub-category?category='+id, {
        method: 'GET'
    }).then((response)=>response.json())
        .then((res)=>console.log('getSubCategories  ',res))
}
export async function getModels() {
    return await fetch(host+'api/get-models?product=2', {
        method: 'GET'
    }).then((response)=>response.json())
        .then((res)=>console.log('getModels',res))
}
export async function getProducts() {
    await fetch(host+'api/get-products?sub-category=1', {
        method: 'GET'
    }).then((response)=>response.json())
        .then((res)=>console.log('getProducts  ',res))
}
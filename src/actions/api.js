import {host} from './const'

export async function login(login) {
    let formData = new FormData();
    for(let i in login){
        formData.append(i, login[i]);
    }

    return await fetch(host+'api/login', {
        method: 'POST',
        body: formData
    })
}
export async function getProduct(id) {
    return await fetch(host+'api/get-product/'+id, {
        method: 'GET',
    }).then((response)=>response.json())
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
    return await fetch(host+'api/get-news', {
        method: 'GET',
    }).then((response)=>response.json())
}
export async function getNewsPage() {
    await fetch(host+'api/get-news?all=1', {
        method: 'GET',
    }).then((response)=>response.json())
        .then((res)=>console.log('getNewsPage ',res))
}
export async function getManufact() {
    return await fetch(host+'api/get-manufact', {
        method: 'GET',
    }).then((response)=>response.json())
}
export async function getCategories() {
    return await fetch(host+'api/get-category', {
        method: 'GET'
    }).then((response)=>response.json())
}
export async function getSubCategories(id) {
    return await fetch(host+'api/get-sub-category?category='+id, {
        method: 'GET'
    }).then((response)=>response.json())
}
export async function getModels() {
    return await fetch(host+'api/get-models?product=2', {
        method: 'GET'
    }).then((response)=>response.json())
        .then((res)=>console.log('getModels',res))
}
export async function getProducts(id) {
    return await fetch(host+'api/get-products?sub_category='+id, {
        method: 'GET'
    }).then((response)=>response.json())
}
const API_URL = 'http://127.0.0.1:8000';

export async function list() {
    const response = await fetch(API_URL + '/api/contact/list', {
        method: "GET",
        credentials: "include"
    });
    return response.json();
}

export async function add(name) {
    const response = await fetch(`${API_URL}/api/contact/add/${name}`, {
        method: "GET",
        credentials: "include"
    });
    return response.json();
}

export async function remove(name) {
    const response = await fetch(`${API_URL}/api/contact/remove/${name}`, {
        method: "GET",
        credentials: "include"
    });
    return response.json();
}
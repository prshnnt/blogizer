const API_URL = 'http://127.0.0.1:8000';

export async function signup(credentials) {
    const response = await fetch(API_URL + '/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...credentials }),
    });
    return response.json();
}

export async function login(creds) {
    const response = await fetch(API_URL + '/api/user/login', {
        method: 'POST',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...creds }),
    });
    return response.json();
}

export async function fetchProfile() {
    const response = await fetch(API_URL + '/api/user/profile', {
        method: "GET",
        credentials: "include"
    });
    return response.json();
}
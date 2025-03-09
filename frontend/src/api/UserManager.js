export async function signup(credentials) {
    const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...credentials }),
    });
    return response.json();
}

export async function login(credentials) {
    const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...credentials }),
    });
    return response.json();
}

export async function fetchProfile(authToken) {
    const response = await fetch('/api/user/profile');
    return response.json();
}
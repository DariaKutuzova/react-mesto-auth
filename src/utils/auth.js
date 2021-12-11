export const BASE_URL = 'https://auth.nomoreparties.co'

function handleResponse(res) {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(res.status)
}

export function register(email, password) {
    return fetch(`${BASE_URL}/signup`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
};

export function authorize(email, password) {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
        .then(handleResponse)
};

export function checkToken(jwt) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${jwt}`
        }
    })
        .then(handleResponse)
}


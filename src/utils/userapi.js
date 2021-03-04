const loginUser = (userCreds) => {
    return fetch(`/.netlify/functions/login-user`, {
        body: JSON.stringify(userCreds),
        method: 'POST'
    }).then(response => {
        return response.json()
    })
}

const addUser = (userCreds) => {
    return fetch(`/.netlify/functions/add-user`, {
        body: JSON.stringify(userCreds),
        method: 'POST'
    }).then(response => {
        return response.json()
    })
}

export default {
    login: loginUser,
    add: addUser
}
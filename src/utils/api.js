/* Frontend code from src/utils/api.js */
/* Api methods to call /functions */

const createMenuItem = (data) => {
    return fetch('/.netlify/functions/insert-menu-item', {
        body: JSON.stringify(data),
        method: 'POST'
    }).then(response => {
        return response.json()
    })
}

const displayAllMenuItems = () => {
    return fetch('/.netlify/functions/display-menu-items').then((response) => {
        return response.json()
    })
}

const updateMenuItem = (todoId, data) => {
    return fetch(`/.netlify/functions/update-menu-item/${todoId}`, {
        body: JSON.stringify(data),
        method: 'POST'
    }).then(response => {
        return response.json()
    })
}

const deleteMenuItem = (menuItemId) => {
    return fetch(`/.netlify/functions/delete-menu-item/${menuItemId}`, {
        method: 'POST',
    }).then(response => {
        return response.json()
    })
}

const batchDeleteMenuItem = (menuItemIds) => {
    return fetch(`/.netlify/functions/batch-delete`, {
        body: JSON.stringify({
            ids: menuItemIds
        }),
        method: 'POST'
    }).then(response => {
        return response.json()
    })
}

export default {
    create: createMenuItem,
    readAll: displayAllMenuItems,
    update: updateMenuItem,
    delete: deleteMenuItem,
    batchDelete: batchDeleteMenuItem
}

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

const updateMenuItem = (menuId, data) => {
    return fetch(`/.netlify/functions/update-menu-item/${menuId}`, {
        body: JSON.stringify({ _id: menuId, data: data }),
        method: 'PUT'
    }).then(response => {
        return response.json()
    })
}

const deleteMenuItem = (menuItem) => {
    return fetch(`/.netlify/functions/delete-menu-item/${menuItem.name}`, {
        method: 'POST',
        body: JSON.stringify(menuItem)
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

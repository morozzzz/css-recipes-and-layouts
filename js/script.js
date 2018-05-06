const spinner = document.querySelector('.loading-spinner');
const menu = document.querySelector('.navigation');
const activeMenuItemId = sessionStorage['activMenuItemId'];
const menuItemToSetActive = document.querySelector('#' + activeMenuItemId);
const menuChildNodes = document.querySelector('.navigation').childNodes;
const firstMenuItem = Object.keys(menuChildNodes)
    .map(function(key) { return menuChildNodes[key]; })
    .filter(function(node) { return node.nodeName === 'LI'; })
    .shift()
    .querySelector('a');

const getMenuItemId = function(event) {
    const menuItem = event.target;
    const currentMenuItemId = menuItem.id;
    sessionStorage.setItem('activMenuItemId', currentMenuItemId);
};

const deleteSpinner = function () { document.body.removeChild(spinner); };

menu.addEventListener('click', getMenuItemId);

menuItemToSetActive
    ? menuItemToSetActive.classList.add('active')
    : firstMenuItem.classList.add('active');

window.onbeforeunload = function() {
    window.onunload = function() {
        window.sessionStorage.isMySessionActive = 'false';
    };
    return undefined;
};

window.onload = function() {
    window.sessionStorage.isMySessionActive = 'true';
};

setTimeout(deleteSpinner, 2000);
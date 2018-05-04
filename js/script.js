const menu = document.querySelector('.navigation');
const activeMenuItemId = sessionStorage.activMenuItemId;
const menuItemToSetActive = document.querySelector(`#${activeMenuItemId}`);
const menuChildNodes = document.querySelector('.navigation').childNodes;
const firstMenuItem = Object.keys(menuChildNodes)
    .map(key => menuChildNodes[key])
    .filter(node => node.nodeName === 'LI')
    .shift()
    .querySelector('a');

const getMenuItemId = (event) => {
    const menuItem = event.target;
    const currentMenuItemId = menuItem.id;
    sessionStorage.setItem('activMenuItemId', currentMenuItemId);
};

menu.addEventListener('click', getMenuItemId);

menuItemToSetActive
    ? menuItemToSetActive.classList.add('active')
    : firstMenuItem.classList.add('active');

window.onbeforeunload = () => {
    window.onunload = () => {
        window.sessionStorage.isMySessionActive = 'false';
    };
    return undefined;
};

window.onload = () => {
    window.sessionStorage.isMySessionActive = 'true';
};

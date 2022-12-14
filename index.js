// Let's start with javascript - giving brain to our website.
const menuItems = document.querySelectorAll('.menu-item');


// Remove active class from all menu-items
// alert();

const changeActiveItem = () => {
    menuitems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup'),
                style.display = 'none';
        } else {
            document.querySelector('.notifications-popup'),
                style.display = 'block';
        }
    })
})
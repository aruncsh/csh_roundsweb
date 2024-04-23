function Menu(e) {
    let list = document.querySelector('ul');
    let menuItems = document.querySelectorAll('ul li');

    if (e.name === 'menu') {
        e.name = "close";
        list.classList.add('top-[80px]');
        list.classList.add('opacity-100');
    } else {
        e.name = "menu";
        list.classList.remove('top-[80px]');
        list.classList.remove('opacity-100');
    }

    // Close the menu if an item is clicked
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            e.name = "menu";
            list.classList.remove('top-[80px]');
            list.classList.remove('opacity-100');
        });
    });
}


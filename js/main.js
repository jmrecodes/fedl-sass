window.onload = () => {
    let header = document.querySelector('header');
    let clicked = false;

    header.addEventListener('click', event => {
        let anchors = document.querySelectorAll('nav li a');
        let clickedItem = null;

        [...anchors].some(item => {
            if (event.target === item) {
                clicked = true;
                clickedItem = item;
                return true;
            }

            return false;
        })

        if (clicked) {
            event.preventDefault();
            document.querySelector('#' + clickedItem.dataset.id).scrollIntoView();
            clicked = false;
        }
    })
}

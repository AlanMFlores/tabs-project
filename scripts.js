const tabs = document.querySelector('.tabs');
const btns = document.querySelectorAll('.tab-btn');
const items = document.querySelectorAll('.about-item');

tabs.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if(id) {
        btns.forEach((btn) => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })

        items.forEach((item) => {
            item.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active');
    }
})
const input = document.querySelectorAll('input');

input.forEach(el => {
    el.addEventListener('click', (event) => {   
        document.location.replace(`/${event.target.value}`);
     });
});




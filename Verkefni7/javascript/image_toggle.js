const img = document.getElementById('gremlin');

let toggle = true;

img.addEventListener('click', function() {
    toggle = !toggle;

    if (toggle) {
        img.src = 'images/gremlin_in_cote.svg';
    }else {
        img.src = 'images/gremlin_flasher_scaned.svg';
    }

    // img.src = 'images/gremlin_in_cote.svg';
})
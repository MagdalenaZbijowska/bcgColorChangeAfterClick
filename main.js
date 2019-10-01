
window.addEventListener('click', (event) => {

    const color = getColor(event);
    document.body.style.backgroundColor = color;
});

const getColor = (e) => {
    if (e.clientX % 2 === 0) {
        if (e.clientY % 2 === 0) {
            return "red";
        }
        else { return "yellowgreen"; }
    }
    if (e.clientY % 2 === 0) {
        return "yellowgreen";
    }
    else { return "royalblue"; }
}
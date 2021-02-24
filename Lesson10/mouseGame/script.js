const mouseMove = () => {
    document.addEventListener('mousemove', (e) => {
    let XCoordinate = e.pageX - 200;
    let YCoordinate = e.pageY - 60;
    const mouse = document.getElementById("mouse");
    mouse.style.cssText = `position: absolute; left: ${XCoordinate}px; top: ${YCoordinate}px`
})
}
mouseMove();
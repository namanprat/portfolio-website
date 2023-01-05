const cursor = document.querySelector(".cursor");

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
}

// let links = Array.from(document.querySelectorAll(".cta"));
// console.log(links);
// links.forEach((link) => {
//     link.addEventListener("mouseover", () => {
//         innerCursor.classList.add("grow");
//     });
//     link.addEventListener("mouseleave", () => {
//         innerCursor.classList.remove("grow");
//     });
// });
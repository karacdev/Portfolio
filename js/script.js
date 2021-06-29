document.addEventListener("DOMContentLoaded", () => {
    //MIDDLE WRAPPER
    let letter = document.querySelectorAll('#kara');
    anime({
        targets: "#kara", 
        translateY: [-50,0],
        delay: (el, i) => 300 + 70 * i,
    })
})
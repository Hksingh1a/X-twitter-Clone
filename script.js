console.log("heelp")
// document.querySelectorAll(".heart").addEventListener("click",e =>{
//     const 
//     colorchange.forEach(colorchange => {if (colorchange.style.color=="white") {
//         colorchange.style.color="red"
//         console.log("red")
//     } else {
//         colorchange.style.color="white"
//         console.log("white")
//     }
        
//     })
     
// })
colorchange=document.querySelectorAll(".heart")
document.querySelectorAll(".heart").forEach(colorchange => {
    colorchange.addEventListener("click", e => {
        if (colorchange.style.color === "white") {
            colorchange.style.color = "red";
        } else {
            colorchange.style.color = "white";
        }
    });
});
document.querySelector(".Explore").addEventListener("click",e =>{
    const visichange=document.querySelector(".searchba");
    
    if (visichange.style.display=="none") {
        visichange.style.display="block"
        console.log("if")
    } else {
        visichange.style.display="none"
        console.log("else")
    }
    
})

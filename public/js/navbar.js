function openSidebar(e){
    togller.classList.add("focused")
    data.classList.add("show")
    overlay.classList.add("show");
    data.setAttribute("aria-expanded" , true);
}

function closeSidebar(e){
    togller.classList.remove("focused")
    data.classList.remove("show")
    overlay.classList.remove("show");
    data.setAttribute("aria-expanded" , false);
}

const overlay = document.getElementById("overlay");
overlay.addEventListener("click" , (e) => {
    closeSidebar(e);
})

let togller = document.querySelector(".togller");
const data_toggle = togller.getAttribute("data-toggle");
const data = document.querySelector(data_toggle);

togller.addEventListener("click" , (e) => {
    if(data.getAttribute("aria-expanded") === "true"){
        closeSidebar(e);
    }
    else {
        console.log("open")
        openSidebar(e);
    }
})

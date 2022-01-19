let buton = document.querySelector("#liveToastBtn")
let list = document.querySelector("#list")
let task = document.querySelector("#task")
let len = document.getElementsByTagName("li")

for (i=0;i<len.length;i++){
    let closebutton = document.createElement("span")
    closebutton.textContent = "\u00D7"
    closebutton.classList.add("close")
    closebutton.onclick = cıkart
    len[i].append(closebutton)
}

buton.addEventListener("click",function newElement() {
    if (task.value !== "" ) {
    let li = document.createElement("li")
    li.textContent = task.value
    list.appendChild(li)
        for (i = 0; i < len.length; i++) {
            let closebutton = document.createElement("span")
            closebutton.textContent = "\u00D7"
            closebutton.classList.add("close")
            closebutton.onclick = cıkart
            len[i].append(closebutton)
        }
    $(".success").toast("show")
}else{
    $(".error").toast("show")
}
})

list.addEventListener("mouseover",function uzerıne(event) {
    event.target.style.color = "red"

})

list.addEventListener("mouseout", function uzerıne(event) {
    event.target.style.color = "black"
})


closebutton.addEventListener("click", cıkart())

function cıkart(params) {
    this.parentElement.remove()
}
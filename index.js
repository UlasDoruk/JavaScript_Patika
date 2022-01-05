let x = prompt("Not bilgisi")
let y = document.querySelector("#info")
let SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
let SAD = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-angry" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zm6.991-8.38a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5s-1-.672-1-1.5c0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1zm-6.552 0a.5.5 0 0 0-.448.894l1.009.504A1.94 1.94 0 0 0 5 6.5C5 7.328 5.448 8 6 8s1-.672 1-1.5c0-.247-.04-.48-.11-.686a.502.502 0 0 0-.166-.761l-2-1z"/>
</svg>
`
y.classList.add("birincil")
if (x>=90 && x<=100){
    y.innerHTML += `Notunuz FF ${SMILE}`
} else if (x>=85 &&x<=89){
    y.innerHTML +=`Notunuz FF ${SMILE}`
} else if (x >= 80 && x <= 84) {
    y.innerHTML += `Notunuz FF ${SMILE}`
} else if (x >= 75 && x <= 79) {
    y.innerHTML += `Notunuz FF ${SMILE}`
} else if (x >= 70 && x <= 74) {
    y.innerHTML += `Notunuz FF ${SMILE}`
} else if (x >= 65 && x <= 69) {
    y.innerHTML += `Notunuz FF ${SMILE}`
} else if (x >= 60 && x <= 64) {
    y.innerHTML += `Notunuz FF ${SMILE}`
} else if (x >= 50 && x <= 59) {
    y.innerHTML += `Notunuz FF ${SMILE}`
} else if (x >= 0 && x <= 49) {
    y.innerHTML = `Notunuz FF ${SAD}`
    y.classList.remove("birincil")
    y.classList.add("ikincil")
}  else {
    y.classList.remove("birincil","ikincil")
    y.innerHTML="Geçerli bir sayı giriniz"
}
let x = prompt("İsminiz ?")
let isim = document.querySelector("#myName")
isim.innerHTML = x
let saat = document.querySelector("#myClock")
function digital(){
var tarih = new Date()
var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
var hour = tarih.getHours()
var minutes = tarih.getMinutes()
var seconds = tarih.getSeconds()
var day = gunler[tarih.getDay()]
saat.innerHTML = `${hour}:${minutes}:${seconds} ${day}`
setTimeout(digital, 1000);
}
digital();

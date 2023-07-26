const form = document.querySelector(".form")
const qrcode = document.querySelector(".qrcode")
const load = document.querySelector("#load")
const generateCode = document.querySelector("#generateCode")
const save = document.querySelector("#btn")


form.addEventListener("submit", generate)

function generate(e) {
    e.preventDefault()
    const url = document.querySelector("#url").value
    const size = document.querySelector("#size").value
    const clrBlack = document.querySelector("#colorBlack").value
    const clrWhite = document.querySelector("#colorWhite").value
    if (url == "") {
        alert("Please Enter the value")
    }
    else {
        load.style.display = "flex"
          setTimeout(() => {
            generateCode.innerHTML = ""
            const code = new QRCode('generateCode',{
                text: url,
                width: size,
                height: size,
                colorDark: clrBlack,
                colorLight: clrWhite,
                correctLevel: QRCode.CorrectLevel.H
            })
            load.style.display = "none"
        }, 1000)
        createDownload()
    }
}

function createDownload(){
    const savedImg = generateCode.querySelector("img").src
    save.href = savedImg;
}

save.addEventListener("click", () => {
    setTimeout(()=>{
    save.download = 'generateCode';
    },50)
})
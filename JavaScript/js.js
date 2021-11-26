//const name = prompt("Qual o seu nome?")

let arraySelected = []

function selectModel(clic){
    const model = document.querySelector(".model .selected")
    if(model){
        model.classList.remove("selected")
        arraySelected.pop(1)
    }
    clic.classList.add("selected")
    arraySelected.push(1)
    verify()}
function selectCollar(clic){
    const model = document.querySelector(".collar .selected")
    if(model){
        model.classList.remove("selected")
        arraySelected.pop(1)
    }
    clic.classList.add("selected")
    arraySelected.push(1)
    verify()}
function selectTissue(clic){
    const model = document.querySelector(".tissue .selected")
    if(model){
        model.classList.remove("selected")
        arraySelected.pop(1)
    }
    clic.classList.add("selected")
    arraySelected.push(1)
    verify()
}

const button = document.querySelector("button")
button.style.pointerEvents = 'none'

function verify(){
    const input = document.querySelector("input")
    const isWrite = input.value
    
    
if(arraySelected.length === 3 && isWrite !== ""){
    button.classList.add("disable")
    button.style.pointerEvents = 'auto'
}
}
function confirm(){
    alert("Sua encomenda foi efetuada com sucesso")
}


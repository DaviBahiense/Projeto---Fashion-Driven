//const name = prompt("Qual o seu nome?")

let arraySelected = []

function selectModel(element, type){
    const model = document.querySelector(".model .selected")
    if(model){
        model.classList.remove("selected")
        arraySelected.pop(1)
    }
    element.classList.add("selected")
    arraySelected.push(1)

    const elementSelect =  document.querySelector(".model .selected").parentElement
    const elementSpan = elementSelect.lastElementChild.firstChild.data
    console.log(elementSpan)

    verify()}
function selectCollar(element){
    const model = document.querySelector(".collar .selected")
    if(model){
        model.classList.remove("selected")
        arraySelected.pop(1)
    }
    element.classList.add("selected")
    arraySelected.push(1)

    const elementSelect =  document.querySelector(".collar .selected").parentElement
    const elementSpan = elementSelect.lastElementChild.firstChild.data
    console.log(elementSpan)
    verify()}
function selectTissue(element){
    const model = document.querySelector(".tissue .selected")
    if(model){
        model.classList.remove("selected")
        arraySelected.pop(1)
    }
    element.classList.add("selected")
    arraySelected.push(1)

        const elementSelect =  document.querySelector(".tissue .selected").parentElement
    const elementSpan = elementSelect.lastElementChild.firstChild.data
    console.log(elementSpan)
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
function confirmOrder(){
    alert("Seu pedido foi feito")
}

function sendingOrder(){
    const promisse = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
    promisse.then(showOrders)
    console.log(promisse)
}
sendingOrder()
function showOrders(info){
    const infoOrder = info.data

    for (let i = 0; i < infoOrder.length; i++) {
        const element = infoOrder[i];

        
    }
}


const nameBuyer = prompt("Qual o seu nome?")

let arraySelected = []
let elementModel
let elementCollar
let elementTissue
let info
let otherRequest
let image

function selectModel(element, type){
    const model = document.querySelector(".model .selected")
    if(model){
        model.classList.remove("selected")
        arraySelected.pop(1)
    }
    element.classList.add("selected")
    arraySelected.push(1)

    const elementSelect =  document.querySelector(".model .selected").parentElement
    elementModel = elementSelect.lastElementChild.firstChild.data
    verify()
}
function selectCollar(element){
    const model = document.querySelector(".collar .selected")
    if(model){
        model.classList.remove("selected")
        arraySelected.pop(1)
    }
    element.classList.add("selected")
    arraySelected.push(1)

    const elementSelect =  document.querySelector(".collar .selected").parentElement
    elementCollar = elementSelect.lastElementChild.firstChild.data
    verify()
}
function selectTissue(element){
    const model = document.querySelector(".tissue .selected")
    if(model){
        model.classList.remove("selected")
        arraySelected.pop(1)
    }
    element.classList.add("selected")
    arraySelected.push(1)

        const elementSelect =  document.querySelector(".tissue .selected").parentElement
        elementTissue = elementSelect.lastElementChild.firstChild.data
    verify()
}

const button = document.querySelector("button")
button.style.pointerEvents = 'none'

function verify(){
    const input = document.querySelector("input")
    image = input.value
   
if(arraySelected.length === 3 && (image.includes("http") || image.includes("https"))){
    button.classList.add("disable")
    button.style.pointerEvents = 'auto'
}
}
function confirmOrder(){
    alert("Seu pedido foi feito")
    console.log(elementModel)
    sendOrder()
}
function getOrder(){
    const promisse = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
    promisse.then(showOrders)   
}

getOrder()

function showOrders(info){
    const infoOrder = info.data
    const div = document.querySelector(".demand")
    div.innerHTML = ``
    for (let i = 0; i < 10; i++) {
        const element = infoOrder[i];
        const img = element.image
        const name = element.owner
        
        div.innerHTML += `            
        <div class="box-demand" onclick="takeElement('${element.model}', '${element.neck}', '${element.material}', '${element.image}', '${element.owner}')">
        <img src="${img}" alt="">
        <span><strong>Criador:</strong> ${name}</span>
        </div>
        `
    }
}
function sendOrder(){
    sendObj()
    let nameObj = info
    const promisse = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", nameObj)
    promisse.catch(alertProblem)
    promisse.then(thenPage)
}

function alertProblem(){
    alert("Ops, não conseguimos processar sua encomenda")

}
function thenPage(){
    alert("Encomenda confirmada")
    getOrder()
}

function sendObj(){
    const input = document.querySelector("input")
    const photo = input.value
    console.log(photo)
    info = { 
        model: elementModel, 
        neck: elementCollar, 
        material: elementTissue,
        image: image, 
        owner: nameBuyer,
        author: nameBuyer
    }
    console.log(info)
    return info
}
function takeElement(model, neck, material, img, owner, author){
    otherRequest={
        model: model, 
        neck: neck, 
        material: material,
        image: img, 
        owner: nameBuyer,
        author: owner
    }
    console.log(otherRequest)
    const repeat = confirm("Voce deseja repetir o pedido selecionado?")
    if (repeat === true){
        sendRepeatOrder()
    }
    return otherRequest
}
function sendRepeatOrder(){
    let nameObj = otherRequest
    const promisse = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", nameObj)
    promisse.catch(alertProblem)
    promisse.then(thenPage)
}



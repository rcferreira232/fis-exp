// Selector function
const getElement = (selector)=>{
    const element = document.querySelector(selector)
    if(element) return element
    throw Error(`Please check your class name, there is no ${selector} class name.`)
}

// Date--------------------------------
const currentYear = getElement("#date")
const year = new Date().getFullYear()
currentYear.textContent = year
// ------------------------------------

let arrX = []
let arrY = []
const addBtn = getElement(".add-btn")
const table = getElement(".table")

addBtn.addEventListener("click", ()=>{
    if(validarInput()){
        adicionar()
        criarLinha()
    }
})

// funções para leitura de um input
function lerX(){
    const x = getElement("#x").value //Valor do input X
    return x
}
function lerY() {
    const y = getElement("#y").value //Valor do input Y
    return y
}

// Validação do input
const validarInput = ()=>{
    const x = lerX()
    const y = lerY()
    
    msg = ''
    if (x === '') {
        msg += '- Informe o valor de X\n'
    }
    if (y === '') {
        msg += '- Informe o valor de Y\n'
    }
    if(msg != ''){
        alert(msg)
        return false
    }
    return true
}
// função para adicionar os valores dos inputs em um array
function adicionar(){
    arrX.push(parseFloat(lerX()))
    arrY.push(parseFloat(lerY()))
}
// função para criar e adicionar dados nas linhas da tabela html
function criarLinha(){
    let tr = createTr(); // Recebe um elemento html <tr></tr>
    let tdX = createTd() // Recebe um elemento html <td></td>
    let tdY = createTd() // Recebe um elemento html <td></td>
    let tdSumX = createTd() // Recebe um elemento html <td></td>
    let tdSumY = createTd() // Recebe um elemento html <td></td>
    let tdSumX2 = createTd() // Recebe um elemento html <td></td>
    let tdSumArrVsArr = createTd() // Recebe um elemento html <td></td>
    let tdS = createTd() // Recebe um elemento html <td></td>

    tdX.textContent = parseFloat(lerX()) //Atribui um valor ao elemento td vazio
    tdY.textContent = parseFloat(lerY()) //Atribui um valor ao elemento td vazio
    tdSumX.textContent = sum(arrX) //Atribui um valor ao elemento td vazio
    tdSumY.textContent = sum(arrY) //Atribui um valor ao elemento td vazio
    tdSumX2.textContent = sumQuadrado(arrX) //Atribui um valor ao elemento td vazio
    tdSumArrVsArr.textContent = sumArrVsArr(arrX, arrY); //Atribui um valor ao elemento td vazio
    tdS.textContent = 0 //Atribui um valor ao elemento td vazio
    
    for (let i = arrX.length-1; i >= arrX.length-1; i--){
        tr.appendChild(tdX) //Adiciona um nó ao final da lista de filhos de um nó pai especificado. No caso o tr
        tr.appendChild(tdY)
        tr.appendChild(tdSumX)
        tr.appendChild(tdSumY)        
        tr.appendChild(tdSumX2)
        tr.appendChild(tdSumArrVsArr)
        tr.appendChild(tdS)
    }
    table.appendChild(tr)//Adiciona um nó ao final da lista de filhos de um nó pai especificado. No caso o tr
}
function createTr(){
    const tr = document.createElement('tr'); // cria um elemento tr
    return tr;
}
function createTd(){
    const td = document.createElement('td'); // cria um elemento tr
    return td;
}
// .rows[0].cells.length => para obter o número de colunas
// operações com vetores
function sum(arry){
    let somar =0;
    for (let i = 0; i < arry.length; i++) {
        somar += arry[i];
    }
    return somar
}
function sumQuadrado(arry){
    let somar =0;
    for (let i = 0; i < arry.length; i++) {
        somar += Math.pow(arry[i], 2);
    }
    return somar
}
function sumQuadrado(arry){
    let somar =0;
    for (let i = 0; i < arry.length; i++) {
        somar += Math.pow(arry[i], 2);
    }
    return somar
}
function sumArrVsArr(arr1, arr2){
    let somar =0;
    for (let i = 0; i < arr1.length; i++) {
        somar += arr1[i]*arr2[i];
    }
    return somar
}

/*
    keypress event

    Evento utilizado para que quando a tecla "enter" for precionada mude o foco do elemento
 */
const inputX = getElement("#x")
const inputY = getElement("#y")

inputX.addEventListener("keypress", (event)=>{
    if (event.key === "Enter"){
        inputY.focus()
    }
})

inputY.addEventListener("keypress", (event)=>{
    if (event.key === "Enter"){
        addBtn.focus()
    }
})

addBtn.addEventListener("keypress", (event)=>{
    if (event.key === "Enter"){
        inputX.focus()
    }
})
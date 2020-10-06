import autos from './array.js';

let editingAuto = false;
let principalID = 0;

function printAutos() {
    const tableBody = document.getElementById('cards');
    tableBody.innerHTML = ''
    autos.forEach((auto) => {
        const td =`<div onclick="removeAutoEditAuto(${auto.id})" class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${auto.Marca}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${auto.Modelo}</h6>
            <p class="card-text">${auto.Color}</p>
            <span class="card-link text-primary">${auto.anho}</span>
            <span class="card-link text-primary">$${auto.Precio}</span>
        </div>
    </div>`
        tableBody.innerHTML += td;
    })
}

function removeAutoEditAuto(id) {
    principalID = id;
    const button1 = document.getElementById('create-button');
    const button2 = document.getElementById('edit-button');
    const button3 = document.getElementById('delete-button');
    button1.disabled = true;
    button2.disabled = false;
    button3.disabled = false;

    editAutoButton()
}

function editAuto() {
    const Marca = document.getElementById('marca').value;
    const Modelo = document.getElementById('modelo').value;
    const Color = document.getElementById('color').value;
    const anho = document.getElementById('anho').value;
    const Precio = document.getElementById('Precio').value;
    editingAuto.Marca = Marca;
    editingAuto.Modelo = Modelo;
    editingAuto.Color = Color;
    editingAuto.anho = anho;
    editingAuto.Precio = Precio;
    printAutos();
    limpiar()
    
    const button1 = document.getElementById('create-button');
    const button2 = document.getElementById('edit-button');
    const button3 = document.getElementById('delete-button');
    button1.disabled = false;
    button2.disabled = true;
    button3.disabled = true;
}
function editAutoButton() {
    const auto = autos.find((auto) => auto.id === principalID);
    document.getElementById('marca').value = auto.Marca;
    document.getElementById('modelo').value = auto.Modelo;
    document.getElementById('color').value = auto.Color;
    document.getElementById('anho').value = auto.anho;
    document.getElementById('Precio').value = auto.Precio;
    editingAuto = auto;
}

function addAuto() {
    const Marca = document.getElementById('marca').value;
    const Modelo = document.getElementById('modelo').value;
    const Color = document.getElementById('color').value;
    const anho = document.getElementById('anho').value;
    const Precio = document.getElementById('Precio').value;
    var finalId = autos[(autos.length)-1].id;
    const newAuto = {
        id: finalId + 1,
        Marca: Marca,
        Modelo: Modelo,
        Color: Color,
        anho: anho,
        Precio: Precio
    }
    autos.push(newAuto);
    limpiar()
    printAutos();

}
function removeAuto() {
    const position = autos.findIndex((auto) => auto.id === principalID);
    autos.splice(position, 1);
    limpiar()

    const button1 = document.getElementById('create-button');
    const button2 = document.getElementById('edit-button');
    const button3 = document.getElementById('delete-button');
    button1.disabled = false;
    button2.disabled = true;
    button3.disabled = true;
    printAutos()
}

function limpiar() {
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('color').value = '';
    document.getElementById('anho').value = '';
    document.getElementById('Precio').value = '';
}


printAutos();

window.removeAuto = removeAuto;
window.removeAutoEditAuto = removeAutoEditAuto;
window.editAutoButton = editAutoButton;
window.addAuto = addAuto;
window.editAuto = editAuto;
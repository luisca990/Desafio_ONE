const textArea= document.querySelector('.body__main__seccion1__textarea');
const mensaje= document.querySelector('.body__main__seccion2__textarea__mensaje');

const dicKeys={
    "e":"enter",
    "i" : "imes",
    "a" : "ai",
    "o" : "ober",
    "u" : "ufat"
};

function encriptar(textToEncript){
    let text = textToEncript.toLowerCase();
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    textArea.value=text;
    let encriptado = text;
    Object.entries(dicKeys).forEach(([key, value]) => {
        encriptado=encriptado.replaceAll(key,value)
    });
    return encriptado;
}

function desencriptar(textToDesencript){
    let text = textToDesencript.toLowerCase();
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    textArea.value=text;
    let desencriptado = text;
    Object.entries(dicKeys).forEach(([key, value]) => {
        desencriptado=desencriptado.replaceAll(value,key)
    });
    return desencriptado;
}

function copyText(){
    mensaje.select();
    textArea.value=mensaje.value;
}

function btnEncript(){
    const textEncript=encriptar(textArea.value);
    mensaje.value=textEncript;
    textArea.value="";
    mensaje.style.backgroundImage="none"
}

function btnDesencript(){
    const textDesencript=desencriptar(textArea.value);
    mensaje.value=textDesencript;
    textArea.value="";
    mensaje.style.backgroundImage="none"
}
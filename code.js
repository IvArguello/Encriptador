var inputTexto = document.querySelector(".encriptador");
var mensaje = document.querySelector(".desencriptador");
var botonCopiar = document.querySelector(".boton-copiar");

botonCopiar.style.visibility = "hidden";

function botonEncriptar(){

    const textoEncriptado = encriptar(inputTexto.value);  
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = " ";
    botonCopiar.style.visibility = "unset";
}

function encriptar(stringEncriptado){

    let matrizCodigo = [["e" , "enter"],["i", "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];

    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
       
        if(stringEncriptado.includes(matrizCodigo[i][0])){
         stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
        return stringEncriptado;
}

function botonDesencriptar(){

    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = " ";
    botonCopiar.style.visibility = "unset";
}

function desencriptar(stringDesencriptado){

    let matrizCodigo = [["e" , "enter"],["i", "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
        stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
        return stringDesencriptado;
}

    
function copiar(){
    
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = " ";
}
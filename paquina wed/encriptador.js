let campo_texto= document.getElementById("texto_encriptado")
let campo_textoE=document.getElementById("contenedorMensaje")

let matriz_code =[
    ["e","enter"],  
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

function btnCode(){
    const texto = Encriptar(campo_texto.value);
    const encriptado =campo_textoE.value

}
function Encriptar (textoEncritado){
    for (let i = 0; i<matriz_code.length;i++){
       if(textoEncritado.includes(matriz_code[i][0]));{
        textoEncritado=textoEncritado.replaceAll(
            matriz_code[i][0],
            matriz_code[i][1]
        );
       }
    }
   return textoEncritado 
}



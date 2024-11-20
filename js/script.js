let veces =localStorage.getItem("contador");
if (veces){
    contador=parseInt(veces);
}else{
    contador=0;
}
const actualizaCont=()=>{
    const elementcontador=document.getElementById("contadorVisitas");
    elementcontador.textContent=contador;
}
contador++;
localStorage.setItem("contador",contador);

btnrestablecer=document.getElementById("btnrestablecer")
btn=document.addEventListener("click",()=>{
    contador=0;
    localStorage.setItem("contador",contador);
    actualizaCont();
});
actualizaCont();
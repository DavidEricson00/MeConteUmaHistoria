const saida = document.querySelector("p.salada");
function digitacao(texto, contador){

	if(contador < texto.length){
		setTimeout(()=>{
              saida.textContent += texto.charAt(contador);
			  contador++;
			  digitacao(texto , contador);
		} , 90)
	}
}
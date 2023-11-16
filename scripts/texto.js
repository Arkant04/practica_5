function texInput(){
    const texto_usuario = document.querySelector("#input_text")
    console.log(texto_usuario.value)
    document.querySelector("#texto").innerHTML = texto_usuario.value
}

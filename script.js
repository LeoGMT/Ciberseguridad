function verificarHtml() {
    let input = document.getElementById("inputHtml").value;
    let parser = new DOMParser();
    let doc = parser.parseFromString(input, "text/html");

    // Verifica si hay alguna etiqueta en el contenido
    if (doc.body.children.length > 0) {
        alert("Codigo malo");
    } else {
        alert("Texto buenor");
    }
}

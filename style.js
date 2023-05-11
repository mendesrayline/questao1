
function trocarcor() {
    let cor = document.getElementById("input-color" ).value;
    console.log(cor)
    document.getElementsByTagName("body")[0].style.background = cor;
}
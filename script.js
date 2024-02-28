//formulario
function abrirWhatsapp() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var insta = document.getElementById("insta").value;
  var plano = document.getElementById("plano").value;
  var url =
    "https://wa.me/5522997772611?text=" + // Seu numero
    "Dúvidas" +
    "%0a" + // Mensagem personalizada
    "%0a" + // Quebra de linha
    "*Nome*: " +
    nome +
    "%0a" + // Dados do formulário
    "*Telefone*: " +
    telefone +
    "%0a" +
    "*E-mail*: " +
    email +
    "%0a" +
    "*Insta*: " +
    insta +
    "%0a" +
    "*Plano*: " +
    plano +
    "%0a" +
    "*Mensagem*: " +
    msg;
  window.open(url, "_blank").focus();
}

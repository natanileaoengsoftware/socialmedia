function abrirWhatsapp() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var url = "https://wa.me/5522981119811?text=" // Seu numero
    + "Consultoria Personalizada" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "*Nome*: " + nome + "%0a" // Dados do formulário
    + "*Telefone*: " + telefone + "%0a"
    + "*E-mail*: " + email + "%0a"
    + "*Mensagem*: " + msg;
  window.open(url, '_blank').focus();
}
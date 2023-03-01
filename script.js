function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var data_nasc = document.getElementById("data_nasc").value;
    var telefone = document.getElementById("telefone").value;
    var profissao = document.getElementById("profissao").value;

    var telefone_regex = /^\([0-9]{2}\)\s[0-9]{4,5}-[0-9]{4}$/; 
    if (!telefone_regex.test(telefone)) {
      alert("Telefone inválido! Digite no formato (99) 99999-9999");
      return false;
    }

    
    if (nome === "" || data_nasc === "" || profissao === "" || nome === "") {
      alert("Preencha todos os campos obrigatórios!");
      return false;
    }

    
    return true;
  }
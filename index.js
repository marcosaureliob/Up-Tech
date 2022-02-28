function mask_cpf(){
  var cpf = document.getElementById('cpf')
  if(cpf.value.length == 3 || cpf.value.length==7) {
    cpf.value += "."
  }else if(cpf.value.length == 11){
    cpf.value += "-"
  }
}

function totalValue() {
  let quantidade = document.querySelector('#quantidade').value
  quantidade = quantidade * 69.9
  document.getElementById("total").value = quantidade;
}
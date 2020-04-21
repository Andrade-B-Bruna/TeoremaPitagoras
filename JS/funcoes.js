
form.addEventListener("submit", (event) => {
  event.preventDefault(); 
});

function calcular(){
  
var cat_op = parseInt(document.getElementById('cat_op').value);
var cat_adj = parseInt(document.getElementById('cat_adj').value);


if((document.getElementById("cat_op").value=="") || (document.getElementById("cat_adj")).value == ""){

    alert('Por favor, preencha os campos corretamente.');
    document.getElementById("cat_op").focus();
    return false

}else{

hipotenusa = Math.hypot(cat_op, cat_adj);

document.getElementById('hipotenusa').value = hipotenusa;

}
};

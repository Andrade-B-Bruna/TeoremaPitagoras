
form.addEventListener("submit", (event) => {
  event.preventDefault(); 
});

function calcular(){
  
var cat_op = parseInt(document.getElementById('cat_op').value);
var cat_adj = parseInt(document.getElementById('cat_adj').value);

hipotenusa = ((cat_op*2) + (cat_adj*2))*2;

document.getElementById('hipotenusa').value = hipotenusa;
}




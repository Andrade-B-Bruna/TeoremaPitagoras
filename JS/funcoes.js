
form.addEventListener("submit", (event) => {
  event.preventDefault(); 
});

function calcular(){
  
var cat_op = parseInt(document.getElementById('cat_op').value);
var cat_adj = parseInt(document.getElementById('cat_adj').value);

hipotenusa = Math.hypot(cat_op, cat_adj);

document.getElementById('hipotenusa').value = hipotenusa;

};

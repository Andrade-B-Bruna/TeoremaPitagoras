
form.addEventListener("submit", (event) => {
  event.preventDefault(); 
});

function calcular(){
  
var cat_op = parseInt(document.getElementById('cat_op').value);
var cat_adj = parseInt(document.getElementById('cat_adj').value);

let jsonData = {
  "cat_op": document.getElementById('cat_op').value,
  "cat_adj": document.getElementById('cat_adj').value
}

console.log(jsonData)

axios.post('https://atlas-231814.appspot.com/calcula', jsonData)
.then(response => {
  console.log(response)
})
.catch(error => {
  console.log(error)
})

/*
hipotenusa = Math.hypot(cat_op, cat_adj);

document.getElementById('hipotenusa').value = hipotenusa;*/

};

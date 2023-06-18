let ingrediantBtn = document.getElementById('addIngrediantsBtn');
let ingrediantList = document.querySelector('.ingrediantList');
let ingrediantDiv = document.querySelectorAll('.ingrediantDiv')[0];

ingrediantBtn.addEventListener("click",function(){
    let newIngrediant = ingrediantDiv.cloneNode(true);
    let input = newIngrediant.getElementsByTagName('input')[0];
    input.value = '';
    ingrediantList.appendChild(newIngrediant);
})
function add(id) {
  document.getElementById(id).classList.remove("hidden","lg:hidden");
}

function remove(id) {
  document.getElementById(id).classList.add("hidden","lg:hidden");
}
function hover(id) {
  document.getElementById(id).classList.add("bg-lime-400");
}
function hoverRemove(id) {
  document.getElementById(id).classList.remove("bg-lime-400");
}
function amount(id) {
  
  const inputValue = document.getElementById(id).value;
  return inputValue;
}
function mainAmaount (id){
 const mainBalance = document.getElementById(id).innerText;
    return mainBalance;
} 
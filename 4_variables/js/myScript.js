var array = ['a','b','c']
var arraynum = [1, 2, 3]
var value = document.getElementById('header')
try {
    for (var i=0;i<array.length;i++){
        console.log();
        value.textContent+=array[i].concat(arraynum[i]+", ")
    } 
   }
   catch(err) {
    value.innerHTML = err.message;
   }
   
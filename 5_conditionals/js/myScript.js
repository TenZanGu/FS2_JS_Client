var array = ['apple','banana','cherry']
var arraynum = [1, 2, 3]
var num = 2
var letter = "a"
var numvalue = document.getElementById('num')
var lettervalue = document.getElementById('letter')

try {
    for (var i=0;i<array.length;i++){
        console.log();
    lettervalue.textContent = array.filter(f => String(f).startsWith(letter)) + ' '
    }
    function less (number) {
        return number > num;
    }
    numvalue.textContent = arraynum.filter(less)
}
 catch(err) {
    lettervalue.innerHTML = err.message;
    numvalue.innerHTML = err.message;
    }
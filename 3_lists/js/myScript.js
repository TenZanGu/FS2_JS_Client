try {
    alert( "Words in lists" );
   }
   catch(err) {
    document.getElementById("msgBox").innerHTML = err.message;
    console.log("success")
   }
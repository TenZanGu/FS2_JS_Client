try {
    alert( "Hello User" );
   }
   catch(err) {
    document.getElementById("msgBox").innerHTML = err.message;
    console.log("ok")
   }
 
//console.log("Chat_app");
var db = firebase.database();

function readdata()
{    	  var msg = document.getElementById("txt").value;
   db.ref('messages/').push().set(
   {
      sender :"vaari",
      message: msg
   })
   
$("#txt").val("");
}


db.ref('messages').on('value',function(msg)
{ 
     
	var message = msg.val();
	for (var i in message)
	{ 
		var msg1 = message[i];
		console.log(" message : " + msg1.message)
		$("#display").append(
		`
         <p> ${msg1.message} --- ${ msg1.sender}</p>

		`)
	}
	
	
})
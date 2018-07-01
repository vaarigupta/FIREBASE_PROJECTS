//console.log("Chat_app");
var db = firebase.database();

function readdata()
{  
	  var msg = document.getElementById("txt").value;
   db.ref('messages/').push().set(
   {
      sender : "vaari",
      message: msg
   })
}


db.ref('messages').on('value',function(msg)
{ 
     
	var message = msg.val();
	for (var i in message)
	{
		console.log("sender :" + message[i].sender + " message : " + message[i].message)
	}
	
	
})
//console.log("Chat_app");
var db = firebase.database();

function writedata()
{    	  var msg = $("#txt").val();
   db.ref('messages/').push().set(
   {
      sender :"vaari",
      message: msg
   })
   
$("#txt").val("");
}


db.ref('messages').on("child_added",function(snap)
{ 
     
	var mess = snap.val();
		console.log(" message : " + mess.message)
		$("#display").append(
		`
         <p> ${mess.message} --- ${ mess.sender}</p>

		`)
	
	
	
})
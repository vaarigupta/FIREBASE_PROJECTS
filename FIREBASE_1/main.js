console.log("practice");
var db = firebase.database();
function writeUserData() {
  db.ref('users/').push().set({
    username: "vaari",
    email: "vaarigupta24@gmail.com",
    
  });
}


console.log(db);


db.ref('users').on('value',function(snap)
{
	console.log(snap.val());
})

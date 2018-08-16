import React, { Component } from 'react';
import firebase from 'firebase';
import fire from './fire';
	var database = firebase.database();
class Database extends Component {
	constructor(props)
	{
		super(props);
		this.state ={
		   userid:'',
           name :'',
           msg : ''
		}
	}
writeUserData()
{
   database.ref('users/'+this.state.userid).push().key
}


  render() {
    return (
    	<div>
   			<p>{database.ref('users/'+this.state.userid).push().key}</p>
    	
      </div>
    );
  }
}

export default Database;


// <label for='msg'> Type </label>
//     	<div>
//        <input id='msg' type='text' onChange={()=>{
//        	database.ref('messages'+ this.state.userid).on('value',function(snapshot){
//        		snapshot = snapshot.val();
//        		console.log(snapshot);
//        	})
//        }} />
//        <button> Send </button>
//        </div>
//  
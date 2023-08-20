import React from 'react'
import "./Board.css"
import Card from '../card/Card'
import Api from '../api/Api'


const API={"tickets":[{"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},{"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},{"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},{"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},{"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In progress","priority":0},{"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},{"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},{"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In progress","priority":3},{"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},{"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog","priority":1}],"users":[{"id":"usr-1","name":"Anoop sharma","available":false},{"id":"usr-2","name":"Yogesh","available":true},{"id":"usr-3","name":"Shankar Kumar","available":true},{"id":"usr-4","name":"Ramesh","available":true},{"id":"usr-5","name":"Suresh","available":true}]}






function repl(props){
  return(<> 
  <h1>raj</h1>
  </>)
}



const Board = (props) => {
  // fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error(error));
  //   console.log(data)
//   console.log(data);
// {props.data}
// console.log("hello")
// for (let index = 0; index < API.tickets.length; index++) {
//     let a=repl(API.tickets[index]);
    
// }

// let a=<API/>
  return (
    <div>
        {/* <Api /> */}
        {/* {props.data} */}
        {/* for (let index = 0; index < 5; index++) {
            <Card api ={API.tickets} />
            
        } */}
        <Card api ={API.tickets[0]}  />
        <Card api ={API.tickets[1]} />
        <Card api ={API.tickets[2]} />
        <Card api ={API.tickets[3]} />
        <Card api ={API.tickets[4]} />
        <Card api ={API.tickets[5]} />
        <Card api ={API.tickets[6]} />
        <Card api ={API.tickets[7]} />
        <Card api ={API.tickets[8]} />
        <Card api ={API.tickets[9]} />
        {/* <Card api ={API.user[0]} /> */}
    </div>
  )
}

export default Board
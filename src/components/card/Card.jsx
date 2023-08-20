import React from 'react'
import "./Card.css"
const Card = (props , props1) => {

    const [checked, setChecked] = React.useState(false); 
   function handleChange(e) {
      setChecked(e.target.checked);
   }

//    let a;
//    switch (props.api[0].priority) {
//     case 1:
//         a=props.api[0].priority
//         break;
//     case 2:
//         a=props.api[0].priority
//         break;
//     case 3:
//         a=props.api[0].priority
//         break;
//     case 4:
//         a=props.api[0].priority
//         break;
//     case 0:
//         a=props.api[0].priority
//         break;    

//     default:
//         a=props.api[0].priority
//         break;
// }
  return (
    <div>
        <div className='card_body'>
        <div className='user'>{props.api.id}</div>
    <div className='card'>
        
        <div className='card_top'>
        <h3 className='identity'> {props.api.id}</h3>
        <img src="" alt="" />
        </div>
        <div className='card_middle'>
        <div>
        <input className='check' value = "test" type = "checkbox" onChange = {handleChange} />
      </div>
            <h2 className='work'>{props.api.title}</h2>
        </div>
        <div className='card_bottom'>
            <img className='priority_level' src="" alt="" />
            
            {props.api.priority} {" "}
            <img className='tag' src="" alt="" />  {props.api.tag}
        </div>
        </div>
        </div>
    </div>
  )
}

export default Card
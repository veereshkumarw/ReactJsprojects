import React from 'react';
import "./Hero1.css";

const Hero1 = (props) => {
  return (
    <div className='hero1'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
      
    </div>
  )
}

export default Hero1;

// if we need to use props in class based components
// then we need to use ----this.prop.value 
// instead of prop.value

// const Hero1 extends Component{
//   render(){ 
//     return (
//      <div className='hero1'>
//          <div className='heading'>
//              <h1>{this.props.heading}</h1>
//              <p>{this.props.text}</p>
//          </div>
//       
//      </div>
//    )
//   }
// }
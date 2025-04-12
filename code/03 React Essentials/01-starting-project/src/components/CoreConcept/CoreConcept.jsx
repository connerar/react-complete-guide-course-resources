import {CORE_CONCEPTS} from "../../data.js"
import './CoreConcept.css'

//Below is object destructuring. It is telling the component that an object with this properties will be passed through. You can also pass through the props variable itself as well.
function CoreConcept({image, title, description}) {
    return (<li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>)
  }
  
  // function CoreConcept(props) {
  //   return (<li>
  //     <img src={props.image} alt={props.title}></img>
  //     <h3>{props.title}</h3>
  //     <p>{props.description}</p>
  //   </li>)
  // }

  export default CoreConcept
  
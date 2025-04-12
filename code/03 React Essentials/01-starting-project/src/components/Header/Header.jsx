// below is used to prevent assets like images from being lost. when the application is bundled/compiled it will make sure it stays
import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {

  const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* Curly Braces are used for dynamic values */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

export default Header


import './App.css'
import Accordion from './components/Accordion/Accordion'
import Calculator from './components/Calculator/Calculator'
import Testimonial from './components/Testimonial/Testimonial'
import accordionData from './assets/data/accordionData.js'
import FormValidation from './components/FormValidation/FormValidaton.jsx'
function App() {

  return (
    <>
      <div className="calculatorBox">
        <h1 className='text-white'>Calculator</h1>
        <div>
          <Calculator />
        </div>
      </div>


      <div className="">
        <h1 className='text-white'>Testimonial</h1>
        <Testimonial />
      </div>

      <div className="AccordionBox">
        <h1 className='text-white'>Accordion</h1>
        <div className="AccordionBoxContainer">
          <div className="accordion">
            {accordionData.map(({ title, content }, index) => (
              <Accordion title={title} content={content} key={index} />
            ))}
          </div>
        </div>
      </div>

      <h1 className='text-white'>Form Validation</h1>
      <div className="formValidation-box">
        <div className="formValidation-card">
          <FormValidation />
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from "react";

const OrderPizza = () => {
  const [radio, setRadio] = useState("small");
  const [toppings, setToppings] = useState("");
  const [check, setCheck] = useState(false)
  const [instructions, setInstructions] = useState('')

  const handleToppings = (event) => {
    setToppings(event.target.value);
  };

  const handleChange = (event) => {
    setRadio(event.target.value);
  };

  const handleCheckbox = (event) => {
    setCheck(event.target.checked)
  }

  const handleInstructions = (event) => {
    setInstructions(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
        `
        your Oredr Size : ${radio} 
        Sugar Free ? ${check ? 'Yes' : 'No'}
        Topping: ${toppings || 'none' } 
        special Instructions: ${instructions || 'none'}

        `
    )
  }

  return (
    <>
      <center>
        <form onSubmit = {handleSubmit}>
          <h2>Order Your Pizza</h2>
          <div>
            <h3>Size</h3>

            <input
              type="radio"
              id="small"
              value="small"
              checked={radio === "small"}
              onChange={handleChange}
            />
            <label htmlFor="small">Small</label>
            <input
              type="radio"
              id="medium"
              value="medium"
              checked={radio === "medium"}
              onChange={handleChange}
            />
            <label htmlFor="medium">Medium</label>
            <input
              type="radio"
              id="large"
              value="large"
              checked={radio === "large"}
              onChange={handleChange}
            />
            <label htmlFor="large">Large</label>
          </div>
          <h3>Toppings</h3>
          <div>
            <select onChange={handleToppings} value={toppings}>
              <option value="">Choose option</option>
              <option value="one">one</option>
              <option value="two">two</option>
              <option value="three">three</option>
              <option value="four">four</option>
              <option value="five">five</option>
            </select>
          </div>
          <h3>
            Checked Box
          </h3>
          <div>
           
            <input type='checkbox' id='check' onChange={handleCheckbox} checked={check} />
            <label htmlFor={'check'} >Checkbox</label>
          </div>
          <h3>
            Special Instructions
          </h3>
          <div>
          <textarea value = {instructions} onChange={handleInstructions} />
          </div>

          <button type= "submit" >Send order</button>
        </form>
      </center>
    </>
  );
};

export default OrderPizza;

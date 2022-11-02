import React, {useState} from "react";
import './QuizPage.css';
import ResultsPage from "./ResultsPage";
import { useNavigate } from "react-router-dom";


const DEFAULT_FORM = {
   skintype: "",
   expense: ""
}

function QuizPage(props){

    const [choices, setChoices] = useState(DEFAULT_FORM);

    const navigate = useNavigate();
  
    const handleInputChange = (event) => {
      
        const name = event.target.name;
        const value = event.target.value;
        
    
        setChoices((state) => ({
            ...state,
            [name]: value}))
        
    };


    const handleSubmit = (e) => {
      
        e.preventDefault();

        console.log("You have submitted your preferences!")

    
        props.getProductsCb(choices);

        navigate(`/results`);

   
        setChoices(DEFAULT_FORM)
    }


return (

<div className="QuizContainer">

    <h2>Let's find out more about your skin!</h2>

        <div className="row">

            <div className="col">If your skin often looks shiny or feels greasy, and shows concerns such as blackheads or enlarged pores, then you probably have <b>OILY</b> skin.

            <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321090/close-up-of-a-womans-oily-skin.jpg" 
            className="SkinImages" />
            </div>


            <div className="col">
            If your skin looks dull or feel tight, with certain areas where you notice your skin feeling rugged or peeling, then you might have <b>DRY</b> skin.

            <img src="https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/articles/cleanser-articles/facial-cleanser-dry-skin-600x400.jpg?rev=e7e676d972e3465fa25624be37336979"
            className="SkinImages"/>
            </div>


            <div className="col">
            If you notice your T-zone (forehead, nose and chin) are oilier, and your cheeks are dryer, then you most likely have <b>COMBINATION</b> skin.
            <img src="https://cdn.shopify.com/s/files/1/0284/9197/2692/articles/Untitled_design_44.png?v=1621271367"
            className="SkinImages"/>
            </div>


            <div className="col">
            If it looks like your skin is well-balanced and doesn't display any persistent concerns, then your skin type is probably <b>NORMAL</b>.

            <img src="https://images-us.nivea.com/-/media/florena-fs/local/gb/skincare-routine/ffs_it_fbarticlesskincare_digital_photo_tiredeffect_1200x900-screen.jpg"
            className="SkinImages"/>
            </div>



    </div>


<h3>Now based on the above...</h3>


<form className="SkincareForm" onSubmit={handleSubmit}>
    

    <div className="SkintypeSelectors">

    <div className="QuizQuestions">What is your skin type?</div>

      <input onChange={handleInputChange} type="radio" id="Oily" name="skintype" value="Oily"
    checked = {choices.skintype === "Oily"}
             />
      <label htmlFor="Oily">Oily</label>
    

    
      <input onChange={handleInputChange}type="radio" id="Dry" name="skintype" value="Dry"
      checked = {choices.skintype === "Dry"}/>
      <label htmlFor="Dry">Dry</label>


  
      <input onChange={handleInputChange} type="radio" id="Combination" name="skintype" value="Combination"
      checked = {choices.skintype === "Combination"}/>
      <label htmlFor="Combination">Combination</label>


 
      <input onChange={handleInputChange} type="radio" id="Normal" name="skintype" value="Normal"
      checked = {choices.skintype === "Normal"}/>
      <label htmlFor="Normal">Normal</label>
    </div>

    <div className="ExpenseSelectors">
        
    <div className="QuizQuestions">How much would you be willing to spend on each product?</div>

      <input onChange={handleInputChange}
      type="radio"
      id="Budget"
      name="expense"
      value="Budget"
      checked = {choices.expense === "Budget"}
        />
      <label htmlFor="Under"> Under €20 </label>
    
      <input onChange={handleInputChange}
      type="radio"
      id="Luxury"
      name="expense"
      value="Luxury"
      checked = {choices.expense === "Luxury"}
             />
      <label htmlFor="Over"> Over €20 </label>
    </div>

    <h3>Great! That's all we need for now. Let's see which products suit you...</h3>

    <button name="SubmitButton" > Find out my skincare regimen</button>

    </form>

    

    </div>
    );
}

export default QuizPage;


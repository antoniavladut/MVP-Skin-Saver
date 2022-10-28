import React, {useState} from "react";
import './QuizPage.css';

const DEFAULT_FORM = {
   skintype: "Oily",
   expense: "Under"
}

function QuizPage(props){

    //set default state of the choices?
    const [choices, setChoices] = useState(DEFAULT_FORM);

//when the input changed? no clue
    const handleInputChange = (event) => {
        //grab whatever value was selected
        const name = event.target.name;
        const value = event.target.value;
        
    //make that the property of my object
        setChoices((state) => ({
            ...state,
            [name]: value}))
        
    };


    const handleSubmit = (e) => {
        //prevents refresh
        e.preventDefault();

        //confirmation message
        console.log("You have submitted your preferences!")

    
        //saves the user's choices?
        //instead of addChoices = searchOnChoices
        props.getProducts(choices);

        // //resets the form?
        setChoices(DEFAULT_FORM)
    }

//usenavigate within the function
//after clicking, redirect to results

    return (
<div className="QuizBlock">
<h2>Let's find out more about your skin!</h2>

<div className="skintypeExamples">

    <div className="Column">
    <p>If your skin often looks shiny or feels greasy, and shows concerns such as blackheads or enlarged pores, then you probably have OILY skin.</p>
    <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321090/close-up-of-a-womans-oily-skin.jpg"/>
</div>

<div className="Column">
    <p>
        If your skin looks dull or feel tight, with dry areas where you notice your skin peeling, then you might have DRY skin.
    </p>
    <img src="https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/articles/cleanser-articles/facial-cleanser-dry-skin-600x400.jpg?rev=e7e676d972e3465fa25624be37336979"/>
</div>

<div className="Column">
    <p>
        If you notice your T-zone (forehead, nose and chin) are oilier, and your cheeks are dryer, then you most likely have COMBINATION skin.
    </p>
    <img src="https://cdn.shopify.com/s/files/1/0284/9197/2692/articles/Untitled_design_44.png?v=1621271367"/>
</div>

<div className="Column">
    <p>
        If it looks like your skin is well-balanced and doesn't display any persistent concerns, then your skin type is probably NORMAL.
    </p>
    <img src="https://images-us.nivea.com/-/media/florena-fs/local/gb/skincare-routine/ffs_it_fbarticlesskincare_digital_photo_tiredeffect_1200x900-screen.jpg"/>
</div>

</div>


<form className="SkincareForm" onSubmit={handleSubmit}>
    

    <div className="skintypeSelectors">

    <p>What is your skin type?</p>

      <input onChange={handleInputChange} type="radio" id="Oily" name="skintype" value={choices.skintype}
             defaultChecked/>
      <label htmlFor="Oily">Oily</label>
    

    
      <input onChange={handleInputChange}type="radio" id="Dry" name="skintype" value={choices.skintype}/>
      <label htmlFor="Dry">Dry</label>


  
      <input onChange={handleInputChange} type="radio" id="Combination" name="skintype" value={choices.skintype}/>
      <label htmlFor="Combination">Combination</label>


 
      <input onChange={handleInputChange} type="radio" id="Normal" name="skintype" value={choices.skintype}/>
      <label htmlFor="Normal">Normal</label>
    </div>

    <div className="BudgetSelectors">
        
    <p>How much would you be willing to spend on one product?</p>

      <input onChange={handleInputChange}
      type="radio"
      id="Under"
      name="budget"
      value={choices.expense}
        defaultChecked/>
      <label htmlFor="Under"> Under €20 </label>
    
      <input onChange={handleInputChange}
      type="radio"
      id="Over"
      name="budget"
      value={choices.expense}
             />
      <label htmlFor="Over"> Over €20 </label>
</div>

<p>Great! That's all we need for now. Let's see which products suit you...</p>

<button name="SubmitButton"> Find out my skincare regimen</button>


</form>



</div>
    );
}

export default QuizPage;


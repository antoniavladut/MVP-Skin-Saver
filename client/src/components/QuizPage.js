import React from "react";
import './QuizPage.css';

function QuizPage(){

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("You have submitted your preferences!")
    }

//usenavigate within the function
//after clicking, redirect to results

    return (
<div className="QuizBlock">
<h2>Let's find out more about your skin!</h2>

<div className="SkinTypeExamples">

    <div class="Column">
    <p>If your skin often looks shiny or feels greasy, and shows concerns such as blackheads or enlarged pores, then you probably have OILY skin.</p>
    <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321090/close-up-of-a-womans-oily-skin.jpg"/>
</div>

<div class="Column">
    <p>
        If your skin looks dull or feel tight, with dry areas where you notice your skin peeling, then you might have DRY skin.
    </p>
    <img src="https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/articles/cleanser-articles/facial-cleanser-dry-skin-600x400.jpg?rev=e7e676d972e3465fa25624be37336979"/>
</div>

<div class="Column">
    <p>
        If you notice your T-zone (forehead, nose and chin) are oilier, and your cheeks are dryer, then you most likely have COMBINATION skin.
    </p>
    <img src="https://cdn.shopify.com/s/files/1/0284/9197/2692/articles/Untitled_design_44.png?v=1621271367"/>
</div>

<div class="Column">
    <p>
        If it looks like your skin is well-balanced and doesn't display any persistent concerns, then your skin type is probably NORMAL.
    </p>
    <img src="https://images-us.nivea.com/-/media/florena-fs/local/gb/skincare-routine/ffs_it_fbarticlesskincare_digital_photo_tiredeffect_1200x900-screen.jpg"/>
</div>

</div>


<form class="SkincareForm" onSubmit={handleSubmit}>
    

    <div class="SkinTypeSelectors">

    <p>What is your skin type?</p>

      <input type="radio" id="Oily" name="SkinType" value="Oily"
             checked/>
      <label for="Oily">Oily</label>
    

    
      <input type="radio" id="Dry" name="SkinType" value="Dry"/>
      <label for="Dry">Dry</label>


  
      <input type="radio" id="Combination" name="SkinType" value="Combination"/>
      <label for="Combination">Combination</label>


 
      <input type="radio" id="Normal" name="SkinType" value="Normal"/>
      <label for="Normal">Normal</label>
    </div>

    <div class="BudgetSelectors">
        
    <p>How much would you be willing to spend on one product?</p>

      <input type="radio" id="Under" name="Budget" value="Under"
             checked/>
      <label for="Under">Under €20 </label>
    
      <input type="radio" id="Over" name="Budget" value="Over"
             />
      <label for="Over">Over €20 </label>
</div>

<p>Great! That's all we need for now. Let's see which products suit you...</p>

<button name="SubmitButton"> Find out my skincare regimen</button>


</form>



</div>
    );
}

export default QuizPage;


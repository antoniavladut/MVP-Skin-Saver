import React, {useState} from "react";
import './QuizPage.css';

function QuizPage(){


    return (
<div className="QuizBlock">
<h2>Let's find out more about your skin!</h2>

<div className="SkinTypeExamples">

    <div>
    <p>If your skin often looks shiny or feels greasy, and shows concerns such as blackheads or enlarged pores, then you probably have OILY skin.</p>
    <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321090/close-up-of-a-womans-oily-skin.jpg"/>
</div>

<div>
    <p>
        If your skin looks dull or feel tight, with dry areas where you notice your skin peeling, then you might have DRY skin.
    </p>
    <img src="https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/articles/cleanser-articles/facial-cleanser-dry-skin-600x400.jpg?rev=e7e676d972e3465fa25624be37336979"/>
</div>

<div>
    <p>
        If you notice your T-zone (forehead, nose and chin) are oilier, and your cheeks are dryer, then you most likely have COMBINATION skin.
    </p>
    <img src="https://cdn.shopify.com/s/files/1/0284/9197/2692/articles/Untitled_design_44.png?v=1621271367"/>
</div>

<div>
    <p>
        If it looks like your skin is well-balanced and doesn't display any persistant concerns, then your skin type is probably NORMAL.
    </p>
    <img src="https://images-us.nivea.com/-/media/florena-fs/local/gb/skincare-routine/ffs_it_fbarticlesskincare_digital_photo_tiredeffect_1200x900-screen.jpg"/>
</div>

</div>


<form className="SkinQuiz">

<h2> Now let's help choose the best 3-step skincare regimen for you!</h2>

<label>Which skin type do you have?
<input type="radio">Oily</input>
<input type="radio">Dry</input>
<input type="radio">Combination</input>
<input type="radio">Normal</input>
</label>

<label>How much are you willing to spend on a skincare product?
<input type="radio"> Under €20</input>
<input type="radio"> Over €20</input>
</label>

<p> That's all the info we need for now!</p>


    <button className="SubmitButton">Create my regimen</button>


</form>






</div>
    )
}

export default QuizPage;
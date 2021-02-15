"use strict";
import { id } from "./../../../global";

const show = (e) => {
    try {
        // what was picked or selected
        const kidsNo = e.target.value;
        // use the loop to generate the number of input
        for (let i = 0; i < kidsNo; i++) {
            const no = i + 1
            const msg = (no > 1) ? "Please, enter their names and emails" : "Please, enter your child name and email"

            const getSelectHelp = id('kids_help')
            getSelectHelp.innerHTML = msg
            getSelectHelp.style.fontSize = '1rem'

            const addKids = ` <div class="row">
            <div class="col">
            <input type="text" placeholder = "Enter child's full name - ${no}" name =kid_name${no} class="form-control" id="kid_name${no}">
            </div>
            <div class="col">
           <input type="email" placeholder = "Enter child's email - ${no}" name=kid_email${no} class="form-control" id="kid_email${no}">
           </div>
        </div><br>`

     

            if (!id(`kid${no}`) || !id(`kidEmail${no}`)) {
                

                id('kids_div').insertAdjacentHTML('afterend', addKids)
            } 
            else {
                id('kids_div').insertAdjacentHTML('afterend', "none")
            }      
        }
    } catch (error) {
        showError(error)
    }
}
   // this is to activate the onchange event
        id('kids').addEventListener('change', show)



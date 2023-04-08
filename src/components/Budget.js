import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { currency , budget, spentsofar } = useContext(AppContext);
    //I Used this for update budget value to spentsofar value;
    const [budgetValue, setBudgetValue] = useState(budget);

    const checkBudget = (value) => {

        if(value < spentsofar){
            alert("you cant reduce your budget less than you already spended");
            setBudgetValue(spentsofar);
        }else{
            setBudgetValue(value);
        }

    }


    
return(
    <div className='alert alert-dark'>
        Budget {currency}
        <input 
            type="number" 
            placeholder="Avaiable budget" 
            value={budgetValue} 
            onBlur={(event)=> checkBudget(event.target.value)}
            onChange={(event)=> setBudgetValue(event.target.value)}>

        </input>
    </div>

    );
};

export default Budget;


import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const ExpenseTotal = () => {
    const { currency, spentsofar } = useContext(AppContext);



    
return(
    <div className='alert alert-primary'>
        <span> Spent so far: {currency} {spentsofar} </span>
    </div>

    );
};

export default ExpenseTotal;

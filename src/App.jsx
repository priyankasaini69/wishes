import React from 'react';
import css from './index.css';

function App() {
    let currDate = new Date(2023, 3, 29, 19);
    currDate = currDate.getHours();
    let greeting = '';

    const cssStyle = {};

    if (currDate >= 1 && currDate < 12){
    greeting = 'Good Morning';
    cssStyle.color = 'green';
    }else if(currDate >= 12 && currDate < 19){
    greeting = 'Good Afternoon';
    cssStyle.color = 'green';
    } else{
    greeting = 'Good Night';
    cssStyle.color = 'Black';
    }

    return(
        <>
            <div>
                <h1>Hello Sir, <span style = {cssStyle}>{greeting}</span> </h1>
            </div>  
        </>
    )

}

export default App;
'use client';
import React from 'react'; 

const Stopwatch = () => {
    const currtime = Date.now();

    const initTime = Date.now() - Date.now();
    
    function startHandler() {
        console.log("button clicked");
    }

    return(<div className = "Stopwatch"><button 
                                        onClick={startHandler}
                                        style={{height: '100px', width: '400px', color:'white', zIndex: 1}}></button></div>)
}

export default Stopwatch;
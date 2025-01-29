'use client';
import React from 'react'; 

const Stopwatch = () => {
    const currtime = Date.now();

    //const initTime = Date.now() - currtime;
    
    function startHandler() {
        //console.log(Date.now() - currtime);
        document.getElementById('time').textContent = (Date.now() - currtime)/1000;
    }

    return(<div className = "Stopwatch"><p id='time'>0.000</p>
                                        <button 
                                        onClick={startHandler}
                                        style={{height: '100px', width: '400px', color:'white', zIndex: 1}}></button>
                                        <p>Click above me!</p>
                                        </div>)
}

export default Stopwatch;
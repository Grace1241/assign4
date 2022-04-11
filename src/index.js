import React from "react";
import ReactDOM from "react-dom";

 
import Content from "./Content.js";
import Button from "./Button.js";



const App =()=>
{
    return(
        <>
             <Button>
            <Content  name="Grace"/>
            </Button>
            
        </>
    )
};


ReactDOM.render(
    
    <>
    <App />
    </>,
document.getElementById("root")

);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>custom app | mountain dew</h1>
        </div> 
    )
}

// every function finally renders as reactElement object syntax

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: "click me to visit google"
// }
// MERE MAN SE BANAYA HUA THODI CHALEGA REACT MAI USKA KHUD KAA SYNTAX CHALEGA!!
// so why not pass reactElement itself to renderer to store additional one step bunch of errors reason milega neeche
    
const anotherEle = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)
// after a bunch of reserch i came to conclusion the use of curly bracets here 
// is the syntax for creating objects, but using parenthesis and writing html code
// it will be simialar to components which we are creating using function

// we can also say that below (34-38) line of code in react is changing it to above (26-28) line of code 
const extraVar = "madhav"

const ReactElement = React.createElement(
    'a',
    {href: "https://google.com", target: "_blank"},
    "click me to visit google",
    extraVar 
    // so here {couter} evaluated espression comes and if this is not 
    // finally evaluated then this is a basic js error because in js we can't
    // write if else inside a
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />

    // <MyApp />
    // MyApp() 
    // even this will also work because MyApp is just a function and it can be executed like this but not good practice

    // <ReactElement />
    // this will give error main reason being rendered have its own expectation and here expectation
    //  means a function ReactElement itself is an object so can't be passed, or here render is not custom
    // and react render is expecting function as a parameter

    // anotherEle
    // this is working and above variable is not working because like when we made our custom render
    // then we have some expectation in mind so ReactElement is not the exact what react render is expecting
    // but in anotherEle here this gives renderer html code similar to function 

    // ReactElement
)

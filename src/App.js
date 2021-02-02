// import logo from './logo.svg';
import './App.css';
import React from "react"

// Learning to use class components

// function App() {
//   return (
//     <div>
//        <h3>Code here.</h3>
//     </div>
//   );
// }

// class App extends React.Component{
//     render(){
 
//         return (
//             <div> 
//                 <h1>Code goes here.</h1>
//                 {/* using props... */}
//                 {/* this.props.whatever */}
//             </div>
//         )
//     }
// }

// convert from function to class based

class App extends React.Component{
    
    render(){

        return(
            <div>
                <Header username="Emy"/>
                <Greeting />
            </div>
        )
    }
}

class Header extends React.Component{
    // props() {
    //     username:"Emy"
    // }
    render(){
        return (
            <header>
                <p>Welcome, {this.props.username} </p>
            </header>
        )   
    }
    
}

class Greeting extends React.Component{
    

    render(){

        const date = new Date()
        const hours = date.getHours()
        let timeOfDay 

        if (hours < 12){
            timeOfDay = "morning"
        }else if (hours >= 12 && hours < 17){
            timeOfDay = "afternoon"
        }else {
            timeOfDay = "night"
        }
        return (
       <p>

        <h1>Good {timeOfDay} to you, sir or madam!</h1>
           
        </p>
    ) 
    }

}


export default App;

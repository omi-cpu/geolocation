import React from "react";
import react from "react";
import reactDom from "react-dom";

//functioal component
//const App = () => {
//making a call to the geolocation api using a functioal component
  //  window.navigator.geolocation.getCurrentPosition(
    //    (position) => console.log(position), //this is the success call back: this gets called when the app is successful in getting user's location//call back: this is what gets the user's location
      //  (error) => console.log(error)//this is the failure callback, what gets called when the user location is not successfully gotten
    //);

    //return(
      //  <div>
      //      Hello world!
       // </div>
    //)
//}


//creating a class component
/* class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position), //this is the success call back: this gets called when the app is successful in getting user's location//call back: this is what gets the user's location
            (error) => console.log(error)//this is the failure callback, what gets called when the user location is not successfully gotten
            );
        return(
            <div>
                You are in the nothern hemosphere
            </div>
        )
    }
} */


class App extends React.Component {
//what will be called whenever an instance of the class is created before anything else: a method of initializing state
    constructor(props) {
        super(props)

        //initializing state object
        this.state = { latitude: null, errorMessage: '' }

        window.navigator.geolocation.getCurrentPosition(
           // (position) => console.log(position),
            (position) => {
                this.setState({ latitude: position.coords.latitude})
            },
            (error) => {
                this.setState({ errorMessage: error.message})
            }
        );

    }

    //this function will be called wheneveer the render method shows on the screen
    componentDidMount(){
        console.log('componentDidMount')
    }

    
//basically called when the browser is updated or refreshed or rather the component
    componentDidUpdate(){
        console.log('consoleDidUpdate')
    }

    render() {
        //conditional rendering
        if (this.state.errorMessage && !this.state.latitude){
            return <div> {this.state.errorMessage} </div>
        }

        if(!this.state.errorMessage && this.state.latitude){
            return<div> {this.state.latitude} </div>
        }

        else {
            return<div>Loading...</div>
        }

        /*     return(
                <div>
                    { this.state.latitude }
                    { this.state.errorMessage}
                </div>
            ) */
    }
}


reactDom.render(
    <App />,
    document.querySelector('#root')
)
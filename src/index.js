import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    constructor{
        super(props);
        this.state = {lat: null}
    }

    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=> console.log(position),
            (err) => console.log(err)
            );
       
    
        return (
            <div>Location: </div>
        );
    }
}


ReactDOM.render(<App/>,document.querySelector("#root"));
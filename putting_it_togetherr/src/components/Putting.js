import React, { Component } from 'react';
                
                
class Putting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    increaseAge = () => {
            this.setState({ age: parseInt(this.state.age)+1 });
    }
    render() {
                const { firstName, lastName , hairColor} = this.props;
            return (
                    <div>
                            <h1>{lastName }, {firstName }</h1>
                            <h5>Age: { this.state.age}</h5>
                            <h5>Hair Color: {hairColor }</h5>
            <button onClick={ this.increaseAge }>Birthday Button for {firstName} {lastName}</button>
                    </div>
                    ) ;
        }
    }

                
export default Putting;

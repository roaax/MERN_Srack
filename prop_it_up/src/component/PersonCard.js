import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    render() {
    const { firstName, lastName , age , hairColor} = this.props;
        return (
                <div>
                        <h1>{lastName }, {firstName }</h1>
                        <h5>Age: { age }</h5>
                        <h5>Hair Color: {hairColor }</h5>
                </div>
                ) ;
    }
}
    
export default PersonCard;

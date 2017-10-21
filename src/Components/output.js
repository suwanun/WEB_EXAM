import React from 'react';

class Output extends React.Component {
	
	constructor(){
    super();
  	}
    render(){
        const location = this.props.location;
    	const params = this.props.match.params;
        
        return (
            <div>
                <h1>{params.value}</h1>
            </div>
        );
    }
}

export default Output;
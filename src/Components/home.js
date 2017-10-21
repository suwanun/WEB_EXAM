import React from 'react';
import {  NavLink } from 'react-router-dom';

class Home extends React.Component {
  constructor(){
    super();
  }
  render() {
        console.log(this.props)
        
        return (
            <div>
               <h1>
                   Suwanun  Tamkru ID : 57022130
               </h1>
               <h1>
                    นางสาวสุวนันท์  แต้มครู รหัสนิสิต : 57022130
               </h1>
            </div>
        );
    }

}

export default Home;
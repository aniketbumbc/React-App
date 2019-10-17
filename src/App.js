import React,{Component} from 'react';
import Table from './Table';

class App extends Component {
      render(){
      const characters =[
            {
                  name:'John',
                  job:'Sotware Engineer',
                  city:'Mumbai',
                  year:'2015',
            },
            {
                  name:'Mike',
                  job:'Test Engineer',
                  city:'NewYork',
                  year:'2017',
            },
            {
                  name:'Dean',
                  job:'Lead',
                  city:'Mumbai',
                  year:'2004',
            },
            {
                  name:'Jay',
                  job:'Sotware Devloper',
                  city:'NewYork',
                  year:'2008',
            },
      ]        
            return(
                  <div className="container">
                        <Table chardata= {characters}/>
                  </div>
            )
      }

}

export default App
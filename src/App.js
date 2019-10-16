import React,{Component} from 'react';

class App extends Component {
      render() {
            const name = 'React App';
            const heading = <h3> Test {name} </h3> // create variable with HTML style
            return (
                  <div className="App"> 
                        <h4> Hello!!  {name}</h4>
                        {heading}
                  </div>
                  )
      }

}

export default App
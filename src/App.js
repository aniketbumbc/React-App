import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
      state = {
            characters: [
                  {
                        name: 'John',
                        job: 'Sotware Engineer',
                        city: 'Mumbai',
                        year: '2015',
                  },
                  {
                        name: 'Mike',
                        job: 'Test Engineer',
                        city: 'NewYork',
                        year: '2017',
                  },
                  {
                        name: 'Dean',
                        job: 'Lead',
                        city: 'Mumbai',
                        year: '2004',
                  },
                  {
                        name: 'Jay',
                        job: 'Sotware Devloper',
                        city: 'NewYork',
                        year: '2008',
                  },
            ],

      }
      render() {
            const { characters } = this.state      
            return (
                  <div className="container">
                        <table chardata={characters}  removeCharacter ={this.removeCharacter}/>
                  </div>
            )
      }


      removeCharacter = index => {
            const { characters } = this.state

            this.setState({

                  characters: characters.filter((characters, i) => {
                        return i !== index
                  }),
            })
      }

}

export default App
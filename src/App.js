import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
      state = {
            characters: [ ],

      }
      render() {
            const { characters } = this.state      
            return (
                  <div className="container">
                        <Table chardata={characters}  removeCharacter ={this.removeCharacter}/>
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
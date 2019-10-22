import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
      state = {
            characters: [ ],

      }
      render() {
            const { characters } = this.state      
            return (
                  
                  <div className="container">
                        <Form handleSubmit={this.handleSubmit} /><br/>
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

      handleSubmit = character =>{
            this.setState({characters:[...this.state.characters,character]})
      }

}

export default App
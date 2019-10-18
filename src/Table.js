import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


const TableHeader = () =>{
      return(

            <thead>
            <tr>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Loction</th>
                  <th>Year</th>
                  <th> Delete </th>

            </tr>
      </thead>
      )
}

const TableBody = props =>{
      const rows = props.chardata.map((row,index)=>{
            return(
                  <tr key ={ index}>
                        <td>{row.name}  {index}</td>
                        <td>{row.job}</td>
                        <td>{row.city}</td>
                        <td>{row.year}</td>
                        <td>
                              <Button onClick={()=>props.removeCharacter(index)}>Delete
                              </Button>
                        </td>
                  </tr>
            )
      })
      return <tbody>{rows}</tbody>
      
           
}

class Table extends Component {

      render() {
            const {removeCharacter,chardata} = this.props
            return (
                
                  <Table striped bordered hover class="centerTable">
                        <TableBody chardata ={chardata} removeCharacter ={removeCharacter} />
                        <TableHeader />
                  </Table>
            )
      }

}



export default Table
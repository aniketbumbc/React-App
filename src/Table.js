import React, { Component } from 'react';

const TableHeader = () =>{
      return(

            <thead>
            <tr>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Loction</th>
                  <th>Year</th>

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
                  </tr>
            )
      })
      return <tbody>{rows}</tbody>
      
           
}

class Table extends Component {

      render() {

            const {chardata} = this.props
            return (
                
                  <table border="1" class="centerTable">
                        <TableBody chardata ={chardata} />
                        <TableHeader />
                  </table>
            )
      }

}



export default Table
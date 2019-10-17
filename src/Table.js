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

const TableBody =() =>{
      return(            
            <tbody/>
      )
}

class Table extends Component {

      render() {

            const {chardata} = this.props
            return (
                  <table border="1">
                        <TableBody chardata ={chardata} />
                        <TableHeader />
                  </table>
            )
      }

}



export default Table
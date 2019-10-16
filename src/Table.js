import React, { Component } from 'react';

class Table extends Component {
      render() {
            return (
                  <table>
                        <thead>
                              <tr>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Loction</th>
                                    <th>Year</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>John</td>
                                    <td>Sotware Engineer</td>
                                    <td>Mumbai</td>
                                    <td>2015</td>
                              </tr>
                              <tr>
                                    <td>Mike</td>
                                    <td>Test Engineer</td>
                                    <td>NewYork</td>
                                    <td>2017</td>
                              </tr>
                              <tr>
                                    <td>Dean</td>
                                    <td>Lead</td>
                                    <td>Mumbai</td>
                                    <td>2005</td>
                              </tr>
                              <tr>
                                    <td>Jay</td>
                                    <td>Sotware Engineer Manager</td>
                                    <td>Mumbai</td>
                                    <td>2008</td>
                              </tr>
                              <tr>
                                    <td>Craig</td>
                                    <td>Sotware Devloper</td>
                                    <td>NewYork</td>
                                    <td>2002</td>
                              </tr>
                        </tbody>
                  </table>
            )
      }
}

export default Table
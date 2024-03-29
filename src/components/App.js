
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        <h1>Books List</h1>
        <label for='sort'>Sort by:</label>
        <select name='sort' id='sort'>
          <option>title</option>
          <option>author</option>
          <option>publisher</option>
        </select>
        <label for='order'>Order:</label>
        <select name='order' id="order">
          <option>Sorted</option>
          <option>Unsorted</option>
        </select>
        <table>
        <th>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </th>
        <tr>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
        </table>
    </div>
  )
}

export default App

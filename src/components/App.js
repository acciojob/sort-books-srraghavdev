
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        <h1>Books List</h1>
        <label for='sort'>sort by</label>
        <select name='sort' id='sort'>
          <option>title</option>
          <option>author</option>
          <option>publisher</option>
        </select>
        <label for='order'>order</label>
        <select name='order' id="order">
          <option>Sorted</option>
          <option>Unsorted</option>
        </select>
        <table>
          
        </table>
    </div>
  )
}

export default App

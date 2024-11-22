/* 
  Implement a button which makes a get request to https://reqres.in/ to get a list of users and display them.
  100% free reign to accomplish this goal however you wish, within the context of react.

  apiMethods.js file has already been stubbed out for you. Feel free to use it or not.

  ****Make any changes to this boilerplate that you want to.*****
  ****The included code is only provided as a convienence.****

  Bonus 1:  Add a button for each user to make a delete request to delete that user. 
          Update the displayed users excluding the deleted user.

  Bonus 2: Make a filter box to filter the displayed users by name.
*/

import React from "react";
import { createRoot } from 'react-dom/client';
import './styles.css';
import CardLayout from "./card-layout";

function App() {
    return (
        <div className="App">
            <h1>Users</h1>
            <CardLayout />
        </div>
    );
}


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

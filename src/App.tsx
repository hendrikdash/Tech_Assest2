import React from 'react';
import './asset/style/Apps.css';
import 'react-flags-select/css/react-flags-select.css';
import ReactRouter from './ReactRouter'
import { BrowserRouter as Router} from "react-router-dom";

import {AppProvider} from './GlobalState/AppContext'

function App() {

  return (
    <div className="App">
      <Router>
        <AppProvider>
          <ReactRouter/>
        </AppProvider>
      </Router>


    </div>
  );
}

export default App;






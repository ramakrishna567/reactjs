import React, { Component } from 'react';
import './App.css';

import Hero from './components/errorBoundary/Hero';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
// import GETRequest from './components/http/GETRequest';
// import POSTRequest from './components/http/POSTRequest';
import Counter from './components/setStateComp/Counter';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/renderPeops/User';
import RenderProp from './components/renderPeops/RenderProp';
import { UserProvider } from './components/context/userContext';
import ComponentC from './components/context/ComponentC';
import ComponentF from './components/context/ComponentF';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div className="App">

        <ErrorBoundary>
          {/* //RenderProps */}
          {/* <RenderProp render={(count, incrementCount) => (<HoverCounter count={count} incrementCount={incrementCount} />)} /> */}

          <UserProvider value="Ramakrishna">
            <ComponentC/>
          </UserProvider>
        </ErrorBoundary>

      </div>
    )
  }
}

export default App;

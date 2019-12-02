import React from 'react';

import Selection from '@simonwep/selection-js';

import logo from './logo.svg';
import './App.css';
import Testing from './Testing';
import Test1 from './components/Test1';
import UpButton from './components/UpButton';
import NavBar from './components/NavBar';
import ThemeSelectors from './components/ThemeSelectors';
import TestButton from './components/TestButton';

import { ThemeProvider } from './contexts/ThemeContext';


const selection = Selection.create({
  class: 'selection',
  selectables: ['.test', '.App-logo', '.test1'],
  boundaries: ['.App'],
}).on('start', ({inst, selected, oe}) => {
  // Remove class if the user isn't pressing the control key or ⌘ key
  if (!oe.ctrlKey && !oe.metaKey) {
    // Unselect all elements
    for (const el of selected) {
      el.classList.remove('selected');
      inst.removeFromSelection(el);
    }
    // Clear previous selection
    inst.clearSelection();
  }
}).on('move', ({changed: {removed, added}}) => {
  // Add a custom class to the elements that where selected.
  for (const el of added) {
    el.classList.add('selected');
  }
  // Remove the class from elements that where removed
  // since the last selection
  for (const el of removed) {
    el.classList.remove('selected');
  }
}).on('stop', ({inst}) => {
  inst.keepSelection();
});

class App extends React.Component {
  state = {
    selectionEnabled: true
  };

  render() {
    this.state.selectionEnabled ? selection.enable() : selection.disable();

    return (
      <ThemeProvider>
        <div className={`App ${this.state.selectionEnabled ? 'selection-enabled' : 'selection-disabled' }`}>
          <NavBar />
          <Test1 />
          <UpButton />
          <ThemeSelectors />
          <TestButton />
          <header className="App-header">
            <button onClick={() => {
              selection.enable();
              this.setState({ selectionEnabled: true });
            }}>Enable</button>
            <button onClick={() => {
              const selectedElementsInstance = [...selection.getSelection()]
              for (const el of selectedElementsInstance) {
                el.classList.remove('selected');
                selection.removeFromSelection(el);
              }
              selection.clearSelection();
              selection.disable();
              this.setState({ selectionEnabled: false });
            }}>Disable</button>
            <img src={logo} className="App-logo" alt="logo" />
            <div className="testing-boundary">
              <p className="test">testing 1</p>
              <p className="test">testing 2</p>
              <p className="test">testing 3</p>
              <p className="test">testing 4</p>
              <p className="test">testing 5</p>
              <p className="test">testing 2</p>
              <p className="test">testing 3</p>
              <p className="test">testing 4</p>
              <p className="test">testing 5</p>
              <p className="test">testing 2</p>
              <p className="test">testing 3</p>
              <p className="test">testing 4</p>
              <p className="test">testing 5</p>
              <p className="test">testing 2</p>
              <p className="test">testing 3</p>
              <p className="test">testing 4</p>
              <p className="test">testing 5</p>
            </div>
            <div className="test-div">
              <p className="testing1">testing <span className="testing2">6</span></p>
            </div>
          </header>
          <Testing />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

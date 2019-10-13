import React from 'react';
import logo from './logo.svg';
import './App.css';
import Testing from './Testing';
import Selection from '@simonwep/selection-js';

function App() {
  Selection.create({
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
  );
}

export default App;

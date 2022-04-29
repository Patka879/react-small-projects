import { useState, useEffect } from 'react';
import  ChildComponent  from './ChildComponent';
import ParentComponent from './ParentComponent';

export default function App() {

  const [state, setState] = useState(0)
  const [stateMultiplier, setStateMultiplier] = useState(10)
  const [stateMultiplied, setStateMultiplied] = useState(state * stateMultiplier)
  const [isMyToggleEnabled, setIsMyToggleEnabled] = useState(false)

  function clicker() {
    setState(state + 1)
  }

  function handleToggleChange() {
    setIsMyToggleEnabled(!isMyToggleEnabled)
  }

  useEffect(() => {
    setStateMultiplier(isMyToggleEnabled ? 20 : 10)
    console.log(isMyToggleEnabled)
  },[ isMyToggleEnabled])

  useEffect(() => {
    setStateMultiplied(state * stateMultiplier)
    console.log(state, isMyToggleEnabled)
  },[state, stateMultiplier])

  return (
    <div className="App">
    <button onClick={clicker}>Click</button>
      Hello state is {state} <br /> 
      Multiplier x {stateMultiplier} of state is {stateMultiplied} <br />
      <button onClick={handleToggleChange}>Toggle multiplier</button>
      My multiplier toggle is {isMyToggleEnabled ? "on" : "off"} <br />
      <ChildComponent />
      <ParentComponent>
        <span>Child1 of Parent Component</span>
        <span>Child2 of Parent Component</span>
      </ParentComponent>
    </div>
    
  );
}











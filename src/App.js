import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState({
    count: 0
  })

  const addOne = () => {
    setState({count: state.count += 1})
  }

  const subtractOne = () => {
    setState({ count: state.count -= 1 })
  }

  let content = (
    <React.Fragment> 
      <h1 className="text-center pt-5">Counter</h1>
      <div className="row">
        <button onClick={subtractOne} style={{position: "absolute", top: "20%", left: "50%"}}>-</button>
        <button onClick={addOne} style={{position: "absolute", top: "20%", right: "50%"}}>+</button>
      </div>

      <h1 className="text-center">{state.count}</h1>

    </React.Fragment>
  )

  return content;
}
export default App;

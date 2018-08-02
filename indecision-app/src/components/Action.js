
import React from 'react';

// Stateless Functional Component - replaces  class-based component that only has a render method!
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}> What should I do? </button>
    </div>
  )
}

export default Action;
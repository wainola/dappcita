import React, { useEffect, useState } from 'react';
import './App.css';
import ReadString from './ReadString';

function App({ drizzle }) {
  const [state, setState] = useState({
    loading: true,
    drizzleState: null,
  });

  useEffect(() => {
    const unsubscribe = drizzle.store.subscribe(() => {
      const drizzleState = drizzle.store.getState();

      if (drizzleState.drizzleStatus.initialized) {
        setState({
          loading: false,
          drizzleState,
        });
      }
    });

    return function () {
      unsubscribe();
    };
  }, []);

  console.log(state);
  return (
    <div className="App">
      {state.loading ? (
        <h2>Drizzle loading</h2>
      ) : (
        <div>
          <ReadString drizzle={drizzle} drizzleState={state.drizzleState} />
        </div>
      )}
    </div>
  );
}

export default App;

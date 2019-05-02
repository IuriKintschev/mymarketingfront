import React from 'react';

// imports
import Main from "./components/Main";
import styled from 'styled-components';

// style
export const Body = styled.div`
  height: 100vh;
  background: linear-gradient(90deg, #84e, #EC6EAD)
`;
// style end


function App() {
  return (
    <div className="App">
      <Body>
        <Main/>
      </Body>
    </div>
  );
}

export default App;

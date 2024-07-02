import Button from 'react-bootstrap/Button';

import DisplayCounter from './components/DisplayCounter';
import Controller from './components/Controller';
function App() {
  return (
     <><DisplayCounter /><div className='raw'>
      <Controller/>
    </div></>
  );
}

export default App;

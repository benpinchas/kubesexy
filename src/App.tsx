import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainRoute from './routes/MainRoute';
import { initAppRequest } from './store/app-state/app-state-actions';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initAppRequest())
  }, [])
  return (
    <div className="App">
      <MainRoute />
    </div>
  );
}

export default App;

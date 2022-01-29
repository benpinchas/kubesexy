import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainRoute from './routes/MainRoute';
import { initAppRequest } from './store/app-state/app-state-actions';
import { isAppInitedSelector } from './store/app-state/app-state-selectors';

function App() {
  const dispatch = useDispatch()
  const inited = useSelector(isAppInitedSelector)
  useEffect(() => {
    dispatch(initAppRequest())
  }, [])
  return (
    <div className="App">
      {inited ? <MainRoute /> : "Initing App.." } 
    </div>
  );
}

export default App;

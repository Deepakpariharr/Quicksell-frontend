import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
// import Card from './components/Card/Card';
import DashView from './components/DashBoard';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Axios';
import Loading from './components/Loading';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "5px"}} >
      <Navbar/>
      <hr style={{marginTop : "5px"}} />
      <DashView/>
    </div>
  ) : <Loading/>
}

export default App
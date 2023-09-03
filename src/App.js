import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import AllAuditsPage from './pages/AllAuditsPage'
import SupportPage from './pages/SupportPage'
import YourPlanPage from './pages/YourPlanPage'
import NewAudit from './components/dashboardPageComponents/NewAudit'
import HomePageComponents from './pages/HomePageComponents'

function App() {

  const [newAudit, setNewAudit] = useState(false)

  
  return (

    <>

      <BrowserRouter>
        <Routes>

          <Route index element={ <HomePageComponents/> } />

          <Route path='/login' element={<LoginPage/>}/> 
          <Route path='/dashboard' element={<DashboardPage setNewAudit={setNewAudit}/>}/> 
          <Route path='/audits' element={<AllAuditsPage setNewAudit={setNewAudit}/>}/> 
          <Route path='/yourplan' element={<YourPlanPage setNewAudit={setNewAudit}/>}/> 
          <Route path='/support' element={<SupportPage setNewAudit={setNewAudit}/>}/> 
      
    
          {/* <Route path='*' element={<LoginPage/>} /> */}


        </Routes>
      </BrowserRouter>

      {
        newAudit
        &&
        <NewAudit
          setNewAudit={setNewAudit}
        />
      }


    </>
  );
}

export default App;

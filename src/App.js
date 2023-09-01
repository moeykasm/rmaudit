// import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { useEffect, useState } from 'react'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import AllAuditsPage from './pages/AllAuditsPage'
import SupportPage from './pages/SupportPage'
import YourPlanPage from './pages/YourPlanPage'

function App() {

  return (

    <>

      <BrowserRouter>
        <Routes>

          <Route index element={ <LoginPage/> } />

        
          <Route path='/user/name/dashboard' element={<DashboardPage/>}/> 
          <Route path='/user/name/allaudits' element={<AllAuditsPage />}/> 
          <Route path='/user/name/yourplan' element={<YourPlanPage />}/> 
          <Route path='/user/name/support' element={<SupportPage />}/> 
      
    
          {/* <Route path='*' element={<LoginPage/>} /> */}


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

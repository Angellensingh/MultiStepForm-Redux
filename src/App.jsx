
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import PickAddOns from './components/PickAddOns'
import SelectPlan from './components/SelectPlan'
import Summary from './components/Summary'
import ThankYou from './components/ThankYou'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className='h-svh bg-slate-300'> 
        
       {/* <PersonalInfo/> */}
       {/* <SelectPlan/>
       {/* <PickAddOns/> */}
       {/* <Summary/> */}
       {/* <ThankYou/> */}
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/SelectPlan" element={<SelectPlan />} /> 
          <Route path='/PickAddOns' element={<PickAddOns/>} />
          <Route path='/Summary' element={<Summary/>}/>
          <Route path='/ThankYou' element={<ThankYou/>}/>
        </Routes>
       </BrowserRouter> 
    </div>
    

       
     
    
  )
}

export default App

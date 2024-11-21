
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import PickAddOns from './components/PickAddOns'
import SelectPlan from './components/SelectPlan'
import Summary from './components/Summary'
import ThankYou from './components/ThankYou'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className='h-[100vh] justify-center bg-slate-300'> 
        
       {/* <PersonalInfo/> */}
       {/* <SelectPlan/>
       {/* <PickAddOns/> */}
       {/* <Summary/> */}
       {/* <ThankYou/> */}
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/select-plan" element={<SelectPlan />} /> 
          <Route path='/pick-add-ons' element={<PickAddOns/>} />
          <Route path='/summary' element={<Summary/>}/>
          <Route path='/thank-you' element={<ThankYou/>}/>
        </Routes>
       </BrowserRouter> 
    </div>
    

       
     
    
  )
}

export default App



import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignatureMenuPage from './pages/SignatureMenuPage'
import FranchiseEventsPage from './pages/FranchiseEventsPage'
import ScrollToTopHandler from './components/ScrollToTopHandler'

export default function App() {
  
  return (
    <>
      <ScrollToTopHandler />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/signature-menu" element={<SignatureMenuPage />} />
        <Route path="/franchise-events" element={<FranchiseEventsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
     
  )
}



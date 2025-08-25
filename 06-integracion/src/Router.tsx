
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import './themes.css'
import MainLayout from './pages/MainLayout'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import { useState } from 'react'
import Login from './pages/Login/Login'
import TicketList from './pages/TicketList/TicketList'
import NewTicket from './pages/NewTicket/NewTicket'
import MainContent from './components/MainContent/MainContent'

function Router() {
  const [user, setUser] = useState<string>("")
  return (
    <BrowserRouter>
      <Routes>
        {user ?
          <Route path='/' element={<MainLayout />}>
            <Route index element={<MainContent />} />
            <Route path='ticket' element={<TicketList />} />
            <Route path='newTicket' element={<NewTicket />} />
          </Route>
          :
          <Route path='/' element={<Login setUser={setUser} />} />
        }
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

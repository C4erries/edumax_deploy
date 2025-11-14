import { Spin, App as AntdApp } from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useAuth } from './hooks/useAuth'
import { EventsPage } from './pages/EventsPage'
import { EventDetailsPage } from './pages/EventDetailsPage'
import { ElectivePage } from './pages/ElectivePage'
import { RequestDetailPage } from './pages/RequestDetailPage'
import { ApprovalPage } from './pages/ApprovalPage'
import { ProfilePage } from './pages/ProfilePage'
import { LibraryPage } from './pages/LibraryPage'

function App() {
  const { isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="app">
        <div className="app__loader">
          <Spin size="large" />
        </div>
      </div>
    )
  }

  return (
    <AntdApp>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:eventId" element={<EventDetailsPage />} />
            <Route path="/electives" element={<ElectivePage />} />
            <Route path="/approval" element={<ApprovalPage />} />
            <Route path="/requests/:requestId" element={<RequestDetailPage />} />
            <Route path="/my-requests/:requestId" element={<RequestDetailPage my />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/library" element={<LibraryPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AntdApp>
  )
}

export default App

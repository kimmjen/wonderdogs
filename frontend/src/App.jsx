import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/layout'
import Home from './pages/Home'
import Players from './pages/Players'
import PlayerDetailPage from './pages/PlayerDetailPage'
import Schedule from './pages/Schedule'
import Stats from './pages/Stats'
import ComponentLibrary from './pages/ComponentLibrary'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/players/:id" element={<PlayerDetailPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/components" element={<ComponentLibrary />} />
      </Routes>
    </MainLayout>
  )
}

export default App

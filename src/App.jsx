import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Index from './pages/Index.jsx'
import New from './pages/New.jsx'
import Show from './pages/Show.jsx'
import Edit from './pages/Edit.jsx'

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/crystals" element={<Index/>}/>
            <Route path="/crystals/new" element={<New/>}/>
            <Route path="/crystals/:index" element={<Show/>}/>
            <Route path="/crystals/:index/edit" element={<Edit/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  )
};

export default App;

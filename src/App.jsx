import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './pages/DefaultLayout.jsx'
import Homepage from './pages/Homepage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout} >
          <Route path='/' Component={Homepage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

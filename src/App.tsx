import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './pages/DefaultLayout'
import Homepage from './pages/Homepage'
import TeamDetail from './pages/TeamDetail'
import Meme from './pages/meme'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout} >
          <Route path='/' Component={Homepage} />
          <Route path='/team/:teamIndex' Component={TeamDetail} />
          <Route path='/meme' Component={Meme} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

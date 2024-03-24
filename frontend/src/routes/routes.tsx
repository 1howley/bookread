import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NotFound from '../pages/notFound/notFound'
import Home from '../pages/home/home'
import AddBook from '../pages/addBook/addBook'

function MappedRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/book' element={ <AddBook/> }/>
        <Route path='/404' element={ <NotFound/> }/>
        <Route path='*' element={ <Navigate to={'/404'} /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default MappedRoutes
/* eslint-disable indent */
import { OverviewPage } from 'pages/mainPage/OverviewPage'
import { PageNotFound } from 'pages/pageNotFound/PageNotFound'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Navigate to='/loginPage' />} /> */}
        <Route path='/' element={<Navigate to='/overviewPage' />} />
        <Route path='/overviewPage' element={< OverviewPage />} />
        {/* <Route path='/loginPage' element={< LoginPage />} />
        <Route path='/profilePage' element={< ProfilePage />} /> */}
        <Route path='*' element={< PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App

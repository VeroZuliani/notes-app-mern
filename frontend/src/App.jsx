import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateNotePage from './pages/CreateNotePage'
import EditNotePage from './pages/EditNotePage'
import {ToastContainer} from 'react-toastify'
import { Box } from '@mui/material'

const App = () => {
  return (
    <Box>
      <Routes>
        {/* Renderizamos */}
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/CreateNotePage' element={<CreateNotePage/>}></Route>
        <Route path='/EditNotePage/:id' element={<EditNotePage/>}></Route>
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </Box>  
  )
}

export default App

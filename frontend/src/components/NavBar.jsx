import {NavLink} from 'react-router-dom'
import {PlusIcon} from 'lucide-react'
import {Box, colors} from '@mui/material'

const NavBar = () => {
  return (
    <header className='navbar py-8' style={{ backgroundColor: '#ededed' }}>
        <Box sx={{maxWidth:'1000px', margin:'auto', display:'flex', alignItems:'center', justifyContent:'space-between', px: { xs: 2, md: 0 }}}>
            <NavLink className='text-3xl font-bold' to="/">
                NoteApp
            </NavLink>
            <NavLink className='btn font-bold rounded-2xl p-4 bg-[#acacac] hover:bg-[#474747] hover:text-white transition-colors duration-300 flex items-center gap-2' to='/CreateNotePage'>
                <PlusIcon/>
                Crear una nota
            </NavLink>
        </Box>
    </header>
  )
}

export default NavBar

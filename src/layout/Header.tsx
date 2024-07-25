import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar/index'
import { Container } from '@mui/material'
import Logo from '../components/Logo/Logo'
import Menu from '../components/HeaderMenu/HeaderMenu'
import './Header.css'

type Props = {}
function Header({}: Props) {
    return (
        <AppBar position="static" className="appbar">
            <Container className="header-container">
                <Toolbar className="toolbar">
                    <Logo />
                    <Menu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header

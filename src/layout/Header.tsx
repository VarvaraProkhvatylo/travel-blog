import AppBar from '@mui/material/AppBar/index'
import Toolbar from '@mui/material/Toolbar/index'
import { Container } from '@mui/material'
import Logo from '../components/Logo/Logo'
import Menu from '../components/Menu/Menu'

type Props = {}
function Header({}: Props) {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Logo />
                    <Menu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header

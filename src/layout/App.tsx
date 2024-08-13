import Header from './Header'
import Footer from './Footer'
// import Main from './Main'
import Home from '../pages/Home/Home'
import Contacts from '../pages/Contacts/Contacts'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Route, Routes } from 'react-router'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/contacts" element={<Contacts />}></Route>
                </Routes>
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App

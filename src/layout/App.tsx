import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home/Home'
import Contacts from '../pages/Contacts/Contacts'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Route, Routes } from 'react-router'
import Category from '../pages/Category/Category'
import ArticlePage from '../pages/Article/ArticlePage'
import LikedArticles from '../pages/LikedArticles.tsx/likedArticles'

type Props = {}

const App = () => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/bucket-list"
                        element={<Category category="bucket-list" />}
                    ></Route>
                    <Route
                        path="/travel-tips"
                        element={<Category category="travel-tips" />}
                    ></Route>
                    <Route
                        path="/food"
                        element={<Category category="food" />}
                    ></Route>
                    <Route path="/contacts" element={<Contacts />}></Route>
                    <Route path="/:id" element={<ArticlePage />} />
                    <Route
                        path="/liked-articles"
                        element={<LikedArticles />}
                    ></Route>
                </Routes>
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App

import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home/Home'
import Contacts from '../pages/Contacts/Contacts'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Route, Routes } from 'react-router'
import Category from '../pages/Category/Category'
import ArticlePage from '../pages/Article/ArticlePage'
import { Container, Grid } from '@mui/material'
import { articlesArray } from '../utils/articlesArray'
import ArticleListItem from '../components/Articles/ArticleListItem'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'

type Props = {
    isLiked?: (id: number) => void
}

const App = (props: Props) => {
    const likedArticlesIds = useSelector(
        (state: RootState) => state.articlesLikeState
    )
    const likedArticles = articlesArray.filter(
        (article) => likedArticlesIds[article.id]
    )
    console.log(likedArticles)
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
                    />
                    <Route
                        path="/travel-tips"
                        element={<Category category="travel-tips" />}
                    />
                    <Route
                        path="/food"
                        element={<Category category="food" />}
                    />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/:id" element={<ArticlePage />} />
                    <Route
                        path="/liked-articles"
                        element={
                            <Container
                                className="filtered"
                                sx={{
                                    maxWidth: '1200px',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '50px',
                                    paddingTop: '50px',
                                    paddingBottom: '50px',
                                    margin: '0 auto',
                                }}
                            >
                                {likedArticles.length > 0 ? (
                                    likedArticles.map(
                                        ({
                                            id,
                                            image,
                                            title,
                                            date,
                                            category,
                                            shortDescription,
                                            description,
                                        }) => (
                                            <Grid
                                                item
                                                xs={12}
                                                sm={6}
                                                lg={4}
                                                key={id}
                                            >
                                                <ArticleListItem
                                                    id={id}
                                                    image={image}
                                                    title={title}
                                                    shortDescription={
                                                        shortDescription
                                                    }
                                                    date={date}
                                                    category={category}
                                                    description={description}
                                                />
                                            </Grid>
                                        )
                                    )
                                ) : (
                                    <p
                                        style={{
                                            width: '1200px',
                                            fontFamily: '"Lato", sans-serif',
                                            fontSize: '30px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {' '}
                                        You have no liked articles
                                    </p>
                                )}
                            </Container>
                        }
                    />
                </Routes>
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App

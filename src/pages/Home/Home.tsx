import { Container } from '@mui/material'
import ArticlesList from '../../components/Articles/ArticlesList'
import Slider from '../../components/Slider/Slider'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Container
                sx={{
                    padding: '30px 0',
                }}
                className="main-container"
                component={'div'}
            >
                <Slider />
                <ArticlesList />
            </Container>
        </>
    )
}

export default Home

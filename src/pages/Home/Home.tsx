import { Container } from '@mui/material'
import ArticlesList from '../../components/Articles/ArticlesList'
import Slider from '../../components/Slider/Slider'
import { url } from 'inspector'
import background from '../../assets/BG-pattern.png'
import './Home.css'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Container
                sx={{
                    padding: '30px 0',
                    backgroundImage: `url(${background})`,
                    // backgroundRepeat: 'no-repeat',
                }}
                className="main-container"
                component={'div'}
            >
                <Container className="content-container">
                    <Slider />
                    <ArticlesList />
                </Container>
            </Container>
        </>
    )
}

export default Home

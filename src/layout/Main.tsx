import { Container } from '@mui/material'
import ArticlesList from '../components/Articles/ArticlesList'
import Slider from '../components/Slider/Slider'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Container
                sx={{
                    padding: '30px 0',
                }}
                className="main-container"
            >
                <Slider />
                <ArticlesList />
            </Container>
        </>
    )
}

export default Main

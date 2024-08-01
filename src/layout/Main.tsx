import { Container } from '@mui/material'
import ProductsList from '../components/Articles/ArticlesList'

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
                <ProductsList />
            </Container>
        </>
    )
}

export default Main

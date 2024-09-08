import { useParams } from 'react-router'
import {
    Article,
    articlesArray,
    getArticlesObject,
} from '../../utils/articlesArray'
import { Container, Grid } from '@mui/material'
import parse from 'html-react-parser'
import './ArticlePage.css'

type Props = {}

type ArticlesObject = {
    [id: number]: Article
}

const ArticlePage = (props: Props) => {
    const articlesObject: ArticlesObject = getArticlesObject(articlesArray)

    const { id } = useParams()

    const description = articlesObject[parseInt(id!)].description

    return (
        <>
            <Grid container className="article-page">
                <Container className="article-content">
                    <div className="image">
                        <img
                            src={articlesObject[parseInt(id!)].image}
                            alt="image"
                        />
                    </div>
                    <div className="info">
                        <div className="category">
                            {articlesObject[parseInt(id!)].category}
                        </div>
                        <div className="date">
                            {articlesObject[parseInt(id!)].date}
                        </div>
                    </div>
                    <div className="title">
                        {articlesObject[parseInt(id!)].title}
                    </div>
                    <div className="description">{parse(description)}</div>
                    <div></div>
                </Container>
            </Grid>
        </>
    )
}

export default ArticlePage

import { Container, Grid } from '@mui/material'
import { articlesArray } from '../../utils/articlesArray'
import ArticleListItem from '../../components/Articles/ArticleListItem'
import { useSelector } from 'react-redux'

type Props = {
    isLiked?: (id: number) => void
}

const LikedArticles = ({ isLiked }: Props) => {
    // const likedArticles = articlesArray.filter((article) => article.isLiked)
    return (
        <>
            <Container>
                <Container>
                    {articlesArray
                        // .filter((article) => article.isLiked === true)
                        .map(
                            ({
                                id,
                                image,
                                title,
                                date,
                                category,
                                shortDescription,
                                description,
                            }) => (
                                <Grid item xs={12} sm={6} lg={4} key={id}>
                                    <ArticleListItem
                                        id={id}
                                        image={image}
                                        title={title}
                                        shortDescription={shortDescription}
                                        date={date}
                                        category={category}
                                        description={description}
                                    />
                                </Grid>
                            )
                        )}
                </Container>
            </Container>
        </>
    )
}

export default LikedArticles

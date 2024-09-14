import { Container, Grid } from '@mui/material'
import { articlesArray } from '../../utils/articlesArray'
import ArticleListItem from '../../components/Articles/ArticleListItem'
import './Category.css'

type Props = {
    category: string
}

const Category = ({ category }: Props) => {
    return (
        <>
            <Container className="category-page">
                <Container className="category-container">
                    {articlesArray
                        .filter((article) => article.category === category)
                        .map(
                            ({
                                id,
                                image,
                                title,
                                date,
                                // like,
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
                                    className="category-article"
                                >
                                    <ArticleListItem
                                        id={id}
                                        image={image}
                                        title={title}
                                        shortDescription={shortDescription}
                                        date={date}
                                        // like={like}
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

export default Category

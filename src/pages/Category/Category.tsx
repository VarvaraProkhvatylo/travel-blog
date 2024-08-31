import { Grid } from '@mui/material'
import { articlesArray } from '../../utils/articlesArray'
import ArticleListItem from '../../components/Articles/ArticleListItem'

type Props = {
    category: string
}

const Category = ({ category }: Props) => {
    return (
        <div>
            {articlesArray
                .filter((article) => article.category === category)
                .map(
                    ({
                        id,
                        image,
                        title,
                        date,
                        like,
                        category,
                        shortDescription,
                        description,
                    }) => (
                        <Grid item xs={12} sm={6} lg={4} key={id}>
                            <ArticleListItem
                                image={image}
                                title={title}
                                shortDescription={shortDescription}
                                date={date}
                                like={like}
                                category={category}
                                description={description}
                            />
                        </Grid>
                    )
                )}
        </div>
    )
}

export default Category

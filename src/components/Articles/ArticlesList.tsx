import { Grid } from '@mui/material'
import ArticleListItem from './ArticleListItem'
import { articlesArray } from '../../utils/articlesArray'

type Props = {
    isLiked?: (id: number) => void
}

const ArticlesList = ({ isLiked }: Props) => {
    return (
        <>
            <Grid container>
                {articlesArray.map(
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
            </Grid>
        </>
    )
}

export default ArticlesList

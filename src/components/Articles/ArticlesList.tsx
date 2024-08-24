import { Grid } from '@mui/material'
import ArticleListItem from './ArticleListItem'
import { articlesArray } from '../../utils/articlesArray'

type Props = {}

console.log(articlesArray)

const ArticlesList = (props: Props) => {
    return (
        <>
            <Grid container>
                {articlesArray.map(
                    ({
                        id,
                        image,
                        title,
                        description,
                        date,
                        like,
                        category,
                    }) => (
                        <Grid item xs={12} sm={6} lg={4} key={id}>
                            <ArticleListItem
                                image={image}
                                title={title}
                                description={description}
                                date={date}
                                like={like}
                                category={category}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ArticlesList

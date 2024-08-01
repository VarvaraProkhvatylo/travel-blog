import { Grid } from '@mui/material'
import ArticleListItem from './ArticleListItem'
import { articlesArray } from '../../utils/articlesArray'

type Props = {}

console.log(articlesArray)

function ArticlesList({}: Props) {
    return (
        <>
            <Grid container sx={{ display: 'flex' }}>
                {articlesArray.map(
                    ({ id, image, title, description, date, like }) => (
                        <Grid item xs={12} sm={6} lg={4} key={id}>
                            <ArticleListItem
                                image={image}
                                title={title}
                                description={description}
                                date={date}
                                like={like}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ArticlesList

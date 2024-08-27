import { Card, CardContent } from '@mui/material'
import './ArticleListItem.css'

type Props = {
    image: string
    title: string
    description?: string
    date: string
    like: string
    category: string
    shortDescription?: string
}

const ArticleListItem = ({
    image,
    title,
    shortDescription,
    description,
    date,
    like,
}: Props) => {
    return (
        <>
            <Card className="card" sx={{ marginBottom: '25px' }}>
                <CardContent className="card-content">
                    <div className="article-image">
                        <img src={image} alt="" />
                    </div>
                    <h2 className="article-title">{title}</h2>
                    <div className="article-description">
                        {shortDescription}
                    </div>
                    <div className="article-date">{date}</div>
                    <div className="article-like">{like}</div>
                </CardContent>
            </Card>
        </>
    )
}

export default ArticleListItem

import { Card, CardContent } from '@mui/material'
import './ArticleListItem.css'

type Props = {
    image: string
    title: string
    description: string
    date: string
    like: string
}

const ArticleListItem = ({ image, title, description, date, like }: Props) => {
    return (
        <>
            <Card className="card">
                <CardContent className="card-content">
                    <div className="article-image">
                        <img src={image} alt="" />
                    </div>
                    <h2 className="article-title">{title}</h2>
                    <div className="article-description">{description}</div>
                    <div className="article-date">{date}</div>
                    <div className="article-like">{like}</div>
                </CardContent>
            </Card>
        </>
    )
}

export default ArticleListItem

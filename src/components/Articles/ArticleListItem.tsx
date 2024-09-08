import { Card, CardContent } from '@mui/material'
import './ArticleListItem.css'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    image: string
    title: string
    description?: string
    date: string
    like: string
    category: string
    shortDescription?: string
}

const ArticleListItem = ({
    id,
    image,
    title,
    shortDescription,
    description,
    category,
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
                    <h2
                        className="article-title"
                        style={{ textAlign: 'center', alignContent: 'center' }}
                    >
                        <Link to={`/${id}`}>{title}</Link>
                    </h2>
                    <div className="article-description">
                        {shortDescription} ...
                    </div>
                    <div
                        className="article-category"
                        style={{
                            backgroundColor: '#bbdefb',
                        }}
                    >
                        {category}
                    </div>
                    <div className="article-date">{date}</div>
                    <div className="article-like">{like}</div>
                </CardContent>
            </Card>
        </>
    )
}

export default ArticleListItem

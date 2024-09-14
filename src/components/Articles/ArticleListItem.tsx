import { Button, Card, CardContent } from '@mui/material'
import './ArticleListItem.css'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addLike, removeLike } from '../../store/likeSlice'
import liked from '../../assets/like-enabled.png'
import like from '../../assets/like-disabled.png'

type Props = {
    id: number
    image: string
    title: string
    description?: string
    date: string
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
}: Props) => {
    const isLiked = useAppSelector((state) => state.articlesLikeState[id])
    const dispatch = useAppDispatch()

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
                    <div className="category-like">
                        <div
                            className="article-category"
                            style={{
                                backgroundColor: '#bbdefb',
                            }}
                        >
                            {category}
                        </div>
                        <Button
                            className="article-like"
                            onClick={() => {
                                isLiked
                                    ? dispatch(removeLike(id))
                                    : dispatch(addLike(id))
                            }}
                            style={{ width: '27px', height: '27px' }}
                        >
                            {isLiked ? (
                                <img
                                    src={liked}
                                    style={{ width: '27px', height: '27px' }}
                                />
                            ) : (
                                <img
                                    src={like}
                                    style={{ width: '27px', height: '27px' }}
                                />
                            )}
                        </Button>
                    </div>
                    <div className="article-date">{date}</div>
                </CardContent>
            </Card>
        </>
    )
}

export default ArticleListItem

import { useParams } from 'react-router'
import {
    Article,
    articlesArray,
    getArticlesObject,
} from '../../utils/articlesArray'

type Props = {}

type ArticlesObject = {
    [id: number]: Article
}

const ArticlePage = (props: Props) => {
    const articlesObject: ArticlesObject = getArticlesObject(articlesArray)

    const { id } = useParams()

    return (
        <>
            <div>{articlesObject[parseInt(id!)].title}</div>
        </>
    )
}

export default ArticlePage

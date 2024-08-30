import { NavLink } from 'react-router-dom'
import './MenuItem.css'
import {
    articlesArray,
    getArticlesObject,
    Article,
} from '../../utils/articlesArray'

type Props = {
    children: React.ReactNode
    to: string
    category?: string
    // chosenArticles?: (array: Array<string>, category: string) => void

    articlesArray?: {
        [category: string]: string
    }
    articlesObject?: {
        [category: string]: Article
    }
}

const MenuItem = ({ to, children }: Props) => {
    return <NavLink to={to}>{children}</NavLink>
}

export default MenuItem

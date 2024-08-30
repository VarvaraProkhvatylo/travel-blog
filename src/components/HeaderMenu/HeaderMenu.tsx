import Button from '@mui/material/Button'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Container } from '@mui/material'
import './HeaderMenu.css'
import { NavLink } from 'react-router-dom'
import MenuItem from './MenuItem'
import {
    articlesArray,
    getArticlesObject,
    Article,
} from '../../utils/articlesArray'

type Props = {
    tag?: string
    // category?: string
    categories?: Array<string>
    article?: Array<string>

    articlesArray?: {
        [category: string]: string
    }
    articlesObject?: {
        [category: string]: Article
    }

    filteredArticles?: any
}
const Tags = [{ tag: 'tip' }, { tag: 'airport' }, { tag: 'food' }]

// const categories = ['bucket-list', 'food', 'tips']

// const bucket = categories.filter(function (category) {
//     return category.match('bucket-list')
// })
// const tips = articlesArray.filter(function (articlesArray.category) {
//     return articlesArray.category.match('tips')
// })
// console.log(tips)
// const food = categories.filter(function (category) {
//     return category.match('food')
// })

/// ВИВЕСТИ ВСІ СТАТТІ
const articlesObject = getArticlesObject(articlesArray)

console.log(articlesObject)

/// THIS IS WORKING!!!!!
const filteredArticlesBucket = articlesArray.filter(
    (article) => article.category.indexOf('bucket-list') !== -1
)

console.log(filteredArticlesBucket)

const Menu = ({}: Props) => {
    return (
        <>
            <Container className="navigation-menu">
                <Button color="inherit" className="menu-item">
                    <MenuItem to="/bucket-list">Bucket List</MenuItem>
                </Button>
                <Button color="inherit" className="menu-item">
                    <MenuItem to="/travel-tips">Travel Tips</MenuItem>
                </Button>
                <Button color="inherit" className="menu-item">
                    <MenuItem to="/food">Food</MenuItem>
                </Button>
                <Button color="inherit" className="menu-item">
                    <MenuItem to="/contacts">Contacts</MenuItem>
                </Button>
                <Autocomplete
                    className="search"
                    multiple
                    id="tags-outlined"
                    options={Tags}
                    getOptionLabel={(option) => option.tag}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField {...params} label="" placeholder="Search" />
                    )}
                />
            </Container>
        </>
    )
}

export default Menu

// import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Container } from '@mui/material'
import './HeaderMenu.css'
import { NavLink } from 'react-router-dom'
import MenuItem from './MenuItem'
import { articlesArray } from '../../utils/articlesArray'

type Props = {
    tag?: string
    category?: string
    categories?: Array<string>
}
const Tags = [{ tag: 'tip' }, { tag: 'airport' }, { tag: 'food' }]

const categories = ['bucket-list', 'food', 'tips']

const bucket = categories.filter(function (category) {
    return category.match('bucket-list')
})
const tips = categories.filter(function (category) {
    return category.match('tips')
})
const food = categories.filter(function (category) {
    return category.match('food')
})

// const category = articlesArray.category

const Menu = (tag: Props) => {
    return (
        <>
            <Container className="navigation-menu">
                <Button color="inherit" className="menu-item">
                    <MenuItem
                        to="/bucket-list"
                        //  category={bucket}
                    >
                        Bucket List
                    </MenuItem>
                </Button>
                <Button color="inherit" className="menu-item">
                    <MenuItem
                        to="/travel-tips"
                        //  category={tips}
                    >
                        Travel Tips
                    </MenuItem>
                </Button>
                <Button color="inherit" className="menu-item">
                    <MenuItem
                        to="/food"
                        // category={food}
                    >
                        Food
                    </MenuItem>
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

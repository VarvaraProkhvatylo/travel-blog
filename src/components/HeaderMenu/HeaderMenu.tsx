import Button from '@mui/material/Button'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Container } from '@mui/material'
import './HeaderMenu.css'
import MenuItem from './MenuItem'

type Props = {
    tag?: string
}
const Tags = [{ tag: 'tip' }, { tag: 'airport' }, { tag: 'food' }]

const Menu = (props: Props) => {
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

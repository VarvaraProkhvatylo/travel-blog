// import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Container } from '@mui/material'
import './HeaderMenu.css'

type Props = {
    tag?: string
}
const Tags = [{ tag: 'tip' }, { tag: 'airport' }, { tag: 'food' }]
const Menu = (tag: Props) => {
    return (
        <>
            <Container className="navigation-menu">
                <Button color="inherit" className="menu-item">
                    Bucket List
                </Button>
                <Button color="inherit" className="menu-item">
                    Travel Tips
                </Button>
                <Button color="inherit" className="menu-item">
                    Food
                </Button>
                <Button color="inherit" className="menu-item">
                    Contacts
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

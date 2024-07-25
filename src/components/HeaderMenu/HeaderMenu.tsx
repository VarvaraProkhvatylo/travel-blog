import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

type Props = {
    tag?: string
}
const Tags = [{ tag: 'tip' }, { tag: 'airport' }, { tag: 'food' }]
const Menu = (tag: Props) => {
    return (
        <>
            <Typography></Typography>
            <Button color="inherit"> Bucket List </Button>
            <Button color="inherit"> Travel Tips </Button>
            <Button color="inherit"> Food </Button>
            <Button color="inherit"> Contacts </Button>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={Tags}
                getOptionLabel={(option) => option.tag}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField {...params} label="" placeholder="Search" />
                )}
            />
        </>
    )
}

export default Menu

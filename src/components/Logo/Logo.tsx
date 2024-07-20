import Typography from '@mui/material/Typography/index'
import logo from '../../assets/adventure-logo-pic.jpg'

type Props = {}
const Logo = (props: Props) => {
    return (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src={logo} alt="" />
            </Typography>
            <Typography>Adventure Begins</Typography>
        </>
    )
}
export default Logo

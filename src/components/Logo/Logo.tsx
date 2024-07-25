import Typography from '@mui/material/Typography'
import logo from '../../assets/logo-mountain.png'
import './Logo.css'

type Props = {}
const Logo = (props: Props) => {
    return (
        <>
            <Typography
                className="logo-img"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
            >
                <img src={logo} alt="" />
                <Typography className="logo-text">Adventure Begins</Typography>
            </Typography>
        </>
    )
}
export default Logo

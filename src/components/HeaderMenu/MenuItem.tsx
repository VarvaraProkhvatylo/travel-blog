import { NavLink } from 'react-router-dom'
import './MenuItem.css'

type Props = {
    children: React.ReactNode
    to: string
    category?: string
}

const MenuItem = ({ to, children }: Props) => {
    return <NavLink to={to}>{children}</NavLink>
}

export default MenuItem

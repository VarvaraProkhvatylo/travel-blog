import { Container, List, ListItem } from '@mui/material'
import instagram from '../assets/logo_instagram.png'
import facebook from '../assets/logo-facebook.png'
import twitter from '../assets/logo-twitter.png'
import './Footer.css'

type Props = {}
const Footer = (props: Props) => {
    return (
        <>
            <Container className="footer">
                <Container className="footer-main-container">
                    <Container className="footer-media">
                        <a href="https://www.instagram.com/feeriamandriv/">
                            <img
                                src={instagram}
                                alt="instagram"
                                className="media-logo"
                            />
                        </a>
                        <a href="https://www.facebook.com/feeria.ua">
                            <img
                                src={facebook}
                                alt="facebook"
                                className="media-logo"
                            />
                        </a>
                        <a href="https://x.com/FMandriv">
                            <img
                                src={twitter}
                                alt="twitter"
                                className="media-logo"
                            />
                        </a>
                    </Container>
                    <Container className="footer-links-container">
                        <List className="footer-links-list">
                            <ListItem className="footer-links-list-item">
                                <a href="">Disclaimer</a>
                            </ListItem>
                            <ListItem className="footer-links-list-item">
                                <a href="">Privacy Policy</a>
                            </ListItem>
                            <ListItem className="footer-links-list-item">
                                <a href="">Terms of Use</a>
                            </ListItem>
                        </List>
                    </Container>
                    <Container className="footer-text">
                        Some of the pages on my travel blog contain affiliate
                        links. Whenever you buy something through one of these
                        links, I get a small commission at no extra cost to you.
                        As an affiliate, I only recommend products and services
                        that I feel are high quality and helpful to my readers.
                        Thanks for your support.
                    </Container>
                </Container>
            </Container>
        </>
    )
}
export default Footer

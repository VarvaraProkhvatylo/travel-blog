import { Container } from '@mui/material'
import './Contacts.css'

type Props = {}

const Contacts = (props: Props) => {
    return (
        <>
            <Container component={'div'} className="main-container">
                <Container className="contact-img">
                    <img src="images/contact.jpg" alt="image-background" />
                    <div className="contact-text">Feel free to reach out!</div>
                </Container>
                <Container className="content-container">
                    <div className="text">
                        <h1>Get In Touch</h1>
                        <h2>Contact Form</h2>
                        <div>
                            <p className="paragraph">
                                Send me your questions, comments, or
                                suggestions!
                            </p>
                            <p className="paragraph">
                                If you'd like to work with me or you have a
                                question or comment, you can contact me using
                                the form below. You can also find more info
                                about me here.
                            </p>
                            <p className="paragraph">
                                Sometimes I'm busy traveling, but I try to
                                respond to any messages!
                            </p>
                        </div>
                    </div>
                    <div className="form"></div>
                </Container>
            </Container>
        </>
    )
}
export default Contacts

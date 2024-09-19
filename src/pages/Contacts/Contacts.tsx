import { Container } from '@mui/material'
import './Contacts.css'
import { useState } from 'react'
import axios from 'axios'

type Props = {}

type Order = {
    name: string
    message: string
}

const Contacts = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        message: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            message: e.target.value,
        }))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    message: orderData.message,
                }
            )
            .then((res) => res.data)
            .then(({ name, message }) => {
                setOrderData({ name, message })
                setIsOrderSend(true)
            })
    }

    const renderForm = () => {
        return (
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        className="input-name"
                        type="text"
                        placeholder="Your name"
                        value={orderData.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        className="input-message"
                        type="text"
                        placeholder="Your message"
                        value={orderData.message}
                        onChange={handleMessage}
                    />
                </div>
                <button className="send-btn" type="submit">
                    Send
                </button>
            </form>
        )
    }
    const renderMessage = () => {
        return (
            <div>
                <p className="paragraph">
                    Dear, {orderData.name} thanks for your message! I will look
                    into it and send you my response as soon as possible. Best
                    wishes, Varvara.
                </p>
                {/* <p>Email: {orderData.message}</p> */}
            </div>
        )
    }

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
                                varvara.prokhvatylo@gmail.com
                            </p>
                            <p className="paragraph">
                                If you'd like to work with me or you have a
                                question or comment, you can contact me using
                                the form below. You can also find more info
                                about me here{' '}
                                <a href="https://feerie.com.ua/ua/about">
                                    Feeriia
                                </a>
                                .
                            </p>
                            <p className="paragraph">
                                Sometimes I'm busy traveling, but I try to
                                respond to any messages!
                            </p>
                        </div>
                    </div>
                    <div className="form">
                        {isOrderSend ? renderMessage() : renderForm()}
                    </div>
                </Container>
            </Container>
        </>
    )
}
export default Contacts

import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    message: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Saoirse',
            message:
                'That is a nice place to spend your leisure time. Definitely recommend it!',
        },
        {
            name: 'Sean Blackwood',
            message:
                'That is the most amazing time I`ve ever spent. The experiance is unforgettable!',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        message: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            message: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.message === '') {
            alert('All fields are required!')
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })

            setNewReview({
                name: '',
                message: '',
            })
        }
    }

    return (
        <>
            <Typography
                variant="h4"
                style={{ marginBottom: '20px', textAlign: 'center' }}
            >
                Reviews
            </Typography>
            <div>
                {reviews.map((item: Review, i: number) => (
                    <Card
                        key={i}
                        variant="outlined"
                        style={{ marginBottom: '20px' }}
                    >
                        <CardContent>
                            <div
                                style={{
                                    height: '30px',
                                    fontSize: '20px',
                                    fontWeight: '400',
                                    marginBottom: '10px',
                                }}
                            >
                                {item.name}
                            </div>
                            <div style={{ fontSize: '17px' }}>
                                {item.message}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form onSubmit={onSend}>
                <h3>Here you can leave your review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="First name, Last name"
                        onChange={handleName}
                        value={newReview.name}
                    />
                </div>
                <br />
                <div>
                    <TextField
                        minRows={3}
                        placeholder="Type your message"
                        style={{ width: '1150px', marginBottom: '20px' }}
                        onChange={handleMessage}
                        value={newReview.message}
                    />
                </div>
                <Button
                    type="submit"
                    variant="outlined"
                    style={{
                        borderColor: 'gray',
                        backgroundColor: 'rgb(193, 115, 14)',
                        color: 'black',
                    }}
                >
                    Send
                </Button>
            </form>
        </>
    )
}
export default Reviews

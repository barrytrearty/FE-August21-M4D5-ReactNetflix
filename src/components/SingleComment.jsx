import { Button, ListGroup } from 'react-bootstrap'

const deleteComment = async (imdbID) => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + imdbID, {
            method: 'DELETE',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFlNGYyYTA2MTBjYjAwMTVkYTJhOGYiLCJpYXQiOjE2MzAwNDMwODMsImV4cCI6MTYzMTI1MjY4M30.TPjoSP3gBlKn79MxSZFiuU6Y6dEKPqMQplirBYINzlk"

            }
        })
        if (response.ok) {
            alert('comment deleted!')
            window.location.reload()
        } else {
            alert('comment NOT deleted!')
        }
    } catch (error) {
        alert('comment NOT deleted!')
        window.location.reload()
    }
}

const SingleComment = ({ comment }) => (
    <ListGroup.Item className='text-center mt-2'>

        <div> {comment.comment}</div>
        <div> Rate: {comment.rate} <span class="fa fa-star text-warning"></span></div>
        <Button variant="danger" className="ml-2 mt-2" onClick={() => deleteComment(comment._id)}><i class="far fa-trash-alt"></i></Button>
    </ListGroup.Item>
)

export default SingleComment
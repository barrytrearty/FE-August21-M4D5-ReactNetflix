import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ commentsToShow }) => (
    <ListGroup style={{ color: 'white' }}>
        {
            commentsToShow.map(comment => (
                <SingleComment comment={comment} key={comment.elementId} />
            ))
        }
    </ListGroup>
)

export default CommentList
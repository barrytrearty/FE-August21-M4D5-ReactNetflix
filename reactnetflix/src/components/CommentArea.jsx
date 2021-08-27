import { Component } from 'react'
// import CommentList from './CommentList'
// import AddComment from './AddComment'
// import Loading from './Loading'
// import Error from './Error'

class CommentArea extends Component {

    state = {
        comments: [],
        isLoading: true,
        isError: false
    }

    componentDidMount = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.imdbID, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFlNGYyYTA2MTBjYjAwMTVkYTJhOGYiLCJpYXQiOjE2MzAwNDMwODMsImV4cCI6MTYzMTI1MjY4M30.TPjoSP3gBlKn79MxSZFiuU6Y6dEKPqMQplirBYINzlk"
                }
            })
            console.log(response)
            if (response.ok) {
                let comments = await response.json()
                this.setState({ comments: comments, isLoading: false, isError: false })
            } else {
                console.log('error')
                this.setState({ isLoading: false, isError: true })
            }
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, isError: true })
        }
    }

    render() {
        return (
            <div>

                Comment Area
                {/* {this.state.isLoading && <Loading />}
                {this.state.isError && <Error />}
                <AddComment imdbID={this.props.imdbID} />
                <CommentList commentsToShow={this.state.comments} /> */}
            </div>
        )
    }
}

export default CommentArea
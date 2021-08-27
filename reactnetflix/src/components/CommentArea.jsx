import { Component } from "react";
// import CommentList from "./CommentList";

class CommentArea extends Component {

    state = {
        comments: []
    }

    componentDidMount = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFlNGYyYTA2MTBjYjAwMTVkYTJhOGYiLCJpYXQiOjE2MzAwNDMwODMsImV4cCI6MTYzMTI1MjY4M30.TPjoSP3gBlKn79MxSZFiuU6Y6dEKPqMQplirBYINzlk"
                }
            })
            let comments = await response.json()
            this.setState({
                comments: comments
            })
            console.log(response)
        } catch (error) {

        }
    }

    render() {
        return (
            <div>
                {/* <CommentList commentsToShow={this.state.comments} /> */}
            </div>)
    }
}

export default CommentArea;
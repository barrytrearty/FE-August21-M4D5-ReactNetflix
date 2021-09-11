import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ imdbID }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + imdbID,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFlNGYyYTA2MTBjYjAwMTVkYTJhOGYiLCJpYXQiOjE2MzAwNDMwODMsImV4cCI6MTYzMTI1MjY4M30.TPjoSP3gBlKn79MxSZFiuU6Y6dEKPqMQplirBYINzlk",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        setIsError(false);
        setIsLoading(false);
        setComments(comments);
        // this.setState({ comments: comments, isLoading: false, isError: false });
        // console.log(comments);
      } else {
        console.log("error");
        setIsError(true);
        setIsLoading(false);
        // this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
      //   this.setState({ isLoading: false, isError: true });
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment imdbID={imdbID} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;

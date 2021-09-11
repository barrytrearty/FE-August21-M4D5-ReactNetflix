import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ imdbID }) => {
  const [comment, setComment] = useState({
    comment: "",
    elementId: imdbID,
    rate: 1,
  });

  useEffect(() => {
    setComment({ ...comment, elementId: imdbID });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imdbID]);

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFlNGYyYTA2MTBjYjAwMTVkYTJhOGYiLCJpYXQiOjE2MzAwNDMwODMsImV4cCI6MTYzMTI1MjY4M30.TPjoSP3gBlKn79MxSZFiuU6Y6dEKPqMQplirBYINzlk",
          },
        }
      );
      if (response.ok) {
        alert("Comment added!");
        // window.location.reload();
      } else {
        console.log("error");
        alert("something went wrong");
        // window.location.reload();
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <Form onSubmit={sendComment} className="text-center">
        <Form.Group>
          <Form.Label>Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add your comment"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;

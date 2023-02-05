import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";

const API = process.env.REACT_APP_API_URL;
function Reviews() {

    const [reviews, setReviews] = useState([]);
    let {id} = useParams(); 

    useEffect(() => {
        axios.get(`bookmarks/${id}/reviews`)
        .then((res) => {
            console.log(res.data)
            setReviews(setReviews)
        })
    }, [id, API])

    const handleAdd = (newReview) => {
        axios.post(`${API}/bookamrks/${id}/reviews`, newReview)
        .then((res) => {
            console.log(res)
            setReviews([res.data, ...reviews])
        }).catch(console.error)
    }
    return (
        <section className="reviews">
            {reviews.map((review) => (
                <Review key={review.id} review={review} />
            ))}
        </section>
    )
}

export default Reviews;
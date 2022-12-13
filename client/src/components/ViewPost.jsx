import { useState, useEffect } from "react"
import Client from '../services/api'
import { useParams } from "react-router-dom"


const ViewPost = (props) => {


const comments = props.post.comments.map((comment) => comment.content)
console.log(comments)
    return(
        <div className="view-post" >
        <h3>
        Post Details
        </h3>
            <h2>{props.post.description}</h2>
            <img src={props.post.image} style={{ width: '20em', border: '2px solid grey' }}/>
            <h4>Comments:</h4>
            <h3>- {comments}</h3>
        </div>
    )
}

export default ViewPost
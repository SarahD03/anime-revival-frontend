const ViewPost = (props) => {
const [allComments, setComments] = ([props.post.comments])

const comments = props.post.comments.map((comment) => comment.content)
console.log('comment state', allComments)
    return(
        <div className="view-post" >
        <h3>
        Post Details
        </h3>
            <h2>{props.post.description}</h2>
            <img src={props.post.image} alt='user post' style={{ width: '20em', border: '2px solid grey' }}/>
            <h4>Comments:</h4>
            <h3>{allComments.map((comment) => (
                <div className="comments">- {comment.content}</div>
            ))}</h3>
            <form onSubmit={props.handleSubmit}>
            <h4>Create Comment</h4>
            <textarea required id='content'value={props.form.content} onChange={props.handleChange}></textarea>
            <button type='submit' className="comment-btn">Comment</button>
            </form>
        </div>
    )
}

export default ViewPost
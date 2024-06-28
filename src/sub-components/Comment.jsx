import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MdDelete } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

export default function Comment() {

    const { _id } = useParams();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3000/articles/${_id}/comment`)
            .then((response) => {
                setComments(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
        , [_id]);

    const submitComment = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/articles/${_id}/comment`, { comment })
            .then(() => {
                setComments([...comments, comment]);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <h2 className="text-2xl font-bold underline mb-4">Comments</h2>
            {comments && comments.map((comment, key) => (
                <div key={key} className="border border-gray-200 p-4 mb-4">
                    <div className="flex items-center justify-between text-base">
                        <FaUserCircle className='size-5' />
                        <span className="flex items-center">
                            {comment}
                        </span>
                        <button className="text-red-500 float-end" onClick={() => {
                            axios.delete(`http://localhost:3000/articles/${_id}/comment`)
                                .then(() => {
                                    setComments(comments.filter((_, index) => index !== key));
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }}><MdDelete className='size-5' /></button>
                    </div>

                </div>
            ))}

            <form className="flex flex-col" onSubmit={submitComment}>
                <label htmlFor="comment" className="text-base font-bold mb-2">Add a comment</label>
                <textarea name="comment" id="comment" className="border bg-amber-50 text-black border-gray-200 p-2 mb-2" onChange={e => setComment(e.target.value)}></textarea>
                <button type="submit" className="bg-blue-500 text-white p-2">Add Comment</button>
            </form>
        </div>
    )
}

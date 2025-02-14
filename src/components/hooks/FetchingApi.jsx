import { useState } from "react";

function FetchingApi() {
    const [post, setPost] = useState([]);
    const [error, setError] = useState(null);

    const fetchPosts = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((res) => {
                console.log(res, "res");
                if (!res.ok) {
                    throw new Error("failed to fetch!!");
                }
                return res.json();
            })
            .then((data) => {
                setPost(data.results);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <>
            <h2>Person Details</h2>
            <button onClick={fetchPosts}>Fetch Person</button>
            {error && <p>{error}</p>}
            {post.map((user, index) => {
                return (
                    <div key={index}>
                        <h1>{user.name.first} {user.name.last}</h1>
                        <p>{user.email}</p>
                        <p>{user.location.city}, {user.location.country}</p>
                    </div>
                );
            })}
        </>
    );
}

export default FetchingApi;
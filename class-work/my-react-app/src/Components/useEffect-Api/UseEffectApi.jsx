
import React, { useEffect, useState } from "react";

function UseEffectApi() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [posts, setPosts] = useState([])



    async function fetchPost() {

        console.log("the function is called after the useEffect");


        try {
            setLoading(true);

            const response = await fetch("https://jsonplaceholder.typicode.com/posts")

            console.log("response :- ", response);


            if(!response.ok) throw new Error("Failed to load posts");

            const jsonData = await response.json()
            setPosts(jsonData)

        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }

    }


    useEffect(() => {

        fetchPost();
    }, [])

    if (error) {
        return (
            <p className="text-red-600">Error: {error}</p>
        )
    }

    if (loading) {
        return (
            <p>The Posts is Loading....</p>
        )
    }

    if (posts.length === 0) {
        return (
            <p>No Posts found...</p>
        )

    }

    return (
        <>
            <div>
                {
                    posts.map((post, index) => (
                        <article key={post.id || index}>
                            <h3 className="text-red-400">{post.title}</h3>
                            <p>{post.body}</p>
                            <hr />
                            <br />

                        </article>
                    ))
                }
            </div>
        </>
    )
}

export default UseEffectApi
import blogFetch from "../axios/config"

import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import './Home.css'

function Home() {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            
            const response = await blogFetch.get("/posts")

            const data = response.data

            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
       <div id="home">
            <h1>Ultimos Posts</h1>
            {posts.length === 0 ? <p>Carregando</p> : (
                posts.map((post) => (
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/Blog_react_api/posts/${post.id}`} >Ler mais</Link>
                    </div>
                ))
            )}
       </div> 
    )
}

export default Home
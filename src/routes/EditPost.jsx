import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import blogFetch from '../axios/config'

import './EditPost.css'

const EditPost = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const getPostId = async () => {
        try {
            
            const response = await blogFetch.get(`/posts/${id}`)
            const data = response.data
            console.log(data)
            setTitle(data.title)
            setBody(data.body)

        } catch (error) {
            console.log(error)
        }
    }

    const editPost = async (e) => {
        e.preventDefault()
        
        const post = {title, body, userId: 1}
    
        await blogFetch.put(`/posts/${id}`, {
          body: post,
        })
        navigate('/')
      }

    useEffect(() => {
        getPostId()
    }, []);
  
  return (
    <div id='edit-post'>
        <h1>Editando Post:</h1>
        <h2>{title}</h2>
        <form onSubmit={(e) => editPost(e)}>
            <div className="form-control">
                <label htmlFor="title">Título:</label>
                <input type="text" name='title' id='title' placeholder='Digite o título' value={title || ""} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="body">Conteúdo:</label>
                <textarea name="body" id="body" placeholder='Digite o conteúdo' value={body || ""} onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <input type="submit" value="Editar Post" className='btn'/>
        </form>
    </div>
  )
}

export default EditPost
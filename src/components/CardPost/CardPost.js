import React from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaPost } from '../../Routes/coordinator'
import { Card } from './styled'

export default function CardPost({ post }) {
  const navigate = useNavigate()
  return (
    <Card onClick={()=>{irParaPost(navigate, post.id)}}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>@{post.username} - {post.commentCount || 0} comentários</p>
    </Card>
  )
}

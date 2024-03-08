import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../features/posts/postSlice"

const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  )
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  console.log(posts);
  
  let content
  if (isLoading) {
    content = <h1>Loding Posts....</h1>
  }
  
  if (!isLoading && isError) {
    content = <h1>{error}</h1>
  }
  if (!isLoading && !isError && !Posts) {
    content = <h1>No Post Data Found!!</h1>
  }
  if (!isLoading && !isError && Posts) {
    content = (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }
  return <div>{content}</div>
}

export default Posts

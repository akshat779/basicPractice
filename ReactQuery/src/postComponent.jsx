
import { useQuery } from '@tanstack/react-query'
function PostComponent() {
  // const [count, setCount] = useState(0)
  const fetchPosts = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  }

  const {data, isLoading, error} = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
    staleTime:5000
  })
  if (isLoading) {
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error: {error.message}</div>
  }
  return (
    <>
      { 
        data.map((post) => (
          // <p>post.title</p>
            <p>{post.title}</p>
        ))
      }
    </>
  )
}

export default PostComponent

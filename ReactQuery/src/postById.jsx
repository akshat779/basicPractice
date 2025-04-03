import { useQuery } from '@tanstack/react-query'
function PostById({id}) {
  // const [count, setCount] = useState(0)
  const fetchPosts = async(id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    console.log(data)
    return data

  }

  const {data, isLoading, error} = useQuery({
    queryKey: ["posts",id],
    queryFn: () => fetchPosts(id),
    // staleTime:5000
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
        data.title  
      }
    </>
  )
}

export default PostById

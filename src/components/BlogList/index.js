import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogslist} = props

  return (
    <ul className="ul">
      {blogslist.map(eachList => (
        <BlogItem key={eachList.id} details={eachList} />
      ))}
    </ul>
  )
}
export default BlogList

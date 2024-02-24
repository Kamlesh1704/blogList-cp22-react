// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details, key} = props
  const {id, title, discription, publishedDate} = details

  return (
    <li className="li">
      <div className="lii">
        <h1 className="heading">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="para">{discription}</p>
    </li>
  )
}
export default BlogItem

import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className="card done">
      <h2 className="section-title">404</h2>
      <p>No page here. <Link to="/">Back to home</Link></p>
    </div>
  )
}

export default NotFoundPage
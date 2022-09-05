import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import axios from 'axios'
import reportWebVitals from './reportWebVitals'

class Reddit extends React.Component {
  state = {
    posts: [],
    error: null,
    loading: false,
  }

  componentDidMount() {
    this.setState((state) => {
      return {
        loading: !state.loading,
      }
    })
    axios
      .get(`https://www.reddit.com/r/${this.props.subreddit}.json`)
      .then((res) => {
        const newPosts = res.data.data.children.map((obj) => obj.data)
        this.setState(() => {
          return {
            posts: newPosts,
          }
        })

        this.setState((state) => {
          return {
            loading: !state.loading,
          }
        })
      })
      .catch((error) => {
        this.setState(() => {
          return {
            error: error.message,
          }
        })
      })
  }

  render() {
    const { posts } = this.state
    if (this.state.error) {
      return <h3>{this.state.error}</h3>
    }
    if (this.state.loading) {
      return <h1>Loading.....</h1>
    }
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Reddit subreddit="reactjs" />
  </React.StrictMode>,
)

reportWebVitals()

// Write your JS code here
import './index.css'

const Home = () => (
  <div className="home-container">
    <div>
      <h1 className="title">Clothes That Get YOU Noticed</h1>
      <p className="description">
        Fashion is part of the daily air/i. This could be because the text is
        broken up by multiple elements. In this case, you can provide a function
        for your text matcher to make your matcher more flexible. So, celebrate
        the seasons new and exciting fashion in your own way.
      </p>
      <div>
        <button type="button" className="btn">
          Shop Now
        </button>
      </div>
    </div>
    <img
      className="home-image"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
      alt="clothes that get you noticed"
    />
  </div>
)
export default Home

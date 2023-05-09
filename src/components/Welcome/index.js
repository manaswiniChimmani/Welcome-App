// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {content: 'Subscribe'}

  click = () => {
    const {content} = this.state

    if (content === 'Subscribe') {
      this.setState({content: 'Subscribed'})
      //   return (content = 'Subscribed')
    } else {
      this.setState({content: 'Subscribe'})
    }
  }

  render() {
    const {content} = this.state

    return (
      <div className="container">
        <h1 className="h1">Welcome</h1>
        <p className="p1">Thank you! Happy Learning</p>
        <button className="btn" type="button" onClick={this.click}>
          {content}
        </button>
      </div>
    )
  }
}
export default Welcome

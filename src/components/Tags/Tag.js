import React, { Component } from 'react'

class Tag extends Component {  
  render() {
    const { tag } = this.props
    return (
      <div className="tag">
        {tag.ruuviId}
        {tag.temperature}
      </div>
    )
  }
}

export default Tag
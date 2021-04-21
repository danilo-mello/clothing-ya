import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


import './menu-item.styles.scss';

class MenuItem extends Component {
  render(){
    const { title, imageUrl, size, className, history, match, linkUrl } = this.props
    return(
      <div onClick={() => history.push(`${match.url}${linkUrl}`)} className={`${size} menu-item ${className}`}>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    )
  }

}

export default withRouter(MenuItem);

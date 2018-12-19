import React, { Component } from 'react'
import './UserCard.css'

class UserCard extends Component {
  render() {
    return (
      <>
      <div className='UserCard'>
      {console.log(this.props.user)}
        <img src={this.props.user.picture.large} height='auto' width='auto' style={{borderRadius: 100}}></img>
        <p>{this.props.user.name.first}</p>
        <p>{this.props.user.name.last}</p>
        <p>{this.props.user.phone}</p>
        <p>{this.props.user.email}</p>
        <p>{this.props.user.cell}</p>
        </div>
      </>
    )
  }
}
export default UserCard;
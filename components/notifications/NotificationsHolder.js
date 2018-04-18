import Title from '../styles/Title'
import Notification from './Notification'
import Text from '../styles/Text'
import { Component } from 'react'

class NotificationsHolder extends Component {
  render () {
    return (
      <div className='pa3-ns mw7 w-100 center pa0 pt3'>
        <Title text='Notifications' />
        {!this.props.notifications.length > 0 && <Text>No notifications!</Text>}
        {this.props.notifications.map((notification, index) => (
          <Notification key={index} deleteButton {...notification} />
        ))}
      </div>
    )
  }
}

export default NotificationsHolder

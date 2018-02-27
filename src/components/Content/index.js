import Clock from '../Clock'
import Greeting from '../Greeting'
import Icon from '../Icon'
import React from 'react'
import User from '../User'
import { defaults } from 'helpers/defaults'

class Content extends React.Component {
  timer = undefined

  constructor() {
    super()
    this.state = this.calculateState()
  }
  calculateState = () => ({
    time: new Date(),
  })
  componentDidMount() {
    this.timer = setInterval(() => this.setState(this.calculateState()), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div
        style={{
          cursor: 'default',
          marginTop: '20vh',
        }}
      >
        <div
          className="heading"
          style={{
            color: 'white',
            textAlign: 'center',
          }}
        >
          <div>
            <Clock time={this.state.time} />
            <div
              style={{
                fontSize: '337.5%',
                letterSpacing: 0,
                whiteSpace: 'nowrap',
                fontWeight: 500,
              }}
            >
              <Greeting time={this.state.time} />, <User />.
            </div>
            <div
              className="links"
              style={{
                marginTop: '10vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: '.7em',
              }}
            >
              {defaults.apps.map((app, index) => (
                <Icon
                  key={index}
                  name={app.name}
                  address={app.address}
                  icon={app.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content

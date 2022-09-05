import React from 'react'

export class House extends React.Component {
  state = {
    rooms: {
      kitchen: true,
      bathroom: false,
      livingRoom: true,
      bedroom: false,
    },
  }

  handleKitchen = () => {
    this.setState((state) => {
      return {
        rooms: {
          kitchen: !state.rooms.kitchen,
          bathroom: state.rooms.bathroom,
          livingRoom: state.rooms.livingRoom,
          bedroom: state.rooms.bedroom,
        },
      }
    })
  }

  handleBathroom = () => {
    this.setState((state) => {
      return {
        rooms: {
          kitchen: state.rooms.kitchen,
          bathroom: !state.rooms.bathroom,
          livingRoom: state.rooms.livingRoom,
          bedroom: state.rooms.bedroom,
        },
      }
    })
  }

  handlelivingRoom = () => {
    this.setState((state) => {
      return {
        rooms: {
          kitchen: state.rooms.kitchen,
          bathroom: state.rooms.bathroom,
          livingRoom: !state.rooms.livingRoom,
          bedroom: state.rooms.bedroom,
        },
      }
    })
  }

  handleBedroom = () => {
    this.setState((state) => {
      return {
        rooms: {
          kitchen: state.rooms.kitchen,
          bathroom: state.rooms.bathroom,
          livingRoom: state.rooms.livingRoom,
          bedroom: !state.rooms.bedroom,
        },
      }
    })
  }

  render() {
    return (
      <>
        <div>
          <span>
            {this.state.rooms.kitchen
              ? 'Kitchen Light On'
              : 'Kitchen Light Off'}
          </span>{' '}
          ||{' '}
          <span>
            {this.state.rooms.bathroom
              ? 'Bathroom Light On'
              : 'Bathroom Light Off'}
          </span>{' '}
          ||{' '}
          <span>
            {this.state.rooms.livingRoom
              ? 'livingRoom Light On'
              : 'livingRoom Light Off'}
          </span>{' '}
          ||{' '}
          <span>
            {this.state.rooms.bedroom
              ? 'Bedroom Light On'
              : 'Bedroom Light Off'}
          </span>
        </div>
        <div>
          <span>
            <button onClick={this.handleKitchen}>Kitchen Switch</button>
          </span>{' '}
          ||{' '}
          <span>
            <button onClick={this.handleBathroom}>Bathroom Switch</button>
          </span>{' '}
          ||{' '}
          <span>
            <button onClick={this.handlelivingRoom}>livingRoom Switch</button>
          </span>{' '}
          ||{' '}
          <span>
            <button onClick={this.handleBedroom}>Bedroom Switch</button>
          </span>
        </div>
      </>
    )
  }
}

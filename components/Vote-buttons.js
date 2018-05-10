import React from 'react'
import '../css/vote-buttons.css'

export default class VoteButtons extends React.Component {
  render () {
    return (
      <div className={'vote-button-group'}>
        <button className={'vote-button'} onClick={() => this.props.handleVote({vote: 'dogs'})}>Vote Dogs</button>

        <button className={'vote-button'} onClick={() => this.props.handleVote({vote: 'cats'})}>Vote Cats</button>

        <button className={'vote-button'} onClick={() => this.props.handleVote({vote: 'hamsters'})}>Vote Hamsters</button>
      </div>
    )
  }
}

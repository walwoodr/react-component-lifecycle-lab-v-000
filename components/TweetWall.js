import React from 'react';
import Tweet from './Tweet';

export default class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.state.tweets = this.props.newTweets;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.newTweets.length > 0)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({tweets: nextProps.newTweets.concat(this.state.tweets)});
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}

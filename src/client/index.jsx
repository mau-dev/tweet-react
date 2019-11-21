import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets.js';
{/*import Tweet from 'tweet.jsx';*/}


class App extends React.Component {
  render() {

    let tweetsArr = this.props.tweetsInput.map(item => {
      return <li>{item.text}</li>
    })

    return (
      <div>
        tweets
        <ul>
            {tweetsArr}
        </ul>
      </div>
    );
  };
};


const element = document.getElementById('app');
{/*const tweedz = Tweets*/}
ReactDOM.render(<App tweetsInput = {tweets} />, element );//


console.log("tweet react");
console.log(tweets);
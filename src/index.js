import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // imports a css file into a JavaScript file.
/* Behind the scenes, when webpack builds our app, it sees this CSS imoprt
    and learns that index.js depends on index.css. Webpack reads the CSS file
    and includes it in the bundled JavaScript (as a string) to be sent to
    the browser. It creates a <style> tag in the HTML <head> section with the
    coordinating CSS rules. */

class Tweet extends React.Component {
    render() {
        return(
            <div className="tweet"> {/* Creates a div w/ classname attribute of 'tweet'. */}
                <Avatar/>
                <div className="content">
                    <Author/><Time/>
                    <Message/>
                    <div className="buttons">
                        <ReplyButton/>
                        <RetweetButton/>
                        <LikeButton/>
                        <MoreOptionsButton/>
                    </div>
                </div>
            </div>
        );
    }
}

class Avatar extends React.Component {
    render() {
        return(
            <img src="https://www.gravatar.com/avatar/nothing"
            className="avatar"
            alt="avatar"/>
        );
    }
}

class Message extends React.Component {
    render() {
        return(
            <div className="message">
                My mom thinks I'm cool.
            </div>
        );
    }
}

class Author extends React.Component {
    render() {
        return(
            <span className="author">
                <span className="name">Sam Puckett</span>
                <span className="handle">@iamsamwhale</span>
            </span>
        );
    }
}

// The functions below work similarly, but are written using ES6 Arrow Syntax.
/* Notice how there's no reutrn in the last couple versions: When an arrow
    function only contains one expression, it can be written without braces.
    And when it's written without braces, the single expression is implicitly
    returned.
*/

const Time = () => (
    <span className="time">3h ago</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet/>, document.getElementById('root'));
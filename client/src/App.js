import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };
  }

  render() {
    
    return (
      <div className="container">
        <main>
            <div className="comments-section mx-5">
                <form action="">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Name" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Leave us a comment"></textarea>
                        </div>
                    </div>
                    <div className="control mb-5">
                        <button className="button">Submit</button>
                    </div>
                </form>
                <div className="card mb-5">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="User profile" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">John Smith</p>
                                <p className="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#profile">@bulmaio</a>.
                            <a href="#home">#css</a> <a href="#home">#responsive</a>
                            <br />
                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    );
  }
}

export default App;
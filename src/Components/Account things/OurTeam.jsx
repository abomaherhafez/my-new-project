import React from "react";
import "./OurTeam.css";
export default function OurTeam() {
  return (
    <div>
      <h2 className="aligncenter">Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              className="image-width"
              src="https://assets.bizjournals.com/static/img/potm/marketing/team-success-img.jpg"
              alt="Jane"
            />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              className="image-width"
              src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Mike"
            />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              className="image-width"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="John"
            />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

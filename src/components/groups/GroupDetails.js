import React from "react";
import GroupPic from "../../images/nature.png";
import { Button, Card, Container, Image } from "react-bootstrap";

const GroupDetails = () => {
  return (
    <>
      <Container>
        <Card>
          <h5
            className="d-flex justify-content-center align-items-center"
            style={{ margin: 2 }}
          >
            Group Name
          </h5>
        </Card>
        {/* <button className="d-flex btn btn-outline-secondary rounded">
          Back
        </button> */}
        <Card>
          <Image
            src={GroupPic}
            alt="group-pic"
            className="d-flex flex-row mx-auto w-100 rounded"
          />
          <button className="btn btn-outline-primary d-flex flex-row mx-auto m-2 rounded">
            Join Group
          </button>
        </Card>
        <Card className="card-privacy">
          <div>Public Group</div>
          <p>Anyone can see what members post</p>
        </Card>
        <Card className="card-privacy">
          <div>Nationwide</div>
          <p>Anyone who is a Neighbourly member can find this group</p>
        </Card>
        <Card className="group-description">
          <h6>About</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Card>

        <Card className="post">
          <div className="post-user">
            <div className="avatar">
              <img src="../img/default.svg" />
            </div>
            <div className="post-subject">
              <h6>Subject</h6>
              <span>
                <a href="#">Member name</a> in <a href="#">Group name</a>
                {/* <time dateTime="20018-02-14 20:00">
                  <br />
                  <abbr title="hour"></abbr>date/time of post
                </time> */}
              </span>
            </div>
          </div>

          <div className="post-content">
            <p>
              Can anyone recommend someone who can do gutter and scotia properly
              without bankrupting me. Numerous sites online but I dont know whom
              to choose.
            </p>
          </div>
          <div className="post-buttons">
            <div className="primary-actions">
              <Button variant="outline-secondary" block>
                Like
              </Button>
              <Button variant="outline-secondary" style={{ margin: 0 }} block>
                Comment
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default GroupDetails;

import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

function Account() {
  const [userdata, setUserdata] = useState({
    firstName: "Mohamed",
    lastName: "Tarek",
    username: "Hareka",
    email: "example@gmail.com",
    password: "somepass",
  });

  const [showInputf, setShowInputf] = useState(false);
  const [showInputl, setShowInputl] = useState(false);
  const [showInputp, setShowInputp] = useState(false);

  const handleEditf = (e) => {
    e.stopPropagation();
    setShowInputf(true);
  };
  const handleEditl = (e) => {
    e.stopPropagation();
    setShowInputl(true);
  };
  const handleEditp = (e) => {
    e.stopPropagation();
    setShowInputp(true);
  };

  const changeFirstName = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      setUserdata({ ...userdata, firstName: e.target.value });

      setShowInputf(false);
    }
  };

  const changeLastName = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      setUserdata({ ...userdata, lastName: e.target.value });

      setShowInputl(false);
    }
  };

  const [currentpass, setCurrentpass] = useState("");
  const [newpass, setNewpass] = useState("");

  const changePassword = () => {
    if (currentpass == userdata.password) {
      setUserdata({ ...userdata, password: newpass });
      alert("Password Changed Successfuly ;)");
      setShowInputp(false);
    } else {
      alert("password is not correct!");
    }
  };

  return (
    <div className="row justify-content-center">
      <h1 className="text-center">User Data</h1>
      <Card className="col-6">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>First Name:</strong> {userdata.firstName}
            <button
              className="btn btn-dark mx-5"
              onClick={(e) => {
                handleEditf(e);
              }}
            >
              Edit
            </button>
            {showInputf && (
              <div className="my-2">
                <input
                  type="text"
                  className="my-2"
                  autoFocus
                  onKeyDown={changeFirstName}
                  onBlur={() => setShowInputf(false)}
                />
              </div>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Last Name:</strong> {userdata.lastName}
            <button
              className="btn btn-dark mx-5"
              onClick={(e) => {
                handleEditl(e);
              }}
            >
              Edit
            </button>
            {showInputl && (
              <div className="my-2">
                <input
                  type="text"
                  className="my-2"
                  autoFocus
                  onKeyDown={changeLastName}
                  onBlur={() => setShowInputl(false)}
                />
              </div>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Username:</strong> {userdata.username}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {userdata.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <button
              className="btn btn-dark"
              onClick={(e) => {
                handleEditp(e);
              }}
            >
              Change Password
            </button>
            {showInputp && (
              <div className="my-2">
                current password:
                <input
                  type="text"
                  className="my-2 mx-1"
                  autoFocus
                  onChange={(e) => {
                    setCurrentpass(e.target.value);
                  }}
                />
                <br />
                new password:
                <input
                  type="text"
                  className="my-2 mx-1"
                  onChange={(e) => {
                    setNewpass(e.target.value);
                  }}
                />
                <div className="row my-2">
                  <span className="col-1"></span>
                  <button
                    className="btn btn-success col-4"
                    onClick={changePassword}
                  >
                    save
                  </button>
                </div>
              </div>
            )}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default Account;

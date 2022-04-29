import "./ChangePassword.scss";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { changePassword } from "./../../api/auth";

const ChangePassword = ({ user, history }) => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const onChangePassword = (event) => {
    event.preventDefault();
    const updatePassword = async () => {
      try {
        const res = await changePassword(user, oldPass, newPass);
        console.log("changepassword response:", res);
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    };

    updatePassword();
  };

  return (
    <div className="form-box">
      <h3 className="form-box__heading">Change Password</h3>
      <form className="form-box__form" onSubmit={onChangePassword}>
        <input
          className="form-box__input"
          value={oldPass}
          placeholder="old password"
          onChange={(e) => setOldPass(e.target.value)}
          label="old password"
          required
        />
        <input
          className="form-box__input"
          value={newPass}
          placeholder="new password"
          onChange={(e) => setNewPass(e.target.value)}
          label="new password"
          required
        />
        <button className="form-box__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default withRouter(ChangePassword);

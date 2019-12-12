import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
const UserItem = ({ data: { login, avatar_url, html_url } }) => {
  // const UserItem=({ login, avatar_url, html_url })=> {
  // ({user:{login, avatar_url, html_url}})//---------深层解构

  //   constructor() {
  //     super();
  //     this.state = {
  //       login: "chenhui",
  //       id: 1,
  //       avatar_url: "https://avatars0.githubusercontent.com/u/28645531?s=40&v=4",
  //       html_url: "https://github.com/mojombo"
  //     };
  //   }
  //   render() {
  // let { login, avatar_url, html_url } = this.props;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`user/${login}`} className="btn btn-dark btn-sm my-1">
          more
        </Link>
      </div>
    </div>
  );
};
// }
UserItem.propTypes = {
  data: PropTypes.object.isRequired
};
export default UserItem;

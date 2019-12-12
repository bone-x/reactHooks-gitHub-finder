import React, { Fragment,useContext } from "react";
import UserItem from "./UserItem";
import PropTypes from 'prop-types'
import Spinner from "../components/layout/Spinner";
import GithubContext from '../context/github/githubContext'
const Users = () => {
    const githubContext = useContext(GithubContext)
  //   render() {
  // let { users } = this.props;
  let {loading,users}=githubContext
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div style={userStyle}>
          {users.map((user, index) => (
            <UserItem data={user} key={user.id} />
            //   <UserItem {...user} key={user.id} />
          ))}
        </div>
      )}
    </Fragment>
  );
};
// }
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};
// Users.propTypes={
//     users:PropTypes.array.isRequired,
//     loading:PropTypes.bool.isRequired
// }
export default Users;

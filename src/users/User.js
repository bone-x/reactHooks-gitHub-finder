import React, { Fragment, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import Repos from "../repos/Repos";
// import PropTypes from "prop-types";
import GithubContext from '../context/github/githubContext'
const User = ({match }) => {
  const githubContext=useContext(GithubContext)
//   const {loading,getUser,user,repos,getUserRepos}=githubContext
  const {loading,getUser,user,getUserRepos}=githubContext
    // const User = ({ , repos, , getUser, getUserRepos,match }) => {
  //   componentWillMount() {
  //     let {match: { params: { login } }} = this.props;
  //     this.props.getUser(login);
  //     this.props.getUserRepos(login)
  //   }
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    console.log("render");
   // eslint-disable-next-line
  },[]);
  let {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;
  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        返回
      </Link>
      是否在职:{""}
      {//第一种--------------
      hireable ? (
        <i className="fa fa-check text-success"></i>
      ) : (
        <i className="fa fa-times-circle text-danger"></i>
      )}
      {/* {
        //第二种----------------
        <i
          className={`fa ${
            hireable ? "fa-check text-success" : "fa-times-circle text-danger"
          }`}
        ></i>
      } */}
      <div className="card grid-2">
        <div className="allcenter">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>所在地:{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>个人简介</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <Fragment>
            <a href={html_url} className="btn dark my-1"></a>
          </Fragment>

          <ul>
            <li>
              {company && (
                <Fragment>
                  <strong>公司:</strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>公司:</strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers:{followers}</div>
        <div className="badge badge-success">Following:{following}</div>
        <div className="badge badge-light">Public Repos:{public_repos}</div>
        <div className="badge badge-dark">Public Gists:{public_gists}</div>
      </div>
      {/* <Repos repos={repos} /> */}
      <Repos  />
    </Fragment>
  );
};

User.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   repos: PropTypes.array.isRequired,
//   user: PropTypes.object.isRequired,
//   getUser: PropTypes.func.isRequired,
//   getUserRepos: PropTypes.func.isRequired
};
export default User;

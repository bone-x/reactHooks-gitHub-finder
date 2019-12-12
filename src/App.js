import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/Navbar";
// import Users from "./users/users";
import User from "./users/User";
import Home from './pages/Home'
import Alert from "./components/layout/Alert";
// import Search from "./users/Search";
import About from "./pages/About";
import NotFound from './pages/NotFound'
// import userApi from "./utils";
import AlertState from "./context/alert/alertState";
import GithubState from "./context/github/githubState";
// let { getSearch } = require("./utils");
const App = () => {
  //   state = {
  //     users: [], //所有用户
  //     loading: false,
  //     alert: null,
  //     user: {}, //我的信息
  //     repos:[]
  //   }
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
  //   const [alert,setAlert ] = useState(null)
//   const [user, setUser] = useState({});
//   const [repos, setRepos] = useState([]);
  //   async componentDidMount() {
  //     // this.setState({ loading: true });
  //     // const { data } = await userApi.getUser();
  //     // this.setState({ users: data, loading: false });
  //   };
//   const searchUsers = async text => {
//     // console.log(text)
//     setLoading(true);
//     const {
//       data: { items }
//     } = await userApi.getSearch({ q: text });
//     setUsers(items);
//     setLoading(false);
//   };
//   const clearUsers = () => {
//     setUsers([]);
//     setLoading(false);
//   };
  //   const showAlert = (msg, type) => {
  //     setAlert({ msg, type })
  //     setTimeout(() => {
  //         setAlert(null);
  //     }, 2000);
  //   };
//   const getUser = async login => {
//     setLoading(true);
//     const { data } = await userApi.myUserinfo({ login });
//     setUser(data);
//     setLoading(false);
//   };
//   const getUserRepos = async login => {
//     setLoading(true);
//     const { data } = await userApi.getUserRepos({ login });
//     setRepos(data);
//     setLoading(false);
//   };
  //   searchUsers (text){
  //     console.log(text)
  //   }
  // let { users, loading, alert ,user,repos} = this.state;
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  component={Home}
                //   render={props => (
                //     <Fragment>
                //       <Search
                //         // searchUsers={searchUsers}
                //         // clearUsers={clearUsers}
                //         // showClear={users.length > 0 ? true : false}
                //       />
                //       <Users />
                //     </Fragment>
                //   )}
                />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  component={User}
                //   render={props => (
                //     <User
                //       {...props}
                //     //   getUser={getUser}
                //     //   user={user}
                //     //   loading={loading}
                //     //   getUserRepos={getUserRepos}
                //     //   repos={repos}
                //     />
                //   )}
                />
                <Route  component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

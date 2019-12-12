import React, { useState,useContext } from "react";
// import PropTypes from "prop-types";
import AlertContext from '../context/alert/alertContext'
import GithubContext from '../context/github/githubContext'
const Search = () => {
  const alertContext = useContext(AlertContext)
  const githubContext=useContext(GithubContext)
  const [text, setText] = useState("");
  const onChange = e => {
    //方式1
    setText(e.target.value);
  };
  //   onChange=(e)=>{
  //     this.setState({text:e.target.value})
  //   }
  const SubmitEvent = e => {
    e.preventDefault();
    // let { text } = this.state;

    if (text === "") {
        alertContext.showAlert("mortherFucker", "light");
    } else {
      //把子类的参数传递到父类
      githubContext.searchUsers(text);
      setText("");
    }
  };
//   const onChange = e => {
//     setText(e.target.value);
//   };

//   let { clearUsers, showClear } = props;
  return (
    <div>
      <form className="form" onSubmit={SubmitEvent}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={onChange} //方式1
          // onChange={this.onChange}
          placeholder="Search user..."
        />
        {/* <input
            type="text"
            name="email"
            value={email}
            // onChange={(e)=>this.onChange(e)}  //方式1
            onChange={this.onChange}
            placeholder="Search user..."
          /> */}
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length>0 && (
        <button className="ntn btn-light btn-block" onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
//   searchUsers: PropTypes.func.isRequired,
//   clearUsers: PropTypes.func.isRequired,
//   showClear: PropTypes.bool.isRequired,
//   setAlert: PropTypes.func.isRequired
};
export default Search;

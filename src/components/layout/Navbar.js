/**
 * 有状态组件: rcc 有状态组件主要用来定义交互逻辑和业务数据
 * 无状态组件: rfc 主要用来定义模板，接收来自父组件props传递过来的数据
 *
 * 有状态组件也可以叫做容器组件，无状态组件也可以叫做展示组件
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};
//设置默认属性
Navbar.defaultProps = {
  title: "GitHub Finder",
  icon: "fa fa-github"
};
//定义属性类型
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
// //设置默认属性
// Navbar.defaultProps={
//     title:'你大爷',
//     icon:'fa fa-github'
// }
//   //定义属性类型
//   Navbar.propTypes={
//     title:PropTypes.string.isRequired,
//     icon:PropTypes.string.isRequired,
// }
export default Navbar;

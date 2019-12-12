import React,{useContext} from 'react'
import RepoItem from './RepoItem'
// import PropTypes from 'prop-types'
import GithubContext from '../context/github/githubContext'
const Repos = () => {
    const githubContext = useContext(GithubContext)
    const {repos}=githubContext
    return repos.map(repo=><RepoItem repo={repo} key={repo.id}/>)
}
// Repos.propTypes={
//     repos:PropTypes.array.isRequired
// }
export default Repos
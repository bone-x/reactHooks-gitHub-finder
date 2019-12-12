import axios from '../utils/http'; // 导入http中创建的axios实例
let githubClientId;
let githubClientSecret;
if(process.env.NODE_ENV!=='production'){

    //使用本环境变量
    githubClientId=process.env.REACT_APP_GITHUB_CLICENT_ID;
    githubClientSecret=process.env.REACT_APP_GITHUB_CLICENT_SECRET;
}else{
    //生产环境
    githubClientId=process.env.GITHUB_CLICENT_ID;
    githubClientSecret=process.env.GITHUB_CLICENT_SECRET;
}

const userApi = {    
    // 获取用户列表   
    getUser() {        
        return axios({
            url: `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
            method: 'get'
        });    
    },    
     getSearch(params) {        
        return axios.get(`https://api.github.com/search/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`, {            
            params: params        
        });    
    },
    myUserinfo({login}){
        return axios.get(`https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);   
    },
    getUserRepos({login}){
        return axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);   
    },
    getTestData(params){
        return axios({
            url: `http://jsonplaceholder.typicode.com/posts`,
            method: 'post',
            params,
        });    
    }
    // // post提交    
    // login (params) {        
    //     return axios.post(`${base.sq}/accesstoken`,params);    
    // }
    // 其他接口…………
}

export default userApi;
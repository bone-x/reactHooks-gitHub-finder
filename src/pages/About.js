// import React,{Fragment} from 'react'

// const About=()=> {
//     return (
//         <Fragment>
//             <h1>About</h1>
//         </Fragment>
//     )
// // }
// export default About
import userApi from "../utils";
import api from '../utils/ajax'
import React, { Component } from 'react'

export default class About extends Component {
    componentWillMount(){
        //测试1
        let data={
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        // userApi.getTestData(data).then(res=>{
        //     alert(res.data.id)
        // })
        //测试2
        console.log(api)
        api.post('http://jsonplaceholder.typicode.com/posts',data).then(res=>{
            alert(res.data.id)
        })
    }
    render() {
        return (
            <div>
                <h1>About</h1>
            </div>
        )
    }
}

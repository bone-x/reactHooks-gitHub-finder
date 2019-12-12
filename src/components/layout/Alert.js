import React,{useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'
const Alert = () => {
    const alertContext=useContext(AlertContext)

    console.log('----')
    console.log(alertContext)
    console.log('----')
    const {alert}=alertContext
    return (
        
            alert!==null&&(
                <div className={`alert alert-${alert.type}`}>
                    <i className='fa fa-info-circle'></i>
                    {alert.msg}
                </div>
            )
       
    )
}
export default Alert
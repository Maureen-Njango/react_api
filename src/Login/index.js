import './index.css';
import { useState } from 'react';
import { login } from './utils';



const Login = () =>{
    const [userName, setUsername] = useState('');
    const [ passsword, setpassword] = useState('');
    console.log({userName})
    const handleLogin = async(e) => {
        e.preventDefault();
        console.log("are we here ");
        const result = await login ({userName:userName, passsword });
        console.log({result})


    }
    return(
        <form onSubmit={handleLogin}>
            <h2>login</h2>
            <inputpl aceholder = "Enter first name" type = "text"
            onChange = {(e) => setUsername(e.target.value)} />
            
            <br/>
            <input placeholder= "Enter Password" type = "passsword"
            onChange ={(e) => setpassword(e.target.value)}/>
            
            <br/>
            <button type='text'>login</button>
            
        </form>
    )

}
export default Login;
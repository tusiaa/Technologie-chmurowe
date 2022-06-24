import axios from 'axios'
import {useState} from 'react'

function LoginRegisterForm({setMainLogin, setLogin2}){
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const url = process.env.BACKEND_URL || 'http://localhost:3001';

    function onChangeLogin(event){
        setLogin(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    function logIn (){
        axios.get(`${url}/api/login/${login}`)
        .then(async(response)=>{
            if (String(response.data) === password){
                setMainLogin(login)
                setLogin2(false)
            } else {
                setError("Niepoprawne hasło")
            }
        }, (e)=>{
            console.log(e)
        });
    }

    function register (){
        axios.get(`${url}/api/login/${login}`)
        .then(async(response)=>{
            if (response.data !== ""){
                setError('Użytkownik o takiej nazwie już istnieje')
            } else {
                axios.post(`${url}/api/login`, {
                    key: login,
                    value: password
                })
                .then(async(response)=>{
                    setMainLogin(login)
                    setLogin2(false)
                }, (e)=>{
                    console.log(e)
                }
                );
            }
        }, (e)=>{
            console.log(e)
        });
    }

    return(
        <div className="container">
            <form>
                <div className='AddEditForm'>
                    <label> Login: </label>
                    <input type="text" id="login" onChange={onChangeLogin}></input>
                </div><div className='AddEditForm'>
                    <label> Hasło: </label>
                    <input type="password" id="password" onChange={onChangePassword}></input>
                </div>
            </form> 

            {error && <div className='AddEditForm'>{error}</div>}

            <div className='AddEditForm'>
                <button className='btn btn-block' onClick={ logIn }> Login </button>
            </div>

            <div className='AddEditForm'>
                <button className='btn btn-block' onClick={ register }> Register </button>
            </div>

        </div>
    )
}

export default LoginRegisterForm;
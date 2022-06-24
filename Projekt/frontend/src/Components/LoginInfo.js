import {useState} from 'react'
import axios from 'axios'

const LoginInfo = ({Login, setMainLogin, setLogin}) => {
    const [Edit, setEdit] = useState(false)
    const [Delete, setDelete] = useState(false)
    const [Password, setPassword] = useState('')
    const [NewPassword, setNewPassword] = useState('')
    const [error, setError] = useState('')
    const url = process.env.BACKEND_URL || 'http://localhost:3001';

    function onChangePassword(event){ 
        setPassword(event.target.value)
    }

    function onChangeNewPassword(event){
        setNewPassword(event.target.value)
    }

    function edit(){
        setEdit(!Edit)
        setDelete(false)
        setError('')
    }

    function Delete2(){
        setDelete(!Delete)
        setEdit(false)
        setError('')
    }

    function save(){
        axios.get(`${url}/api/login/${Login}`)
        .then(async(response)=>{
            console.log(response)
            if (String(response.data) === Password){
                axios.put(`${url}/api/login/${Login}`, {
                    value: NewPassword
                })
                .then(async(response)=>{
                    setEdit(false)
                    setError('')
                }, (e)=>{
                    console.log(e)
                });
            } else {
                setError("Niepoprawne hasło")
            }
        }, (e)=>{
            console.log(e)
        });
    }

    function deleteAccount(){
        axios.get(`${url}/api/login/${Login}`)
        .then(async(response)=>{
            console.log(response)
            if (String(response.data) === Password){
                axios.delete(`${url}/api/login/${Login}`)
                .then(async(response)=>{
                    setMainLogin('')
                    setLogin(false)
                    setError('')
                }, (e)=>{
                    console.log(e)
                });
            } else {
                setError("Niepoprawne hasło")
            }
        }, (e)=>{
            console.log(e)
        });
    }


    return (
        <div className='container' style={{textAlign: 'center'}} >
            <h2 className='AddEditForm'>Zalogowano jako: {Login}</h2>
            {Edit && <form>
                <div className='AddEditForm'>
                    <label> Stare hasło: </label>
                    <input type="password" id="password" onChange={onChangePassword}></input>
                </div><div className='AddEditForm'>
                    <label> Nowe hasło: </label>
                    <input type="password" id="password2" onChange={onChangeNewPassword}></input>
                </div>
                {error && <div className='AddEditForm'>{error}</div>}
                <button type='button' className='btn' onClick={ save }> Zapisz </button>
            </form> }
            {Delete && <form>
                <div className='AddEditForm'>
                    <label> Hasło: </label>
                    <input type="password" id="password" onChange={onChangePassword}></input>
                </div>
                {error && <div className='AddEditForm'>{error}</div>}
                <button type='button' className='btn' onClick={ deleteAccount }> Usuń </button>
            </form> }
            <button className='btn' onClick={edit}>Edytuj hasło</button>
            <button className='btn' onClick={Delete2}>Usuń konto</button>
        </div>
    )
}

export default LoginInfo;

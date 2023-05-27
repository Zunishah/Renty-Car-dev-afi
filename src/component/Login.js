import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";
import axios from 'axios';

const Login = () => {
    // const url="https://b030-39-55-240-130.ngrok-free.app/api/v1/login"
    const [signup, setSignup] = useState(false) 
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        const newdata={...input}
        newdata[e.target.name]= e.target.value
        setInput(newdata)
        console.log(newdata);
        // setInput((prevState) => ({
            //     ...prevState,
            //     [e.target.name]: e.target.value
        //     // console.log(input);
        // }))
    }
    console.log(signup);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            // url: 'https://4cd6-39-55-240-130.ngrok-free.app/api/v1/auth/login',
            data: {
                email: input.email,
                password: input.password,
                fingerprint: 'something'
            },
            // headers: {
            //     'Access-Control-Allow-Origin': '*',
            //     'Content-Type': 'application/json',
            // }
        }).then((ss) => {
            console.log(ss)
        }).catch(() => {

        })
        // axios.post(url,{
        //   email:input.email,
        //   password:input.password
        // })
        // .then(res=>{
        //     console.log(res);
        // })
        // console.log(input);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    // border={1}
                    display={"flex"}
                    flexDirection={"column"}
                    maxWidth={400}
                    // alignItems={'center'} 
                    justifyContent={"center"}
                    margin={'auto'}
                    marginTop={1}
                    padding={3}
                    borderRadius={5}
                // boxShadow={'5px 5px 10px #ccc'}
                // sx={{":hover":{
                //     boxShadow:'10px 10px 20px #ccc',
                // }}}


                >
                    <Typography variant='h4' padding={3} textAlign={'center'}>{signup ? 'Signup' : 'Login '}</Typography>
                    {signup && (

                        <TextField
                            onChange={handleChange}
                            value={input.name}
                            name="name"
                            margin='normal'
                            type={'text'}
                            variant='outlined'
                            label="Name*"
                        />
                    )}
                    <TextField
                        onChange={handleChange}
                        value={input.email}
                        name="email"
                        margin='normal'
                        type={'text'}
                        variant='outlined'
                        label="Email*"
                    />
                    <TextField
                        onChange={handleChange}
                        value={input.password}
                        name="password"
                        margin='normal'
                        // type={'text'}
                        variant='outlined'
                        label='Password*'
                        type="password"
                    />
                    <FormGroup> 
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                    </FormGroup>



                    <Button type='submit' variant='contained' sx={{ marginTop: 3 }}>{signup ? 'Signup' : 'Login'}</Button>
                    <Box
                        // border={1}
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={'space-between'}
                        maxWidth={400}
                        marginTop={3}
                    >

                        {signup && (
                            <Button  >Forgot password?</Button>

                        )}
                        <Button
                            onClick={() => setSignup(!signup)}
                        >Change to {signup ? 'Login' : 'Signup'}</Button>

                    </Box>
                    {/* {signup && (
                <Button sx={{marginTop:3}} >Forgot password?</Button>

            )}
            <Button
             onClick={()=>setSignup(!signup)}
             >Change to {signup ? 'Login' : 'Signup'}</Button> */}
                </Box>
            </form>
        </div>
    )
}

export default Login
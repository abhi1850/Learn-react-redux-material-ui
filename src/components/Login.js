import { Avatar, Grid,  Paper, TextField, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const paperstyle = { padding: 20, height: 'auto', width: '50vh', margin: "40px auto" };
    const AvatarStyle = { color: "Red" };
    const ButtonStyle = { margin: 20 };

    const handleLogin = () => {
        if (username && password) {
            console.log("Login successful!");
            // Redirect to the home page after successful login
            window.location.href = "/Cricket";
        } else {
            alert("Please fill in all the fields to log in.");
        }
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                <Grid align="center">
                    <Avatar style={AvatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Grid align="center">
                    <TextField
                        label="Username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Grid>

                <Grid align="center" style={ButtonStyle}>
                    <Button variant="contained" color="primary" onClick={handleLogin}>
                        Login
                    </Button>
                    <Typography>
                        <Link to = "/signup">
                            Don't have an account? Sign up
                        </Link>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login;
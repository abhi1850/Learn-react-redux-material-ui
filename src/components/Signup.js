import { Avatar, Grid, Paper, TextField, Typography, FormControlLabel, Radio, RadioGroup, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Checkbox } from '@mui/joy';
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);

    const paperstyle = { padding: 20, height: 'auto', width: '50vh', margin: "40px auto" };
    const AvatarStyle = { color: "Red" };
    const ButtonStyle = { margin : 20 };

    const handleSignUp = () => {
        if (name && email && password && confirmPassword && gender && termsChecked) {
            if (!email.endsWith('@gmail.com')) {
                alert("Please enter a valid Gmail address.");
                return;
            }
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }
            window.location.href = "/Cricket";
            console.log("Sign-up successful!");
        } else {
            alert("Please fill in all the fields and accept the terms to sign up.");
        }
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                <Grid align = "center">
                    <Avatar style={AvatarStyle}></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <Grid align="center">
                    <TextField
                        label="Name"
                        placeholder="User Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Email"
                        placeholder="xyz@gmail.com"
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        placeholder="********"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <TextField
                        label="Confirm Password"
                        placeholder="********"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <RadioGroup
                        aria-label="gender"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                    </RadioGroup>
                </Grid>

                <Grid align="center">
                    <Checkbox
                        label="I agree to the terms and conditions"
                        checked={termsChecked}
                        onChange={(e) => setTermsChecked(e.target.checked)}
                        required
                    />
                </Grid>
                <Grid align="center" style={ButtonStyle}>
                    <Button variant="contained" color="primary" onClick={handleSignUp}>
                        Sign Up
                    </Button>
                    <Typography>
                        <Link to = "/">
                            Already have an account? Sign in
                        </Link>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default SignUp;
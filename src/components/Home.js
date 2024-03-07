// 

import { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, FormControlLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import { Stack } from '@mui/joy';

const Home = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        gender: 'Male',
        age: '',
        email: '',
        phone: '',
        address: ''
    });

    const columns = [
        { id: 'id', name: 'Id' },
        { id: 'name', name: 'Name' },
        { id: 'gender', name: 'Gender' },
        { id: 'age', name: 'Age' },
        { id: 'email', name: 'Email' },
        { id: 'phone', name: 'Phone' },
        { id: 'address', name: 'Address' },
        { id: 'action', name: 'Action' }
    ];

    const openPopup = () => {
        setOpen(true);
    }

    const closePopup = () => {
        setOpen(false);
    }

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Email validation
        if (!formData.email.endsWith('@gmail.com')) {
            alert("Please enter a valid Gmail address.");
            return;
        }
        // Phone number validation
        if (!/^\d{10}$/.test(formData.phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }
        const newData = { ...formData, id: data.length + 1 };
        setData([...data, newData]);
        setFormData({
            id: 0,
            name: '',
            gender: 'Male',
            age: '',
            email: '',
            phone: '',
            address: ''
        });
        setOpen(false);
    }
    
    const paperstyle = { padding: 20, height: 'auto', width: '180vh', margin: "20px auto" };

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = "/Cricket";
    }

    const logoutStyling = {
        position : 'fixed',
        right : '50px',
        top : '50px'

    }

    return (
        <div>
            <Paper elevation={10} style = {paperstyle}>
                <div style = {logoutStyling} >
                    <Button variant="contained" onClick={logout}>Logout</Button>
                </div>
                <div style={{ margin: '2%', padding : 10 }}>
                    <Button variant="contained" onClick={openPopup}>Add New (+)</Button>
                </div>
                <div style={{ margin: '2%' }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow style={{ backgroundColor: "Maroon" }}>
                                    {columns.map((column) =>
                                        <TableCell key={column.id} style={{ color: "white" }}>{column.name}</TableCell>
                                    )}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {data.map((row) => (
                                    <TableRow key={row.id}>
                                        {columns.map((column) => (
                                            <TableCell key={column.id}>{row[column.id]}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                
            </Paper>

            <Dialog open={open} onClose={closePopup} maxWidth="sm">
                <DialogTitle>
                    <span>Add Bio</span>
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleFormSubmit}>
                        <Stack spacing={2} margin={2}>
                            <TextField required variant='outlined' name="name" value={formData.name} onChange={handleFormChange} label="Name" placeholder='Name' />
                            <TextField required variant='outlined' name="age" value={formData.age} onChange={handleFormChange} label="Age" placeholder='Age' />
                            <RadioGroup name="gender" value={formData.gender} onChange={handleFormChange}>
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            </RadioGroup>
                            <TextField required variant='outlined' name="email" value={formData.email} onChange={handleFormChange} label="Email" placeholder='Email' />
                            <TextField required variant='outlined' name="phone" value={formData.phone} onChange={handleFormChange} label="Phone" placeholder='Phone' />
                            <TextField required multiline maxRows={3} variant='outlined' name="address" value={formData.address} onChange={handleFormChange} label="Address" placeholder='Address' />
                            <Button variant="contained" type="submit">SUBMIT</Button>
                        </Stack>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Home;

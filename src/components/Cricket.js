import { useState } from 'react';
import { Button, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, Drawer, FormControlLabel, List, ListItem, ListItemIcon, ListItemText, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import { Stack } from '@mui/joy';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from '@mui/icons-material/Public';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from'./123.png';

const Cricket = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Virat Kohli', age: 33, internationalTeam: 'India', iplTeam: 'RCB', maritalStatus: 'Married', hundreds: 80, fifties: 139 },
        { id: 2, name: 'Steve Smith', age: 32, internationalTeam: 'Australia', iplTeam: 'RR', maritalStatus: 'Married', hundreds: 30, fifties: 50 },
        { id: 3, name: 'Kane Williamson', age: 31, internationalTeam: 'New Zealand', iplTeam: 'SRH', maritalStatus: 'Single', hundreds: 20, fifties: 40 },
    ]);
    const [open, setOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        age: '',
        internationalTeam: '',
        iplTeam: '',
        maritalStatus: 'Single',
        hundreds: '',
        fifties: ''
    });

    const columns = [
        { id: 'id', name: 'Id' },
        { id: 'name', name: 'Name' },
        { id: 'age', name: 'Age' },
        { id: 'internationalTeam', name: 'International Team' },
        { id: 'iplTeam', name: 'IPL Team' },
        { id: 'maritalStatus', name: 'Marital Status' },
        { id: 'hundreds', name: '100s' },
        { id: 'fifties', name: '50s' },
        { id: 'action', name: 'Action' }
    ];

    const openPopup = () => {
        setOpen(true);
    }

    const closePopup = () => {
        setOpen(false);
    }

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });//appending (...) 
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newData = { ...formData, id: data.length + 1 };
        setData([...data, newData]);
        setFormData({
            id: 0,
            name: '',
            age: '',
            internationalTeam: '',
            iplTeam: '',
            maritalStatus: 'Single',
            hundreds: '',
            fifties: ''
        });
        setOpen(false);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = "/";
    }

    const paperstyle = { padding: 20, height: 'auto', width: '180vh', margin: "20px auto" };

    return (
        <div>
            <Drawer
                anchor="left"
                open={sidebarOpen}
                onClose={closeSidebar}
            >
                <List>
                    <ListItem button onClick={openPopup}>
                        <ListItemIcon>
                            <AddCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Criceter" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button component="a" href="https://www.bcci.tv/">
                        <ListItemIcon>
                            <PublicIcon />
                        </ListItemIcon>
                        <ListItemText primary="BCCI Official Website" />
                    </ListItem>
                    <ListItem button onClick={handleLogout}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Drawer>

            <Paper elevation={10} style={paperstyle}>
                <div>
                    <center>
                    {/* <CardContent>
                        <CardMedia
                        align = "center"
                        component="img"
                        alt="cricket"
                        image={logo} 
                        style={{ height: '100px', width: '100px'}}/>
                    </CardContent> */}
                    <img src = "C:/Users/abhishek/Downloads/my-login/src/components/123.png"></img>
                    </center>
                </div>
                <center><h4>My Favourite Criceter's</h4></center>
                <div style={{ margin: '2%', padding: 10 }}>
                    <Button variant="contained" onClick={openSidebar}>Menu</Button>
                    
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
                    <span>Add Cricketer</span>
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleFormSubmit}>
                        <Stack spacing={2} margin={2}>
                            <TextField required variant='outlined' name="name" value={formData.name} onChange={handleFormChange} label="Name" placeholder='Name' />
                            <TextField required variant='outlined' name="age" value={formData.age} onChange={handleFormChange} label="Age" placeholder='Age' />
                            <TextField required variant='outlined' name="internationalTeam" value={formData.internationalTeam} onChange={handleFormChange} label="International Team" placeholder='International Team' />
                            <TextField required variant='outlined' name="iplTeam" value={formData.iplTeam} onChange={handleFormChange} label="IPL Team" placeholder='IPL Team' />
                            <RadioGroup name="maritalStatus" value={formData.maritalStatus} onChange={handleFormChange}>
                                <FormControlLabel value="Single" control={<Radio />} label="Single" />
                                <FormControlLabel value="Married" control={<Radio />} label="Married" />
                                <FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
                            </RadioGroup>
                            <TextField required variant='outlined' name="hundreds" value={formData.hundreds} onChange={handleFormChange} label="100s" placeholder='100s' />
                            <TextField required variant='outlined' name="fifties" value={formData.fifties} onChange={handleFormChange} label="50s" placeholder='50s' />
                            <Button variant="contained" type="submit">SUBMIT</Button>
                        </Stack>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Cricket;



// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { Button, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, Drawer, FormControlLabel, List, ListItem, ListItemIcon, ListItemText, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import InfoIcon from '@mui/icons-material/Info';
// import PublicIcon from '@mui/icons-material/Public';
// import LogoutIcon from '@mui/icons-material/Logout';
// import logo from './123.png';
// import { fetchCricketers, addCricketer, editCricketer, deleteCricketer } from '../actions/cricketActions';

// const Cricket = ({ cricketers, fetchCricketers, addCricketer, editCricketer, deleteCricketer }) => {
//     const [open, setOpen] = useState(false);
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         age: '',
//         internationalTeam: '',
//         iplTeam: '',
//         maritalStatus: 'Single',
//         hundreds: '',
//         fifties: ''
//     });
//     const [editMode, setEditMode] = useState(false);
//     const [editId, setEditId] = useState(null);

//     useEffect(() => {
//         fetchCricketers();
//     }, [fetchCricketers]);

//     const columns = [
//         { id: 'id', name: 'Id' },
//         { id: 'name', name: 'Name' },
//         { id: 'age', name: 'Age' },
//         { id: 'internationalTeam', name: 'International Team' },
//         { id: 'iplTeam', name: 'IPL Team' },
//         { id: 'maritalStatus', name: 'Marital Status' },
//         { id: 'hundreds', name: '100s' },
//         { id: 'fifties', name: '50s' },
//         { id: 'action', name: 'Action' }
//     ];

//     const handleEdit = (cricketer) => {
//         setFormData({ ...cricketer });
//         setEditMode(true);
//         setEditId(cricketer.id);
//         setOpen(true);
//     };

//     const handleDelete = (id) => {
//         deleteCricketer(id);
//     };

//     const openPopup = () => {
//         setEditMode(false);
//         setOpen(true);
//     };

//     const closePopup = () => {
//         setOpen(false);
//         setFormData({
//             name: '',
//             age: '',
//             internationalTeam: '',
//             iplTeam: '',
//             maritalStatus: 'Single',
//             hundreds: '',
//             fifties: ''
//         });
//     };

//     const handleFormChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         if (editMode) {
//             editCricketer(editId, formData);
//         } else {
//             addCricketer(formData);
//         }
//         closePopup();
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         window.location.href = '/';
//     };

//     const paperstyle = { padding: 20, height: 'auto', width: '180vh', margin: '20px auto' };

//     return (
//         <div>
//             <Drawer anchor="left" open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
//                 <List>
//                     <ListItem button onClick={openPopup}>
//                         <ListItemIcon>
//                             <AddCircleOutlineIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Add Cricketer" />
//                     </ListItem>
//                     <ListItem button>
//                         <ListItemIcon>
//                             <InfoIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="About" />
//                     </ListItem>
//                     <ListItem button component="a" href="https://www.bcci.tv/">
//                         <ListItemIcon>
//                             <PublicIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="BCCI Official Website" />
//                     </ListItem>
//                     <ListItem button onClick={handleLogout}>
//                         <ListItemIcon>
//                             <LogoutIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Logout" />
//                     </ListItem>
//                 </List>
//             </Drawer>

//             <Paper elevation={10} style={paperstyle}>
//                 <div>
//                     <center>
//                         <CardContent>
//                             <CardMedia
//                                 align="center"
//                                 component="img"
//                                 alt="cricket"
//                                 image={logo}
//                                 style={{ height: '100px', width: '100px' }}
//                             />
//                         </CardContent>
//                     </center>
//                 </div>
//                 <center>
//                     <h4>My Favourite Cricketers</h4>
//                 </center>
//                 <div style={{ margin: '2%', padding: 10 }}>
//                     <Button variant="contained" onClick={() => setSidebarOpen(true)}>
//                         Menu
//                     </Button>
//                 </div>
//                 <div style={{ margin: '2%' }}>
//                     <TableContainer>
//                         <Table>
//                             <TableHead>
//                                 <TableRow style={{ backgroundColor: 'Maroon' }}>
//                                     {columns.map((column) => (
//                                         <TableCell key={column.id} style={{ color: 'white' }}>
//                                             {column.name}
//                                         </TableCell>
//                                     ))}
//                                 </TableRow>
//                             </TableHead>

//                             <TableBody>
//                                 {cricketers.map((row) => (
//                                     <TableRow key={row.id}>
//                                         {columns.map((column) => (
//                                             <TableCell key={column.id}>
//                                                 {column.id !== 'action' ? (
//                                                     row[column.id]
//                                                 ) : (
//                                                     <div>
//                                                         <Button
//                                                             variant="outlined"
//                                                             color="primary"
//                                                             size="small"
//                                                             onClick={() => handleEdit(row)}
//                                                         >
//                                                             Edit
//                                                         </Button>
//                                                         <Button
//                                                             variant="outlined"
//                                                             color="secondary"
//                                                             size="small"
//                                                             onClick={() => handleDelete(row.id)}
//                                                             style={{ marginLeft: '5px' }}
//                                                         >
//                                                             Delete
//                                                         </Button>
//                                                     </div>
//                                                 )}
//                                             </TableCell>
//                                         ))}
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </div>
//             </Paper>

//             <Dialog open={open} onClose={closePopup} maxWidth="sm">
//                 <DialogTitle>
//                     <span>{editMode ? 'Edit Cricketer' : 'Add Cricketer'}</span>
//                 </DialogTitle>
//                 <DialogContent>
//                     <form onSubmit={handleFormSubmit}>
//                         <TextField
//                             required
//                             variant="outlined"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleFormChange}
//                             label="Name"
//                             placeholder="Name"
//                         />
//                         {/* Add other fields similarly */}
//                         <Button variant="contained" type="submit">
//                             {editMode ? 'UPDATE' : 'SUBMIT'}
//                         </Button>
//                     </form>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// };

// const mapStateToProps = (state) => ({
//     cricketers: state.cricketers,
// });

// export default connect(mapStateToProps, {
//     fetchCricketers,
//     addCricketer,
//     editCricketer,
//     deleteCricketer,
// })(Cricket);

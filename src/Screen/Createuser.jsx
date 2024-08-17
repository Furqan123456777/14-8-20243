import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Createuser = () => {
  const [createData, setCreateData] = useState(
    { name: "", 
      username: "", 
      email: "", 
      phone: "" },
  );
  
  const handleSubmit = (e) => {
    e.preventDefault();

      axios
        .post("http://localhost:2757/users", createData)
        .then((res) => alert("user successfully added"))
        .catch((err) => console.log(err));
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Paper elevation={24} sx={{ margin: 15, padding: 5 }}>
          <Typography variant="h4" sx={{ marginBottom: 5 }}>
            Create User
          </Typography>
          <TextField
            onChange={(e)=>setCreateData({ ...createData, name: e.target.value })}
            sx={{ mb: 3 }}
            fullWidth
            label="Full Name"
          />
          <TextField
            onChange={(e)=>setCreateData({ ...createData, username: e.target.value,
            })}
            sx={{ mb: 3 }}
            fullWidth
            label="User Name"
          />
          <TextField
            onChange={(e)=>setCreateData({ ...createData, email: e.target.value })}
            sx={{ mb: 3 }}
            fullWidth
            label="Email"
          />
          <TextField
            onChange={(e)=>setCreateData({ ...createData, phone: e.target.value })}
            sx={{ mb: 3 }}
            fullWidth
            label="Phone"
          />

          <Button variant="contained" type="submit">
            Create
          </Button>
        </Paper>
      </form>
    </div>
  );
};

export default Createuser;

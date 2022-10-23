import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {logout} from '../services/auth.service';

//function to check if Authentication cookie is set
function checkAuth() {
    if (document.cookie.indexOf('Authentication') === -1) {
        return false;
    } else {
        return true;
    }
}

const handleLogout = async () => {
  await logout();
}



const setLogoutButton = ()=>{
    if (checkAuth()) {
      return <Button color="inherit" onClick={handleLogout}>Logout</Button>
    }
}


function NavBar() {


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ECOGreen
        </Typography>
        {setLogoutButton()}
      </Toolbar>
    </AppBar>
  </Box>
  );
}
export default NavBar;

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {logout} from '../services/auth.service';
import { getLoggedInUser } from '../services/user.service';

const handleLogout = async () => {
  await logout();
  window.location.href = "/login";
}

function NavBar() {
  const user =  getLoggedInUser();
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ECOGreen
        </Typography>
        {user.id?<Button color="inherit" onClick={handleLogout}>Logout</Button>:''}
      </Toolbar>
    </AppBar>
  </Box>
  );
}
export default NavBar;

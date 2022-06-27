import React, {useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import {Avatar, Divider, Typography} from "@mui/material";
import storeService, {IStoreState} from '../../services/storeServices';

const AppBar = () => {
  const [store, setStore] = useState<IStoreState>(storeService.initialStoreState);

  const modeToggle = () => {
    storeService.subscribe(setStore);
    storeService.modeChanger(!store.darkMode)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar  sx={{
          pr: '24px',
        }}>
        <Box sx={{ flexGrow: 1 }} />
            <IconButton
              size="large"
              aria-label="mode"
              color="inherit"
              onClick={modeToggle}
            >
              {store.darkMode
                ? <NightlightIcon />
                : <LightModeIcon />
              }
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={7} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Divider
              orientation="vertical"
              variant="inset"
              flexItem
              sx={{
                m: 1,
              }}
            />
          <Avatar
            alt="Remy Sharp"
          />
          <Typography
            align="center"
            sx={{
              m: 1
            }}
          >
            Remy Sharp
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
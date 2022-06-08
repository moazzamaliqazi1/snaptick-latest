import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const ActionButtonCustomize = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary,
  fontSize: 20,
  color: 'white'
}));

export { ActionButtonCustomize } 
import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyCustomLogoFull from './logo/babelLogo.png';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#7df3e1',
  },
});
const LogoFull = () => {

    return <img src={MyCustomLogoFull}       style={{ width: 'auto', height: 50, fill: '#7df3e1', marginLeft: 50 }} />;
  
};

export default LogoFull;

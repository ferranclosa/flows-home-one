import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container:{
    display: 'flex', 
    alignContent: 'center'
  },
  text: {
    border: '3px', 
    fontSize: '1.3rem',
    textAlign: 'center',
    padding: '10px', 
    background: 'black', 
    color: 'white'
  }
}))
const HeaderNode = ({
  data
}) => {
  const classes = useStyles()
  const { domain, description } = data
  return (
    <>
     <div className={classes.container }>
        {domain} - {description}   
     </div>
    </>
  );
}
HeaderNode.displayName = 'HeaderNode';

export default memo(HeaderNode);

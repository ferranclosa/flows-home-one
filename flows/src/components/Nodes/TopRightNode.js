import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles'


import { Handle } from 'react-flow-renderer';



const useStyles = makeStyles((theme) => ({
  text : {
    fontSize: '0.7rem', 
    textAlign: 'left', 
    padding: '10px'
  },
  sourceHandle : {
    background: '#555'
  }
}))


const TopRightNode = ({ data,  targetPosition, sourcePosition }) => {
  const classes= useStyles()
  return (
    <>
      <Handle type="target" position={targetPosition}   isConnectable={true} />

      <div className={classes.text}>
        System : <strong>{data.system}</strong>
        <br/>
        Phase : <strong>{data.phase}</strong>
        <br/>
        Schema : <strong>{data.schema}</strong>
        <br/>
        Table  : <strong>{data.table}</strong>
      </div>
      <Handle type="source" position={sourcePosition} isConnectable={true} />
    </>
  );
};

export default memo(TopRightNode);

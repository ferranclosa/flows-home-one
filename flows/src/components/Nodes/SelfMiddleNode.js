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

const targetHandleStyle = { background: '#555' };

const targetHandleStyleA = { ...targetHandleStyle, top: 10 };
const targetHandleStyleB = { ...targetHandleStyle, bottom: 10, top: 'auto' };

const sourceHandleStyleA = { ...targetHandleStyle, top: 10 };
const sourceHandleStyleB = { ...targetHandleStyle, bottom: 10, top: 'auto' };

const SelfMiddleNode = ({ data,  targetPosition, sourcePosition }) => {
  const classes= useStyles()
  return (
    <>
      <Handle type="target" position={targetPosition} id="ta" style={targetHandleStyleA} isConnectable={true} />
      <Handle type="target" position={targetPosition} id="tb" style={targetHandleStyleB} isConnectable={true} />

      <div className={classes.text}>
        System : <strong>{data.system}</strong>
        <br/>
        Phase : <strong>{data.phase}</strong>
        <br/>
        Schema : <strong>{data.schema}</strong>
        <br/>
        Table  : <strong>{data.table}</strong>
      </div>
      <span className={classes.sourceHandle}>
    <Handle type="source" position={sourcePosition} id="sa" style={sourceHandleStyleA}  isConnectable={true} />
    <Handle type="source" position={sourcePosition} id="sb" style={sourceHandleStyleB} isConnectable={true} />
  
      </span>
    </>
  );
};

export default memo(SelfMiddleNode);

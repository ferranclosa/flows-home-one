import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Handle, Position } from 'react-flow-renderer';


const targetHandleStyle = { background: '#555' };
const sourceHandleStyleA = { ...targetHandleStyle};

const onConnect = (params) => console.log('handle onConnect', params);

const useStyles = makeStyles((theme) => ({
  text : {
    fontSize: '0.7rem', 
    textAlign: 'left', 
    padding: '10px'
  }
}))


const MarcoNode = ({ element, data, isConnectable }) => {
  const classes= useStyles()
  return (
    <>
      <Handle type="target" position={Position.Left} style={targetHandleStyle} onConnect={onConnect} />
      <div className={classes.text}>
        System : <strong>{data.system}</strong>
        <br/>
        Phase : <strong>{data.phase}</strong>
        <br/>
        Schema : <strong>{data.schema}</strong>
        <br/>
        Table  : <strong>{data.table}</strong>
      </div>
      <Handle type="source" position={Position.Right} id="a" style={sourceHandleStyleA} isConnectable={isConnectable} />
    </>
  );
};

export default memo(MarcoNode);

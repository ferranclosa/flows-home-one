import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer';

const OutputNode = ({ data, isConnectable, targetPosition = Position.Top }) => (
  <>
    <Handle type="target" position={targetPosition} isConnectable={isConnectable} />
    {data.label}
  </>
);

OutputNode.displayName = 'OutputNode';

export default memo(OutputNode);

import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer'

const InputNode = ({ data, isConnectable, sourcePosition = Position.Bottom }) => (
  <>
    {data.label}
    <Handle type="source" position={sourcePosition} isConnectable={isConnectable} />
  </>
);

InputNode.displayName = 'InputNode';

export default memo(InputNode);

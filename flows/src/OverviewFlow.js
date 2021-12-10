import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'

import ReactFlow, {
    addEdge,
    Controls,
    ReactFlowProvider,
    removeElements,
    Background,
} from 'react-flow-renderer';

import MarcoNode from './MarcoNode';
import { TopLeftNode, TopRightNode, TopMiddleNode, HeaderNode, SelfMiddleNode } from './components/Nodes';

import { jsonstring } from './initial-elements';
const connectionLineStyle = { stroke: '#fff', fontSize: '1.2rem' };
const snapGrid = [16, 16];

const nodeTypes = {
    marco: MarcoNode,
    topLeft: TopLeftNode, 
    topMiddle: TopMiddleNode, 
    topRight: TopRightNode, 
    header: HeaderNode,
    self: SelfMiddleNode

};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        
    },
    reactFlow: {
        overflow: 'visible',
        width: '100%',
        height: '100%', 
        
    }
}))


const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
};



const OverviewFlow = () => {
    const classes = useStyles()

    const onElementsRemove = (elementsToRemove) =>
        setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setElements((els) => addEdge(params, els));

    const NewObject = JSON.parse(jsonstring);

        const [elements, setElements] = useState(NewObject);

    return (
        <ReactFlowProvider>
            <div className={classes.content}>
                <ReactFlow className={classes.reactFlow}
                    elements={elements}
                    onElementsRemove={onElementsRemove}
                    onConnect={onConnect}
                    onLoad={onLoad}
                    nodeTypes={nodeTypes}
                    connectionLineStyle={connectionLineStyle}
                    snapGrid={snapGrid}
                    snapToGrid={true}
                    defaultZoom={3}
                >
                    <Controls />
                    <Background color="#aaa" gap={10} />
                </ReactFlow>
            </div>
        </ReactFlowProvider>
    );
};

export default OverviewFlow;
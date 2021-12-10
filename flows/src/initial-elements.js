
const values =  [
  {
    id: '1',
    type: 'input',
    data: {
      label:  
        <>
          Welcome to <strong>React Flow!</strong> <br/>
          Test two <br />
          Signature
        </>
      ,
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: {
      label: (
        <>
          This is a <strong>default node</strong>
        </>
      ),
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: {
      label: (
        <>
          This one has a <strong>custom style</strong>
        </>
      ),
    },
    position: { x: 400, y: 100 },
    style: {
      background: '#D6D5E6',
      color: '#333',
      border: '1px solid #222138',
      width: 180,
    },
  },
  {
    id: '4',
    position: { x: 250, y: 200 },
    data: {
      label: 'Another default node',
    },
  },
  {
    id: '5',
    data: {
      label: 'Node id: 5',
    },
    position: { x: 250, y: 325 },
  },
  {
    id: '6',
    type: 'output',
    data: {
      label: (
        <>
          An <strong>output node</strong>
        </>
      ),
    },
    position: { x: 100, y: 480 },
  },
  {
    id: '7',
    type: 'output',
    data: { label: 'Another output node' },
    position: { x: 400, y: 450 },
  },
  { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
  { id: 'e1-3', source: '1', target: '3' },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    label: 'animated edge',
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    arrowHeadType: 'arrowclosed',
    label: 'edge with arrow head',
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
    label: 'smooth step edge',
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    type: 'step',
    style: { stroke: '#f6ab6c' },
    label: 'a step edge',
    animated: true,
    labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
  },
]

const element = 
`[
   {
      "id":"1",
      "type":"input",
      "data":{
         "label":
            [
               "( <>",
                  "Welcome to ",
                   "React Flow!"
                  ,
                   "<br/>", 
                  "Test two ",
                  "<br/>", 
                  "Signature", 
                  "</> ) "
               ]
      },
      "position":{
         "x":250,
         "y":0
      }
   },
   {
      "id":"2",
      "data":{
         "label":
            [
               "( <>", 
                  "This is a ",
                  "<strong>",
                 "default node",
                 "</strong>", 
                 "</> )"

               ]
            }
         
      ,
      "position":{
         "x":100,
         "y":100
      }
   },
   {
      "id":"3",
      "data":{
         "label":
           [
              "( <>",
                  "This one has a ",
                  "<strong>",
                     "custom style",
                     "</strong>", 
                     "</> )"

               ]
            
         
      },
      "position":{
         "x":400,
         "y":100
      },
      "style":{
         "background":"#D6D5E6",
         "color":"#333",
         "border":"1px solid #222138",
         "width":180
      }
   },
   {
      "id":"4",
      "position":{
         "x":250,
         "y":200
      },
      "data":{
         "label":"Another default node"
      }
   },
   {
      "id":"5",
      "data":{
         "label":"Node id: 5"
      },
      "position":{
         "x":250,
         "y":325
      }
   },
   {
      "id":"6",
      "type":"output",
      "data":{
         "label":
           [
                  "An ",
                  "<br />",
                    "<strong>",
                    "output node", 
                     "</strong>"
               ]
            
         
      },
      "position":{
         "x":100,
         "y":480
      }
   },
   {
      "id":"7",
      "type":"output",
      "data":{
         "label":"Another output node"
      },
      "position":{
         "x":400,
         "y":450
      }
   },
   {
      "id":"e1-2",
      "source":"1",
      "target":"2",
      "label":"this is an edge label"
   },
   {
      "id":"e1-3",
      "source":"1",
      "target":"3"
   },
   {
      "id":"e3-4",
      "source":"3",
      "target":"4",
      "animated":true,
      "label":"animated edge"
   },
   {
      "id":"e4-5",
      "source":"4",
      "target":"5",
      "arrowHeadType":"arrowclosed",
      "label":"edge with arrow head"
   },
   {
      "id":"e5-6",
      "source":"5",
      "target":"6",
      "type":"smoothstep",
      "label":"smooth step edge"
   },
   {
      "id":"e5-7",
      "source":"5",
      "target":"7",
      "type":"step",
      "style":{
         "stroke":"#f6ab6c"
      }, 
      "label":"a step edge",
      "animated":true,
      "labelStyle":{
         "fill":"#f6ab6c",
         "fontWeight":700
      }
   }
]

`
const jsonstring =

    `[
       {
          "id": "0", 
          "type":"header", 
          "data": {
             "domain": "CUS", 
             "description":"Customer Migration Domain"
          }, 
          "position": {
            "x": 100, 
            "y": 0
         }, 
         "style":{
            "background":"#3d3e40",
            "color":"#dee0e3",
            "border":"2px solid red",
            "width":"1250px", 
            "fontSize": "2rem"
         }
       },
   {
      "id":"1",   
      "type":"topLeft",
      "data":{
         "system":"UDM", 
         "phase": "EXTRACTION",
         "schema": "UOPS0152H", 
         "table": "CUSTOMIZENT"
      },
      "position":{
         "x":100,
         "y":100
      },
      "sourcePosition": "right",
      "style": { 
         "background": "#0cc285", 
         "border": "2px solid #777", 
         "padding": 10, 
         "width": 250}
   },
   {
      "id":"2",
      "type":"topMiddle",
      "data":{
         "system":"MIGRATION", 
         "phase": "FILTER-LIST",
         "schema": "XXHUBTGFR", 
         "table": "CUST_HUB"
      },
      "position":{
         "x":550,
         "y":100
      }, 
      "targetPosition": "left", 
      "sourcePosition": "right",
      "style": { 
         "background": "#d6fc56",
         "border": "2px solid #777", 
         "padding": 10, 
         "width": 250 }
   },
   {
      "id":"3",
      "type":"topRight",
      "data":{
         "system":"MIGRATION", 
         "phase": "FILTER-SCOPE",
         "schema": "TARGETLIB", 
         "table": "CUSTOMER"
      },      
      "targetPosition": "left", 
      "sourcePosition": "bottom",
      "position":{
         "x":1100,
         "y":100
      },
      "style":{
         "background":"#d6fc56",
         "color":"#333",
         "padding": 10, 
         "border":"1px solid #222138",
         "width":250
      }
   },
   {
      "id":"4",
      "type": "topMiddle",
      "position":{
         "x":100,
         "y":300
      },
      "targetPosition": "top", 
      "sourcePosition" : "right", 
      "data": {
         "system":"MIGRATION", 
         "phase": "PRE-TRANSFORM",
         "schema": "DECONWRK", 
         "table": "FSSCUSTP01"
   },
   "style":{
      "background":"#c49b04",
      "color":"#333",
      "padding": 10,
      "border":"1px solid #222138",
      "width":250
   }
},
   {
      "id":"5",
      "type": "topMiddle",
      "position":{
         "x":550,
         "y":300
      },
      "targetPosition": "left", 
      "sourcePosition" : "right", 
      "data": {
         "system":"MIGRATION", 
         "phase": "TRANSFORM",
         "schema": "DECONWRK", 
         "table": "FSSCUSTP01"
   },
   "style":{
      "background":"#c49b04",
      "color":"#333",
      "padding": 10,
      "border":"1px solid #222138",
      "width":250
   }},
   {
      "id":"6",
      "type": "topRight",
      "position":{
         "x":1100,
         "y":300
      },
      "targetPosition": "left", 
      "sourcePosition" : "bottom", 
      "data": {
         "system":"MIGRATION", 
         "phase": "POST-TRANSFORM",
         "schema": "DECONWRK", 
         "table": "FSSCUSTP01"
   },
   "style":{
      "background":"#c49b04",
      "color":"#333",
      "padding": 10,
      "border":"1px solid #222138",
      "width":250
   }},
   {
      "id":"7",
      "type": "topMiddle",
      "position":{
         "x":100,
         "y":500
      },
      "targetPosition": "top", 
      "sourcePosition" : "right", 
      "data": {
         "system":"MIGRATION", 
         "phase": "PRE-LOAD",
         "schema": "DECONLOAD", 
         "table": "HUB_CUST"
   },
   "style":{
      "background":"#e6c222",
      "color":"#333",
      "padding": 10,
      "border":"1px solid #222138",
      "width":250
   }},
   
  
   
   {
      "id":"8",
      "type": "topMiddle",
      "position":{
         "x":550,
         "y":500
      },
      "targetPosition": "left", 
      "sourcePosition" : "right", 
      "data": {
         "system":"MIGRATION", 
         "phase": "LOAD",
         "schema": "DECONLOAD", 
         "table": "HUB_CUST"
   },
   "style":{
      "background":"#e6c222",
      "color":"#333",
      "padding": 10,
      "border":"1px solid #222138",
      "width":250
   }},
   {
      "id":"9",
      "type": "topMiddle",
      "position":{
         "x":1100,
         "y":500
      },
      "targetPosition": "left", 
      "data": {
         "system":"HUB", 
         "phase": "LOAD",
         "schema": "HDEHUBFP", 
         "table": "SSCUSTP"
   },
   "style":{
      "background": "#0cc285", 
      "color":"#333",
      "padding": 10,
      "border":"1px solid #222138",
      "width":250
   }},
   
   
   {
      "id":"10",
      "type": "topMiddle",
      "position":{
         "x":1100,
         "y":700
      },
      "targetPosition": "left", 
      "data": {
         "system":"HUB", 
         "phase": "LOAD",
         "schema": "HDEHUBFP", 
         "table": "XREF_CUST"
   },
   "style":{
      "background": "#0cc285", 
      "color":"#333",
      "padding": 10,
      "border":"1px solid #222138",
      "width":250
   }},
   {
      "id":"e1-2",
      "source":"1",
      "target":"2",
      "animated": true, 
      "label":"Extraction from source", 
      "labelStyle": { "fontSize" : "0.8rem"}
   },
   {
      "id":"e1-3",
      "source":"2",
      "target":"3", 
      "label": "Applied Filter", 
      "animated": true, 
      "labelStyle": { "fontSize" : "0.8rem"}
   },
   {
      "id":"e3-4",
      "source":"3",
      "target":"4",
      "type": "step",
      "animated": true,
      "label":"Move to Transformation Engine", 
      "labelStyle": { "fontSize" : "0.8rem"}
   },
   {
      "id":"e4-5",
      "source":"4",
      "target":"5",
      "animated": true,
   
      "arrowHeadType":"arrowclosed",
      "label":"Transformation", 
      "labelStyle": { "fontSize" : "0.8rem"}
   },
   {
      "id":"e5-6",
      "source":"5",
      "target":"6",
      "animated": true,
      "label":"Transcodification", 
      "labelStyle": { "fontSize" : "0.8rem"}
   },
   {
      "id":"e5-7",
      "source":"6",
      "target":"7",
      "animated": true,
      "type":"smoothstep",
      "style":{
         "stroke":"#f6ab6c"
      }, 
      "label":"Move to LOAD engine",
      "animated":true,
       
      "labelStyle": { "fontSize" : "0.8rem"}
      
   },
   {
      "id":"e7-8",
      "source":"7",
      "target":"8",
      "animated": true,
      "style":{
         "stroke":"#f6ab6c"
      }, 
      "label":"LOAD to HUB",
      "animated":true,
       
      "labelStyle": { "fontSize" : "0.8rem"}
      
   }
   ,
   {
      "id":"e8-9",
      "source":"8",
      "target":"9",
      "animated": true,
      "style":{
         "stroke":"#f6ab6c"
      }, 
      "label":"Injection to HUB",
      "animated":true,
       
      "labelStyle": { "fontSize" : "0.8rem"}
      
   },
   {
      "id":"e8-10",
      "source":"8",
      "target":"10",
      "animated": true,
      "style":{
         "stroke":"#f6ab6c"
      }, 
      "label":"XREF Customer IDs",
      "animated":true,
      "type":"smoothstep", 
      "labelStyle": { "fontSize" : "0.8rem"}
      
   }
      
]

`

export  {
    values, 
    element, 
    jsonstring
}


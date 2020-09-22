import React from 'react';

//props
//state
//children

//using props.children we can create components that wrap other components 

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border:'2px solid black', height: '800px', backgroundColor: 'whitesmoke'}}> 
            {props.children}
        </div>
    );
};
export default Scroll;

// {{}} jsx css style expression /must camelCase for JSX - line 11     
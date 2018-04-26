import React from "react";

const detectDevice = (ModifyComponent) => {
    return (props) => <ModifyComponent data={window.innerWidth > 640 ? 'Desktop' : 'Mobile'} {...props}/>
};

export default detectDevice;
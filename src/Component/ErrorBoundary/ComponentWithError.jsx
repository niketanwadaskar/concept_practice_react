import { useState } from "react";

const ComponentWithError = () => {
    // throw new Error('Testing Error Boundary');
    // This will trigger an error when rendering
    if(true){
        // const [first, setfirst] = useState()
    }
    return <div>Should not be reached</div>;
};

export default ComponentWithError
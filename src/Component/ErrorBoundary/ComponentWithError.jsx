const ComponentWithError = () => {
    throw new Error('Testing Error Boundary');
    // This will trigger an error when rendering
    return <div>Should not be reached</div>;
};

export default ComponentWithError
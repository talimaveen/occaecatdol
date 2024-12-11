function processRequest() {
    let data = fetchData(); // data is bound to the processRequest function's scope
    processData(data); // data is passed to another function
    // Once processData finishes, data might no longer be needed
    // It should be eligible for garbage collection once it's out of scope
}

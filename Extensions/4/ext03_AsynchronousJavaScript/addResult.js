const addResultRequest = new XMLHttpRequest();

const addResult = event => {
    event.preventDefault(); // Note to self: this is generally the first statement in an onsubmit function

    const formData = new FormData(document.querySelector("#result"));
    const formDataObject = Object.fromEntries(formData);
    formDataObject.id = (largestIdValue + 1).toString(); // Take the largest ID value from the previous results, add 1 to
                                                       // it then use that as the ID for the new result being posted...
    const formDataJson = JSON.stringify(formDataObject);

    addResultRequest.open("POST", "http://localhost:3000/results", true);
    addResultRequest.setRequestHeader("Content-Type", "application/json");
    addResultRequest.send(formDataJson);

    loadResults();
};

document.addEventListener("submit", addResult);

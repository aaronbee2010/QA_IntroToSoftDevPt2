let largestIdValue;

function loadResults() {
    // This task also works with loadResults.original.js, which doesn't use promises.
    // I just added a promise for the sake of following the labs.
    //
    // Apparently, when the XMLHttpRequest.open() method's third parameter is set to true,
    // the request is performed asynchronously anyways.
    //
    // Man I miss jQuery. My company uses it for AJAX requests and I really appreciate that 
    // jQuery exists after going through this particular task

    const promise = new Promise((resolve, reject) => {
        const loadResultsRequest = new XMLHttpRequest();

        loadResultsRequest.open("GET", "http://localhost:3000/results?_sort=id", true);
        loadResultsRequest.onload = () => {
            if (loadResultsRequest.status == 200) {
                resolve(loadResultsRequest.response);
            } else {
                reject(loadResultsRequest.response);
            }
        };
        loadResultsRequest.send();
    });

    promise.then(
        response => {
            const results = JSON.parse(response);

            const placeholder = document.querySelector("#resultsPlaceholder");
            const table = document.querySelector("#resultsTable");

            // Defining variables to be used as table elements so we can append a row to the existing
            // table for each result present in the response
            let row;
            let home;
            let away;
            let text;

            // Remove any existing results to make way for the results from our response
            placeholder.hidden = false;
            table.hidden = true;
            const previousResults = document.querySelectorAll("#resultsTable tr:not(:first-child)");
            for (const previousResult of previousResults) {
                previousResult.remove();
            }

            if (results.length != 0) {
                // This is *really* making me miss the MVC framework my company uses :(
                for (const result of results) {
                    // console.log(result);

                    largestIdValue = parseInt(result.id);

                    row = document.createElement("tr");

                    home = document.createElement("td");
                    text = document.createTextNode(result.home);
                    home.appendChild(text);
                    row.appendChild(home);

                    away = document.createElement("td");
                    text = document.createTextNode(result.away);
                    away.appendChild(text);
                    row.appendChild(away);

                    score = document.createElement("td");
                    text = document.createTextNode(`${result.homeScore} - ${result.awayScore}`);
                    score.appendChild(text);
                    row.appendChild(score);

                    table.appendChild(row);
                }

                placeholder.hidden = true;
                table.hidden = false;
            } else {
                placeholder.textContent = "No results found!";
            }
        },
        response => {
            throw new Error(`HTTP error: ${response.status}`);
        }
    );
}

loadResults();

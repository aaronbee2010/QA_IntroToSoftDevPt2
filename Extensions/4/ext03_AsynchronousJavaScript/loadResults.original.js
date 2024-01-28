let largestIdValue;

function loadResults() {
    const placeholder = document.querySelector("#resultsPlaceholder");
    const table = document.querySelector("#resultsTable");

    let row;
    let home;
    let away;
    let text;

    const loadResultsRequest = new XMLHttpRequest();

    // Remove any existing results to make way for the results from a new query
    placeholder.hidden = false;
    table.hidden = true;
    const previousResults = document.querySelectorAll("#resultsTable tr:not(:first-child)");
    for (const previousResult of previousResults) {
        previousResult.remove();
    }

    loadResultsRequest.open("GET", "http://localhost:3000/results?_sort=id", true);
    loadResultsRequest.onload = () => {
        if (loadResultsRequest.status == 200) {
            const results = JSON.parse(loadResultsRequest.response);
            // console.log(results.length);

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
        }
    };
    loadResultsRequest.send();
}

loadResults();

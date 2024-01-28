let largestIdValue;

// Yeah, this is 10x nicer then writing promises. Still prefer jQuery though!
async function loadResults() {
    const response = await fetch("http://localhost:3000/results?_sort=id", { method: "GET" });

    if (response.status !== 200) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const results = await response.json();

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
}

loadResults();

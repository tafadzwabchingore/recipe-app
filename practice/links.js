const baseURL = "https://tafadzwabchingore.github.io/wdd230/";

const linksURL = "https://tafadzwabchingore.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
    //console.log(data);
}

getLinks();

function displayLinks(weeks) {
    fetch('links.json')
        .then(response => response.json())
        .then(data => {
            // Filter links based on weeks parameter
            const filteredLinks = data.filter(link => link.week === weeks);

            // Display filtered links
            filteredLinks.forEach(link => {
                console.log(`${link.title}: ${link.url}`);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}
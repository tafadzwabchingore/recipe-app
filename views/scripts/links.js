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

}
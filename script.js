const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];
// Given array of URLs
//const urls = [
  //'https://jsonplaceholder.typicode.com/posts/1',
  //'https://jsonplaceholder.typicode.com/posts/2',
 // 'https://jsonplaceholder.typicode.com/posts/3'
//];

// Function to fetch data from a URL
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok for ${url}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return null;
  }
}

// Function to process each URL
async function processUrls() {
  for (const url of urls) {
    const data = await fetchData(url);
    if (data) {
      console.log(`Response from ${url}:`, data);
    }
  }
}

// Call the function to start fetching data
processUrls();

// Don't change the above line
// Write your code here

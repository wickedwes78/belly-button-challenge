/*
// Create an array of each ID's numbers
for (let i = 0; i < bellyButtons.length; i++){
    let idInfo = bellyButtons.samples.id=i;
}

// Create an array of category labels
let labels = Object.keys(idInfo.id);
console.log(labels)

// Display the default plot
function init() {
  let data = [{
    values: australia,
    labels: labels,
    type: "bar"
    orientation: "h"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  let data = [];

  if (dataset == 'australia') {
      data = australia;
  }
  else if (dataset == 'brazil') {
      data = brazil;
  }
  else if (dataset == 'uk') {
      data = uk;
  }
  else if (dataset == 'mexico') {
    data = mexico;
  }
  else if (dataset == 'singapore') {
      data = singapore;
  }
  else if (dataset == 'southAfrica') {
    data = southAfrica;
  }
// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();















// Initialises the page with a default plot
function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
  
    Plotly.newPlot("plot", data);
  }
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property("value");
  
    // Initialise x and y arrays
    let x = [];
    let y = [];
  
    if (dataset === 'dataset1') {
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
    }
  
    else if (dataset === 'dataset2') {
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  
  init();






// Sort the data by top 10OTUs results descending
let sortedByGreekSearch = data.sort((a, b) => b.greekSearchResults - a.greekSearchResults);

// Slice the first 10 objects for plotting
slicedData = sortedByGreekSearch.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();

// Trace1 for the Greek Data
let trace1 = {
  x: reversedData.map(object => object.greekSearchResults),
  y: reversedData.map(object => object.greekName),
  text: reversedData.map(object => object.greekName),
  name: "Greek",
  type: "bar",
  orientation: "h"
};

// Data array
// `data` has already been defined, so we must choose a new name here:
let traceData = [trace1];

// Apply a title to the layout
let layout = {
  title: "Greek gods search results",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
// Note that we use `traceData` here, not `data`
Plotly.newPlot("plot", traceData, layout);
*/


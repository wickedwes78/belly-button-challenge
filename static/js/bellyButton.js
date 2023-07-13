// Get the Belly Button endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Belly Button Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Show Belly Button data in console
d3.json(url).then(data => {
  console.log(data)
});

// Function to update the plots and metadata panel
function updatePlots(sampleId, data) {
  // Get the sample from the data for the selected id
  var sample = data.samples.find(sample => sample.id === sampleId);
    console.log("Sample:", sample);

  // Sort the data by OTU Ids
  sample.otu_ids.sort((a,b) => {
      return sample.otu_ids.indexOf(a) - sample.otu_ids.indexOf(b);
  });

  // Select the top 10 OTUs and reverse the order for horizontal bar chart
  var top10OTUs = sample.otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
  var top10OTUValues = sample.sample_values.slice(0, 10).reverse();
  var top10OTULabels = sample.otu_labels.slice(0, 10).reverse();
    console.log(top10OTUs, top10OTUValues, top10OTULabels );
  
  // Create the trace for the bar chart
  var barTrace = {
    x: top10OTUValues,
    y: top10OTUs ,
    text: top10OTULabels,
    type: "bar",
    marker:{color: sample.otu_ids},
    orientation: "h"
  };

  // Create the data array for the horizontal bar chart
  var barData = [barTrace];

  // Define the layout for the horizontal bar chart
  var barLayout = {
    title: "Top 10 microbial species found in Subject ID " + sampleId,
    xaxis: { title: "# of Sample Values" },
    yaxis: { title: "Microbial species (OTU)" },
  };

  // Plot the bar chart to the div tag with id "bar"
  Plotly.newPlot("bar", barData, barLayout);

  // Create the trace for the bubble chart
  var bubbleTrace = {
    x: sample.otu_ids,
    y: sample.sample_values,
    text: sample.otu_labels,
    mode: "markers",
    marker: {
      size: sample.sample_values,
      color: sample.otu_ids
    }
  };

  // Create the data array for the bubble chart
  var bubbleData = [bubbleTrace];

  // Define the layout for the bubble chart
  var bubbleLayout = {
    title: "Representation of number of each Microbial species found in Subject ID " + sampleId,
    xaxis: { title: "Microbial species" },
    yaxis: { title: "# of Sample Values" }
  };

  // Plot the bubble chart to a div tag with id "bubble"
  Plotly.newPlot("bubble", bubbleData, bubbleLayout);

  // Get the metadata for the selected sample
  var metadata = data.metadata.find(d => d.id === parseInt(sampleId));

  // Select the panel with id "sample-metadata"
  var panel = d3.select("#sample-metadata");

  // Clear any existing metadata (will just add values continuously if not done)
  panel.html("");

  // Add each key-value pair to the panel
  Object.entries(metadata).forEach(([key, value]) => {
    panel.append("h6").text(`${key}: ${value}`);
  });

}

// Use D3 to read in samples.json
d3.json(url).then((data) => {
    // Select the dropdown menu with id "selDataset"
    var dropdownContainer = d3.select("#selDataset");

    // Add each name as an option to the dropdown menu
    dropdownContainer
    .selectAll("option")
    .data(data.names)
    .enter()
    .append("option") 
    .text(d => d)
    .attr("value", d => d);

    // Get the first sample from the data
    var firstSample = data.samples[0].id;

    // Update the plots and metadata panel with the first sample
    updatePlots(firstSample, data);
});

// Function to handle change event on dropdown menu
function optionChanged(newSample) {
    // Use D3 to read in samples.json
    d3.json(url).then((data) => {
        // Update the plots and metadata panel with the selected sample
        updatePlots(newSample, data);
    });
};
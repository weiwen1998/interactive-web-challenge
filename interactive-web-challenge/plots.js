
function buildCharts(sample_value_1) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      let samples = data.samples;
      console.log(sample_value_1)
      let resultArray = samples.filter(sampleObj => sampleObj.id === sample_value_1);

      let result = resultArray[0];
console.log(resultArray, "These are the results")
      let otu_ids = result.otu_ids;
      let otu_labels = result.otu_labels;
      let sample_values = result.sample_values;

        let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        let barData = [
        {
            y: yticks,
            x: sample_values.slice(0, 10).reverse(),
            text: otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h",
        }
        ];

        let barLayout = {
          title: "Top 10 Bacteria Cultures Found",
          margin: { t: 30, l: 150 }
        };

    Plotly.newPlot("bar", barData, barLayout);
  });
}
buildCharts("940");

function buildCharts2(sample_value_2) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    let samples = data.samples;
    console.log("First Sample",typeof samples[0].id)
    let resultArray = samples.filter(sampleObj => sampleObj.id == sample_value_2);
    let result = resultArray[0];

    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;

      let yticks = sample_values.map(otuID => `OTU ${otuID}`).reverse();
      let bubbleData = [
      {
          y: sample_values,
          x: otu_ids,
          mode: 'markers',
          marker: {
            size: sample_values,
            color: otu_ids
          }
      }
      ];

      let bubbleLayout = {
        title: "Bubble Display of Samples",
        margin: { t: 30, l: 150 }
      };

  Plotly.newPlot("bubble", bubbleData, bubbleLayout);
});
}
buildCharts2("940");

function optionChanged(value){
  buildCharts(value),
  buildCharts2(value)
}


function buildDropdown() {
  
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    let samples = data.names;
      console.log(samples)
      let resultArray = samples.filter(sampleObj => sampleObj.id == "940");
      let result = resultArray[0];
  
      // let otu_ids = result.otu_ids;
      // let otu_labels = result.otu_labels;
      // let sample_values = result.sample_values;
    // const selOptions = [{value: sample_values, text: sample_values}]
    console.log("Sel Options",samples)
    const selElement = d3.select("#selDataset")
    samples.forEach(d => {
      selElement.append("option").attr("value", d).text(d)
    })
  });
}
buildDropdown();

function buildMetadata(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var container = d3.select("#sample-metadata");
    container.html("");
    Object.entries(result).forEach(([key, value]) => {
      container.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}
buildMetadata("940");

function optionChanged(value){
  buildMetadata(value)
}
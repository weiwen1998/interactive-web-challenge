
function buildCharts() {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      let samples = data.samples;
      console.log(samples)
      let resultArray = samples.filter(sampleObj => sampleObj.id == "940");
      let result = resultArray[0];
  
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
buildCharts();

function buildCharts2() {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    let samples = data.samples;
    console.log(samples)
    let resultArray = samples.filter(sampleObj => sampleObj.id == "940");
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
buildCharts2();

const selOptions = [{value: sample_values, text: sample_values}]
const selElement = d3.select("#selDataset")
selOptions.forEach(d => {
  selElement.append("option").attr("value", d.value).text(d.text)
})
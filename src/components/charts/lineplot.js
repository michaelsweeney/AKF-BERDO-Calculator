import { conn } from "../../store/connect";

import * as d3 from "d3";

import { useRef, useEffect } from "react";
const LinePlot = (props) => {
  const strokes = {
    bottomFill: "#5086fb",
    topFill: "#feb9b9",
    middleFill: "#fd8787",
    emissionsLine: "#0449dc",
  };

  const containerdims = {
    width: props.window.dims.width - 400,
    height: props.window.dims.height - 225,
  };

  const container = useRef(null);
  useEffect(() => {
    createChart();
  });

  const createChart = () => {
    const transition_duration = 500;
    const area_transition_duration = 1000;
    let emissions = props.building.annual_emissions.map((e) => {
      return { year: e.year, val: e.normalized.total };
    });

    let emissions_for_line =
      emissions.length > 30
        ? [emissions.slice(0)[0], emissions.slice(-1)[0]]
        : emissions;

    let thresholds = props.building.emissions_thresholds.normalized;
    let domain_padding = 1.2;

    let domain_map = {
      "2025-2029": 2025,
      "2030-2034": 2030,
      "2035-2039": 2035,
      "2040-2044": 2040,
      "2045-2049": 2045,
      "2050-": 2050,
    };

    const getThresholdsMet = (e) => {
      let emission_period = emissions.filter((f) => f.year == domain_map[e])[0];
      if (emission_period) {
        if (emission_period.val < thresholds[e]) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    };

    thresholds = Object.keys(thresholds).map((e) => {
      return {
        period: e,
        val: thresholds[e],
        starting_year: domain_map[e],
        threshold_met: getThresholdsMet(e),
      };
    });

    let node = container.current;

    let margins = {
      t: 50,
      b: 50,
      r: 250,
      l: 80,
    };

    let chartdims = {
      width: containerdims.width - margins.l - margins.r,
      height: containerdims.height - margins.t - margins.t,
    };

    // create containers
    let svg = d3
      .select(node)
      .selectAll("svg")
      .data([0])
      .join("svg")
      .attr("width", containerdims.width)
      .attr("height", containerdims.height);

    let plot_g = svg
      .selectAll(".plot-g")
      .data([0])
      .join("g")
      .attr("class", "plot-g")
      .attr("transform", `translate(${margins.l}, ${margins.t})`);

    let annotation_g = svg
      .selectAll(".annotation-g")
      .data([0])
      .join("g")
      .attr("class", "annotation-g")
      .attr("transform", `translate(${margins.l}, ${margins.t})`);

    // create scales
    let xScale = d3
      .scaleLinear()
      .domain([2018, 2050])
      .range([0, chartdims.width]);

    let yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max([
          ...emissions.map((e) => e.val),
          ...thresholds.map((e) => e.val),
        ]) * domain_padding,
      ])
      .range([chartdims.height, 0]);

    // area plot

    const compileAreas = (thresholds, emissions) => {
      let periods = [2018, 2025, 2030, 2035, 2040, 2045, 2050];
      let combined_array = periods.map((d) => {
        return {
          year: d,
          emission_val: emissions.filter((f) => f.year == d)[0]
            ? emissions.filter((f) => f.year == d)[0].val
            : 0,
          thresh_val: thresholds.filter((f) => f.starting_year == d)[0]
            ? thresholds.filter((f) => f.starting_year == d)[0].val
            : 0,
          thresh_met: thresholds.filter((f) => f.starting_year == d)[0]
            ? thresholds.filter((f) => f.starting_year == d)[0].threshold_met
            : false,
        };
      });

      let combined_top = [
        combined_array[1],
        combined_array[2],
        combined_array[3],
        combined_array[4],
        combined_array[5],
        combined_array[6],
      ];

      let combined_bottom = [
        combined_array[0],
        combined_array[1],
        combined_array[2],
        combined_array[3],
        combined_array[4],
        combined_array[5],
        combined_array[6],
      ];

      let top = combined_top.map((d) => {
        return {
          val: d.thresh_val, // d3.max([d.thresh_val, d.emission_val]),
          year: d.year,
          thresh_met: d.thresh_met,
        };
      });
      let middleFilter = combined_top.filter((d) => d.thresh_met == false);

      let middle = [];

      middle.push({
        val: middleFilter[0].emission_val,
        year: middleFilter[0].year,
      });

      middleFilter.forEach((d, i) => {
        middle.push({
          val: d.thresh_val,
          year: d.year,
        });
        if (middleFilter[i + 1]) {
          middle.push({
            val: d.thresh_val,
            year: middleFilter[i + 1].year,
          });
        }
      });

      middle.push({
        val: middleFilter[middleFilter.length - 1].emission_val,
        year: middleFilter[middleFilter.length - 1].year,
      });
      middle.push({
        val: middleFilter[0].emission_val,
        year: middleFilter[0].year,
      });

      console.log(middle, middleFilter);
      let bottom = combined_bottom.map((d) => {
        return {
          val: d.emission_val, //d3.max([d.thresh_val, d.emission_val]),
          year: d.year,
        };
      });
      top = [
        {
          val: top[0] ? top[0].val : 0,
          year: top[0] ? top[0].year : 0,
        },

        {
          val: top[0] ? top[0].val : 0,
          year: top[1] ? top[1].year : 0,
        },
        {
          val: top[1] ? top[1].val : 0,
          year: top[1] ? top[1].year : 0,
        },
        {
          val: top[1] ? top[1].val : 0,
          year: top[2] ? top[2].year : 0,
        },
        {
          val: top[2] ? top[2].val : 0,
          year: top[2] ? top[2].year : 0,
        },
        {
          val: top[2] ? top[2].val : 0,
          year: top[3] ? top[3].year : 0,
        },
        {
          val: top[3] ? top[3].val : 0,
          year: top[3] ? top[3].year : 0,
        },
        {
          val: top[3] ? top[3].val : 0,
          year: top[4] ? top[4].year : 0,
        },
        {
          val: top[4] ? top[4].val : 0,
          year: top[4] ? top[4].year : 0,
        },
        {
          val: top[4] ? top[4].val : 0,
          year: top[5] ? top[5].year : 0,
        },
      ];

      return { top, middle, bottom };
      // returns {top, middle, bottom}
    };

    let { top, middle, bottom } = compileAreas(thresholds, emissions);

    let threshAreaGen = d3
      .area()
      .x((d) => {
        return xScale(d.year);
      })

      .y0((d) => 0)
      .y1((d) => {
        return yScale(d.val);
      });
    plot_g.selectAll(".thresh-area").attr("opacity", 0);

    plot_g
      .selectAll(".thresh-area")
      .data([top])
      .join("path")
      .attr("class", "thresh-area")
      .attr("d", threshAreaGen)
      .transition()
      .duration(area_transition_duration)
      .attr("fill", strokes.topFill)

      .attr("stroke", d3.schemeCategory10[1])
      .attr("opacity", 1);

    let emissionsAreaGen = d3
      .area()
      .x((d) => xScale(d.year))
      .y0((d) => chartdims.height)
      .y1((d) => yScale(d.val));

    plot_g.selectAll(".emissions-area").attr("opacity", 0);

    plot_g
      .selectAll(".emissions-area")
      .data([bottom])
      .join("path")
      .attr("class", "emissions-area")
      .attr("d", emissionsAreaGen)
      .transition()
      .duration(area_transition_duration)
      .attr("fill", strokes.bottomFill)
      .attr("opacity", 1);

    plot_g.selectAll(".intersection-area").attr("opacity", 0);

    plot_g
      .selectAll(".intersection-area")
      .data([middle])
      .join("polygon")
      .attr("class", "intersection-area")
      .attr("clip-path", "url(#top-clip)")
      .attr("points", (d) => {
        return d
          .map((d) => {
            return [xScale(d.year), yScale(d.val)].join(",");
          })
          .join(" ");
      })
      .transition()
      .duration(area_transition_duration)

      .attr("fill", strokes.middleFill)
      .attr("stroke", "red")
      .attr("opacity", 1);

    // clip anything above line...
    let clipAreaGen = d3
      .area()
      .x((d) => xScale(d.year))
      .y0((d) => chartdims.height)
      .y1((d) => yScale(d.val));

    plot_g
      .selectAll(".clip-area")
      .data([0])
      .join("clipPath")
      .attr("id", "top-clip")
      .attr("class", "clip-area");
    plot_g
      .selectAll(".clip-area")
      .datum(emissions_for_line)
      .join("clipPath")
      .attr("id", "top-clip")
      .attr("class", "clip-area")
      .attr("d", clipAreaGen)
      .transition()
      .duration(transition_duration);
    // .attr("fill", "black")
    // .attr("stroke-width", 2);

    // create axes
    let xAxisBottom = d3
      .axisBottom()
      .scale(xScale)
      .tickFormat(d3.format("0"))
      .tickSizeOuter(0);

    let xAxisTop = d3
      .axisTop()
      .scale(xScale)
      .ticks(0)
      .tickFormat(d3.format("0"))
      .tickSizeOuter(0);

    svg
      .selectAll(".xaxis-g-top")
      .data([0])
      .join("g")
      .attr("class", "xaxis-g-top")
      .attr("transform", () => `translate(${margins.l},${margins.t})`)
      .call(xAxisTop);

    svg
      .selectAll(".xaxis-g-bottom")
      .data([0])
      .join("g")
      .attr("class", "xaxis-g-bottom")
      .attr(
        "transform",
        () => `translate(${margins.l},${margins.t + chartdims.height})`
      )
      .call(xAxisBottom);

    let yAxisLeft = d3
      .axisLeft()
      .scale(yScale)
      .ticks(5)
      .tickSizeOuter(5)
      .tickFormat(d3.format(".2f"))
      .tickSizeOuter(0);

    let yAxisRight = d3
      .axisLeft()
      .scale(yScale)
      .ticks(0)
      .tickFormat(d3.format(".2f"))
      .tickSizeOuter(0);

    svg
      .selectAll(".yaxis-g-left")
      .data([0])
      .join("g")
      .attr("class", "yaxis-g-left")
      .attr("transform", () => `translate(${margins.l},${margins.t})`)
      .transition()
      .duration(transition_duration)
      .call(yAxisLeft);

    svg
      .selectAll(".yaxis-g-right")
      .data([0])
      .join("g")
      .attr("class", "yaxis-g-right")
      .attr(
        "transform",
        () => `translate(${margins.l + chartdims.width},${margins.t})`
      )
      .transition()
      .duration(transition_duration)
      .call(yAxisRight);

    // create data points
    plot_g
      .selectAll(".thresh-point")
      .data(thresholds)
      .join("circle")
      .attr("class", "thresh-point")
      .transition()
      .duration(transition_duration)
      .attr("r", 5)
      .attr("cx", (d) => xScale(d.starting_year))
      .attr("cy", (d) => yScale(d.val))
      .style("fill", (d) => (d.threshold_met ? "gray" : "red"));

    plot_g
      .selectAll(".thresh-line")
      .data(thresholds)
      .join("line")
      .attr("class", "thresh-line")
      .transition()
      .duration(transition_duration)
      .attr("x1", (d) => xScale(d.starting_year))
      .attr("x2", (d) => xScale("2050"))
      .attr("y1", (d) => yScale(d.val))
      .attr("y2", (d) => yScale(d.val))
      .attr("stroke-dasharray", "2 0 2")
      .style("stroke", (d) => (d.threshold_met ? "gray" : "red"));

    annotation_g
      .selectAll(".threshold-annotation")
      .data(thresholds)
      .join("text")
      .attr("class", "threshold-annotation")
      .transition()
      .duration(transition_duration)
      .attr("x", xScale(2050) + 25)
      .attr("y", (d) => yScale(d.val))
      .text((d) => `${d.period}: ${d3.format(".2f")(d.val)} kgCO2e/sf/yr`)
      .style("fill", (d) => (d.threshold_met ? "black" : "red"))
      .style("font-size", "1em");

    plot_g
      .selectAll(".emissions-line")
      .data([0])
      .join("path")
      .attr("class", "emissions-line");

    plot_g
      .selectAll(".emissions-line")
      .datum(emissions_for_line)
      .join("path")
      .transition()
      .duration(transition_duration)

      .attr("class", "emissions-line")
      .attr("stroke", strokes.emissionsLine)
      .attr("stroke-width", 2)
      .attr(
        "d",
        d3
          .line()
          .x((d) => xScale(d.year))
          .y((d) => yScale(d.val))
      )
      .attr("fill", "none");

    svg
      .selectAll(".y-axis-title")
      .data([0])
      .join("text")
      .attr("class", "y-axis-title")
      .attr("transform", "rotate(270)")
      .attr("x", -(margins.t + chartdims.height) / 2 - 150)
      .attr("y", margins.l / 2 - 15)
      .text("Carbon Emission Intensity (kgCO2e/sf/yr)")
      .style("font-size", "1em");

    svg
      .selectAll(".x-axis-title")
      .data([0])
      .join("text")
      .attr("class", "x-axis-title")
      .attr("x", (margins.l + chartdims.width) / 2)
      .attr("y", margins.t + chartdims.height + 40)

      .text("Year")
      .style("font-size", "1em");

    svg
      .selectAll(".chart-title")
      .data([0])
      .join("text")
      .attr("class", "chart-title")
      .attr("x", (margins.l + chartdims.width) / 2 - 50)
      .attr("y", margins.t - 20)
      .text("CEI Threshold Summary")
      .style("font-size", "1.25em");

    return;
  };

  return <div ref={container}></div>;
};

const mapStateToProps = (state) => {
  return {
    building: { ...state.building },
    window: { ...state.window },
  };
};

export default conn(mapStateToProps)(LinePlot);

import { conn } from "../../../store/connect";

import * as d3 from "d3";
import { useRef, useEffect } from "react";

import { createAxisGroups } from "./axisgroups";

import { createACPScales } from "./acpscales";
import { createThresholdScales } from "./thresholdscales";
import { createSelectionGroups } from "./selectiongroups";
import { createThresholdLegend } from "./thresholdlegend";
import { createDataArrays } from "./datacalcs";
import { createACPLegend } from "./acplegend";

const LinePlot = (props) => {
  const container = useRef(null);
  const { view } = props;

  useEffect(() => {
    createChart();
  });

  const createChart = () => {
    let node = container.current;

    /*
    ----------------------------------------------------------------------
    GENERAL DIMENSIONS AND AESTHETICS
    ----------------------------------------------------------------------
    */

    let margins = {
      t: 40,
      b: 140,
      r: 150,
      l: 75,
    };

    let containerdims = {
      width: node
        ? node.getBoundingClientRect()["width"]
        : props.window.dims.width - 400,
      height: node
        ? node.getBoundingClientRect()["height"]
        : props.window.dims.height - 225,
    };

    let tooltip_duration = 200;

    let chartdims = {
      width: containerdims.width - margins.l - margins.r,
      height: containerdims.height - margins.t - margins.b,
    };

    let colorTableau = d3.schemeTableau10;

    const colors = {
      bottomFill: "rgba(0,0,0,0.1)",
      topFill: "black",
      middleFill: colorTableau[2],
      middleFillStroke: "black",
      emissionsLineStroke: colorTableau[0],
      emissionsCircleFill: colorTableau[0],
      emissionsCircleStroke: "black",
      thresholdCircleFillOn: colorTableau[2],
      thresholdCircleStrokeOn: "black",
      thresholdCircleFillOff: colorTableau[3],
      thresholdCircleStrokeOff: "black",
      annotationLineOn: "black",
      annotationLineOff: "black",
      annotationTextOn: colorTableau[2],
      annotationTextOff: "black",
      paymentBars: colorTableau[2],
      paymentAvoidanceBars: colorTableau[3],
    };

    const domain_padding = 1.2;

    const transition_duration = 0;

    /*
    ----------------------------------------------------------------------
    GENERATE DATA ARRAYS
    ----------------------------------------------------------------------
    */

    let { emissions, emissions_simple, thresholds, areaArrays } =
      createDataArrays(
        props.building.emissions_thresholds,
        props.building.annual_emissions,
        props.building.building_validation,
        props.building.alternative_compliance_payments
      );

    let { alternative_compliance_payments } = props.building;
    let emissions_simple_normalized = [
      { year: 2021, val: 0 },
      { year: 2050, val: 0 },
      { year: 2051, val: 0 },
    ];

    /*
    ----------------------------------------------------------------------
    COMMON SHARED SVG ELEMENTS AND DIMENSIONS
    ----------------------------------------------------------------------
    */

    let { svg, plot_g, annotation_g, legend_g, axis_g, title_g, tooltip_div } =
      createSelectionGroups({
        containerdims: containerdims,
        chartdims: chartdims,
        margins: margins,
        node: node,
      });

    let { x_axis_bottom_g, x_axis_top_g, y_axis_left_g, y_axis_right_g } =
      createAxisGroups({
        svg: axis_g,
        margins: margins,
        chartdims: chartdims,
      });

    let bottom_area = plot_g
      .selectAll(".bottom-area")
      .data([0])
      .join("path")
      .attr("class", "bottom-area");

    let middle_area = plot_g
      .selectAll(".middle-area")
      .data([0])
      .join("polygon")
      .attr("class", "middle-area")
      .attr("clip-path", "url(#thresh-clip-id)");

    let clip_area = plot_g
      .selectAll(".clip-area-element")
      .data([0])
      .join("clipPath")
      .attr("class", "clip-area-element")
      .attr("id", "thresh-clip-id");

    let emissions_line = plot_g
      .selectAll(".emissions-line")
      .data([0])
      .join("path")
      .attr("class", "emissions-line")
      .attr("class", "emissions-line")
      .attr("stroke", colors.emissionsLineStroke)
      .attr("stroke-width", 2);

    let emissions_today_circle = plot_g
      .selectAll(".emissions-today-circle")
      .data([0])
      .join("circle")
      .attr("class", "emissions-today-circle")
      .attr("fill", colors.emissionsCircleFill)
      .attr("stroke", colors.emissionsCircleStroke)
      .attr("r", 5);

    let threshold_annotation_g = annotation_g
      .selectAll(".threshold-annotation-g")
      .data([0])
      .join("g")
      .attr("class", "threshold-annotation-g");

    let threshold_points = plot_g
      .selectAll(".thresh-point")
      .data([0])
      .join("circle")
      .attr("class", "thresh-point");

    let y_title_left = title_g
      .selectAll(".y-axis-title-left")
      .data([0])
      .join("text")
      .attr("class", "y-axis-title-left")
      .attr("transform", "rotate(270)")
      .attr("x", -(margins.t + chartdims.height / 2))
      .attr("y", margins.l / 2 - 15)
      .attr("text-anchor", "middle")
      .attr("font-weight", "500");

    let y_title_right = title_g
      .selectAll(".y-axis-title-right")
      .data([0])
      .join("text")
      .attr("class", "y-axis-title-right")
      .attr("transform", "rotate(270)")
      .attr("x", -(margins.t + chartdims.height / 2))
      .attr("y", margins.l + chartdims.width + 100)
      .attr("text-anchor", "middle");

    let x_title = title_g
      .selectAll(".x-axis-title")
      .data([0])
      .join("text")
      .attr("class", "x-axis-title")
      .attr("x", margins.l + chartdims.width / 2)
      .attr("y", margins.t + chartdims.height + 40)
      .attr("text-anchor", "middle")
      .attr("font-weight", "500");

    let acp_annotation = title_g
      .selectAll(".acp-annotation-text")
      .data([0])
      .join("text")
      .attr("class", "acp-annotation-text")
      .attr("x", margins.l + chartdims.width / 2)
      .attr("y", margins.t + chartdims.height + 75)
      .attr("text-anchor", "middle")
      .attr("font-style", "italic")
      .style("font-size", "0.75em");

    let chart_title = title_g
      .selectAll(".chart-title")
      .data([0])
      .join("text")
      .attr("class", "chart-title")
      .attr("x", margins.l + chartdims.width / 2)
      .attr("y", margins.t - 20)
      .attr("text-anchor", "middle")
      .style("font-size", "1em")
      .style("font-weight", 600);

    let threshold_legend_g = createThresholdLegend({
      element: legend_g,
      colors: colors,
    });

    let acp_legend_g = createACPLegend({
      element: svg,
      colors: colors,
      margins: margins,
      chartdims: chartdims,
    });

    let payment_avoidance_bars = plot_g
      .selectAll(".payment-avoidance-bar")
      .data([0])
      .join("rect")
      .attr("class", "payment-avoidance-bar");

    let payment_bars = plot_g
      .selectAll(".payment-bar")
      .data([0])
      .join("rect")
      .attr("class", "payment-bar");

    /*
    ----------------------------------------------------------------------
    THRESHOLD VIEW
    ----------------------------------------------------------------------
    */

    let { xThresholdScale, yThresholdScale } = createThresholdScales({
      chartdims: chartdims,
      emissions: emissions,
      thresholds: thresholds,
      domain_padding: domain_padding,
    });

    if (view == "thresholds") {
      let payment_components = [
        payment_bars,
        payment_avoidance_bars,
        acp_legend_g,
      ];
      payment_components.forEach((f) => f.remove());

      x_axis_top_g.call(
        d3
          .axisTop()
          .scale(xThresholdScale)
          .ticks(0)
          .tickFormat(d3.format("0"))
          .tickSizeOuter(0)
      );
      x_axis_bottom_g.call(
        d3
          .axisBottom()
          .scale(xThresholdScale)
          .ticks(8)
          .tickFormat(d3.format("0"))
          .tickSizeOuter(0)
      );

      y_axis_left_g
        .transition()
        .duration(transition_duration)
        .call(
          d3
            .axisLeft()
            .scale(yThresholdScale)
            .ticks(5)
            .tickFormat(d3.format(".2f"))
            .tickSizeOuter(0)
        );

      y_axis_right_g
        .transition()
        .duration(transition_duration)
        .call(
          d3
            .axisRight()
            .scale(yThresholdScale)
            .ticks(0)
            .tickFormat(d3.format(".2f"))
            .tickSizeOuter(0)
        );

      bottom_area
        .data([areaArrays.bottom])
        .attr(
          "d",
          d3
            .area()
            .x((d) => xThresholdScale(d.year))
            .y0(chartdims.height)
            .y1((d) => yThresholdScale(d.val))
        )
        .attr("fill", colors.bottomFill);

      middle_area
        .data([areaArrays.middle])
        .attr("points", (d) => {
          return d
            .map((d) => {
              return [xThresholdScale(d.year), yThresholdScale(d.val)].join(
                ","
              );
            })
            .join(" ");
        })
        .attr("fill", colors.middleFill)
        .attr("stroke", colors.middleFillStroke)
        .attr("opacity", 1);

      clip_area
        .selectAll(".clip-area-path")
        .data([emissions_simple])
        .join("path")
        .attr("class", "clip-area-path")
        .attr(
          "d",
          d3
            .area()
            .x((d) => xThresholdScale(d.year))
            .y0((d) => chartdims.height)
            .y1((d) => yThresholdScale(d.val))
        );

      emissions_line
        .datum(emissions_simple)
        .join("path")
        .transition()
        .duration(transition_duration)
        .attr(
          "d",
          d3
            .line()
            .x((d) => xThresholdScale(d.year))
            .y((d) => yThresholdScale(d.val))
        )
        .attr("fill", "none");

      emissions_today_circle
        .data([emissions_simple[0]])
        .join("circle")
        .attr("class", "emissions-today-circle")
        .transition()
        .duration(transition_duration)
        .attr("cx", (d) => xThresholdScale(d.year))
        .attr("cy", (d) => yThresholdScale(d.val));

      emissions_today_circle
        .on("mouseover", function (event, d) {
          let circle = d3.select(this);
          circle
            .style("stroke-width", "1px")
            .attr("fill", d3.color(colors.emissionsCircleFill).darker());

          tooltip_div
            .html(
              `
            <div>
              <div>Year: ${d.year}</div>
              <div>Emissions: ${d3.format(".2f")(d.val)} kg/co2e/sf/yr</div>
            </div>
            `
            )
            .style("left", event.pageX + 28 + "px")
            .style("top", event.pageY + 28 + "px")
            .transition()
            .duration(tooltip_duration)
            .style("opacity", 1);
        })
        .on("mouseout", function () {
          let circle = d3.select(this);
          circle
            .style("stroke-width", "1px")
            .attr("fill", colors.emissionsCircleFill);
          tooltip_div
            .transition()
            .duration(tooltip_duration)
            .style("opacity", 0);
        });

      threshold_annotation_g
        .selectAll(".thresh-text")
        .data(thresholds)
        .join("text")
        .attr("class", "thresh-text")
        .transition()
        .duration(transition_duration)
        .attr("x", xThresholdScale(2051) + 15)
        .attr("y", (d) => (d.val !== null ? yThresholdScale(d.val) + 5 : 0))
        .text((d) => `${d.period} es: ${d3.format(".2f")(d.val)}`)
        .style("fill", (d) =>
          d.threshold_met ? colors.annotationTextOff : colors.annotationTextOn
        )
        .style("font-size", "0.75em");

      threshold_annotation_g
        .selectAll(".thresh-line")
        .data(thresholds)
        .join("line")
        .attr("class", "thresh-line")
        .attr("x1", (d) => xThresholdScale(d.starting_year) + 5)
        .attr("x2", (d) => xThresholdScale(2051))
        .attr("y1", (d) => yThresholdScale(d.val))
        .attr("y2", (d) => yThresholdScale(d.val))
        .attr("stroke-dasharray", "2 0 2")
        .style("stroke", (d) =>
          d.threshold_met ? colors.annotationLineOff : colors.annotationLineOn
        );

      threshold_points
        .data(thresholds)
        .join("circle")
        .attr("class", "thresh-point")
        .attr("r", 5)
        .attr("cx", (d) => xThresholdScale(d.starting_year))
        .attr("cy", (d) => yThresholdScale(d.val))
        .attr("stroke", (d) =>
          d.threshold_met
            ? colors.thresholdCircleStrokeOff
            : colors.thresholdCircleStrokeOn
        )
        .style("fill", (d) =>
          d.threshold_met
            ? colors.thresholdCircleFillOff
            : colors.thresholdCircleFillOn
        )
        .on("mouseover", function (event, d) {
          let circle = d3.select(this);
          circle
            .style("stroke-width", "1px")
            .style("fill", (d) =>
              d.threshold_met
                ? d3.color(colors.thresholdCircleFillOff).darker()
                : d3.color(colors.thresholdCircleFillOn).darker()
            );

          let em = emissions.filter((e) => e.year == d.starting_year)[0].val;
          tooltip_div
            .html(
              `
              <div>
                <div>Period: ${d.period}</div>
                <div>Threshold (${d.starting_year}): ${d3.format(".2f")(
                d.val
              )} kg/CO2e/sf/yr</div>
                <div>Emissions (${d.starting_year}): ${d3.format(".2f")(
                em
              )} kg/CO2e/sf/yr</div>
                <div>Threshold Met: ${d.threshold_met ? "Yes" : "No"}</div>
              </div>
              `
            )
            .style("left", event.pageX - 250 + "px")
            .style("top", event.pageY - 100 + "px")
            .transition()
            .duration(tooltip_duration)
            .style("opacity", 1);
        })
        .on("mouseout", function () {
          let circle = d3.select(this);
          circle
            .style("stroke-width", "1px")
            .style("fill", (d) =>
              d.threshold_met
                ? colors.thresholdCircleFillOff
                : colors.thresholdCircleFillOn
            );
          tooltip_div
            .transition()
            .duration(tooltip_duration)
            .style("opacity", 0);
        });

      y_title_left.text("es (kgCO2e/sf/yr)");
      y_title_right.text("");

      x_title.text("Year");
      acp_annotation.text("");
      chart_title.text("Emissions Standard (es) Threshold Summary*");
    }

    /*
    ----------------------------------------------------------------------
    ACP VIEW
    ----------------------------------------------------------------------
    */

    if (view == "payments") {
      let thresh_components = [
        threshold_annotation_g,
        threshold_legend_g,
        threshold_points,
        bottom_area,
        middle_area,
        clip_area,
        emissions_line,
        emissions_today_circle,
      ];
      thresh_components.forEach((f) => f.remove());
      let { xACPScale, yACPScaleLeft, yACPScaleRight } = createACPScales({
        chartdims: chartdims,
        data: alternative_compliance_payments,
        domain_padding: domain_padding,
      });

      x_axis_bottom_g.call(
        d3
          .axisBottom()
          .scale(xACPScale)
          .ticks(8)
          .tickFormat(d3.format("0"))
          .tickSizeOuter(0)
      );
      x_axis_top_g.call(
        d3
          .axisTop()
          .scale(xACPScale)
          .ticks(0)
          .tickFormat(d3.format("0"))
          .tickSizeOuter(0)
      );
      y_axis_left_g.call(
        d3
          .axisLeft()
          .scale(yACPScaleLeft)
          .ticks(5)
          .tickFormat(d3.format(".2f"))
          .tickSizeOuter(0)
      );
      y_axis_right_g.call(
        d3
          .axisRight()
          .scale(yACPScaleRight)
          .ticks(5)
          .tickFormat(d3.format("$,.0f"))
          .tickSizeOuter(0)
      );

      let acp_data = [...alternative_compliance_payments];
      acp_data.pop();
      acp_data.shift();

      payment_bars
        .data(acp_data)
        .join("rect")
        .attr("class", "payment-bar")
        .attr("x", (d) => xACPScale(d.year) - (chartdims.width / 33 - 2) / 2)
        .attr("y", (d) => yACPScaleRight(d.acp_payment))
        .attr(
          "height",
          (d) => yACPScaleRight(0) - yACPScaleRight(d.acp_payment)
        )
        .attr("width", chartdims.width / 33 - 2)
        .style("stroke", "gray")
        .style("stroke-width", "1px")
        .style("fill", colors.paymentBars)
        .on("mouseover", function (event, d) {
          let rect = d3.select(this);
          rect
            .style("stroke-width", "1px")
            .style("stroke", "gray")
            .style("fill", d3.color(colors.paymentBars).darker());
          tooltip_div
            .html(
              `
            <div>
              <div>Year: ${d.year}</div>
              <div>Carbon Deficit (kg/co2e/sf/yr): ${d3.format(".2f")(
                d.carbon_deficit_normalized
              )}</div>
              <div>ACP Payment (est): ${d3.format("$,.0f")(d.acp_payment)}</div>
            </div>
            `
            )
            .style("left", event.pageX - 250 + "px")
            .style("top", event.pageY - 100 + "px")
            .transition()
            .duration(tooltip_duration)
            .style("opacity", 1);
        })
        .on("mouseout", function () {
          let rect = d3.select(this);
          rect
            .style("stroke-width", "1px")
            .style("stroke", "gray")
            .style("fill", colors.paymentBars);

          tooltip_div
            .transition()
            .duration(tooltip_duration)
            .style("opacity", 0);
        });

      y_title_left.text("es above threshold (kgCO2e/sf/yr)");
      y_title_right.text("ACP ($)");
      x_title.text("Year");
      acp_annotation.text("* acp payments are $234 / metric ton");
      chart_title.text("Alternative Compliance Payment (ACP) Summary*");
    }

    return;
  };

  return <div style={{ height: "100%", width: "100%" }} ref={container}></div>;
};

const mapStateToProps = (state) => {
  return {
    building: { ...state.building },
    ui: { ...state.ui },
    window: { ...state.window },
  };
};

export default conn(mapStateToProps)(LinePlot);

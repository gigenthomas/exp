import * as d3 from 'd3';
import { Component, ViewEncapsulation, OnInit, OnChanges, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-tree-diagram',
  templateUrl: './tree-diagram.component.html',
  styleUrls: ['./tree-diagram.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TreeDiagramComponent implements OnInit, OnChanges {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() data: any;
  private margin: any = {top: 40, right: 50, bottom: 40, left: 50};
  private maximumZoomIn = 2;
  private maximumZoomOut = 1 / 2;
  private nodeSize = 300;
  private nodeTextPadding = 15;
  private nodeOutline = 'black';
  private certifiedColor = "green";
  private uncertifiedColor = "red";

  private chart: any;
  private width: number;
  private height: number;
  private tree;

  createChart() {
    let element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

    let svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight)
      .call(d3.zoom()
        .scaleExtent([this.maximumZoomOut, this.maximumZoomIn])
        .on("zoom", this.zoomed));

    // chart plot area
    this.chart = svg.append('g')
      .attr('class', 'chart')
      .attr('transform', `translate(${this.margin.left},   ${this.margin.top})`)
  .call(d3.drag()
    .on("drag", this.dragged));
  }


  update(source) {
    //remove previous node and links
    this.chart.selectAll(".node").remove();
    this.chart.selectAll(".link").remove();

    // declares a tree layout and assigns the size
    let treemap = d3.tree()
      .size([this.width, this.height]);

    let nodes = d3.hierarchy(source, function (d) {
      return d.children;
    });

    // maps the node data to the tree layout
    nodes = treemap(nodes);

    // Need this to call diagonal method since it is within function scope
    let that = this;

    // adds the links between the nodes
    let link = this.chart.selectAll(".link")
      .data(nodes.descendants().slice(1))
      .enter().append("path")
      .attr("class", "link")
      .style("stroke", function (d) {
        return d.data.certified ? that.certifiedColor : that.uncertifiedColor;
      })
      .attr("d", function (d) {
        return that.diagonal(d);
      });

let node = this.chart.selectAll(".node")
  .data(nodes.descendants())
  .enter().append("g")
  .attr("class", function (d) {
    return "node" +
      (d.children ? " node--internal" : " node--leaf");
  })
  .attr("transform", function (d) {
    return "translate(" + d.x + "," + d.y + ")";
  });


// adds symbols as nodes
node.append("path")
  .style("stroke", function (d) {
    return that.nodeOutline;
  })
  .style("fill", function (d) {
    return d.data.certified ? that.certifiedColor : that.uncertifiedColor;
  })
  .attr("d", d3.symbol()
  // Define the size of node
    .size(function (d) {
      return that.nodeSize;
      //return d.data.value * 30;
    })
    .type(function (d) {
      // Define the shape of nodes
      // if
      // (d.data.value >= 9) {
      //   return d3.symbolCross;
      // } else if
      // (d.data.value <= 9) {
      //   return d3.symbolDiamond;
      // }
      return d3.symbolCircle;
    }));

// adds the text to the node
node.append("text")
  .attr("dy", ".35em")
  .attr("x", function (d) {
    return that.nodeTextPadding;
    //return d.children ?
    //(d.data.value + 4) * -1 : d.data.value + 4
  })
  .style("text-anchor", function (d) {
    return "start";
    //return d.children ? "end" : "start";
  })
  .text(function (d) {
    return d.data.name;
  });
  }

  constructor() {

  }

  ngOnInit() {
    this.createChart();

    if (this.data) {
        this.update(this.data);

    }
  }

  ngOnChanges() {
    if (this.data && this.chart) {

        this.update(this.data);

    }
  }

  // Draw links between nodes
  diagonal(d): string {
    return "M" + d.x + "," + d.y
      + "C" + (d.x + d.parent.x) / 2 + "," + d.y
      + " " + (d.x + d.parent.x) / 2 + "," + d.parent.y
      + " " + d.parent.x + "," + d.parent.y;
  }

  zoomed(this) {
    d3.selectAll('g.chart').attr("transform", d3.event.transform);
  }

  dragged(this) {
    return function (d) {
      d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
    }
  }
}
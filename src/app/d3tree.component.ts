import {  Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';

import {
  D3Service,
  D3,
  Axis,
  BrushBehavior,
  BrushSelection,
  D3BrushEvent,
  ScaleLinear,
  ScaleOrdinal,
  Selection,
  Transition,
  TreeLayout

} from 'd3-ng2-service';

@Component({

  selector: 'app-d3-tree',
  template: '<svg width="960" height="600"></svg>'

})

export class D3TreeComponent implements OnInit, OnDestroy {

//https://bl.ocks.org/d3noob/43a860bc0024792f8803bba8ca0d5ecd
//https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/index.js
//https://stackoverflow.com/questions/42850102/multiple-d3-draggable-zoomable-trees-on-one-page-using-angular


  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;

  constructor(element: ElementRef, private ngZone: NgZone, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnDestroy() {
    if (this.d3Svg.empty && !this.d3Svg.empty()) {
      this.d3Svg.selectAll('*').remove();
    }
  }

  ngOnInit() {
    let self = this;
    let d3 = this.d3;
    let  treeData =
    {
      "name": "Top Level",
      "children": [
        {
          "name": "Level 2: A",
          "children": [
            { "name": "Son of A" },
            { "name": "Daughter of A" }
          ]
        },
        { "name": "Level 2: B" }
      ]
    };
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3Svg: Selection<SVGSVGElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;
    let width: number;
    let height: number;
    let random: () => number;
    let sqrt3: number;
    let points0: Array<[number, number, number]>;
    let points1: Array<[number, number, number]>;
    let points2: Array<[number, number, number]>;
    let points: Array<[number, number, number]>;
    let k: number;
    let x0: [number, number];
    let y0: [number, number];
    let x: ScaleLinear<number, number>;
    let y: ScaleLinear<number, number>;
    let z: ScaleOrdinal<number, string>;
    let xAxis: Axis<number>;
    let yAxis: Axis<number>;
    let brush: BrushBehavior<any>;
    let idleTimeout: number | null;
    let idleDelay: number;



    if (this.parentNativeElement !== null) {
/*
      d3ParentElement = d3.select(this.parentNativeElement);
      d3Svg = this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');

      width = +d3Svg.attr('width');
      height = +d3Svg.attr('height');

      d3G = d3Svg.append<SVGGElement>('g');



      function update(source) {
        //remove previous node and links
        d3G.selectAll(".node").remove();
        d3G.selectAll(".link").remove();

        // declares a tree layout and assigns the size
        let treemap = d3.tree()
          .size([width, height]);

        let nodes = d3.hierarchy(source, function (d) {
          return d.children;
        });

        // maps the node data to the tree layout
        nodes = treemap(nodes);

        // Need this to call diagonal method since it is within function scope
        let that = this;

        // adds the links between the nodes
        let link = d3G.selectAll(".link")
          .data(nodes.descendants().slice(1))
          .enter().append("path")
          .attr("class", "link")
          .style("stroke", function (d) {
            return d.data.certified ? that.certifiedColor : that.uncertifiedColor;
          })
          .attr("d", function (d) {
            return that.diagonal(d);
          });

    let node = d3G.selectAll(".node")
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



      update(treeData);

*/

  }
}

}

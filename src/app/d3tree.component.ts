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


  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;
   treeData =
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

  constructor(element: ElementRef, private ngZone: NgZone, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;


  }

  ngOnDestroy() {
    if (this.d3Svg.empty && !this.d3Svg.empty()) {
      this.d3Svg.selectAll('*').remove();
    }
  }

  collapse(d) : void  {
    if (d.children) {
        d._children = d.children
        d._children.forEach(d => this.collapse(d));
        d.children = null
    }
  }

  ngOnInit(): void {

    let self = this;
    let d3 = this.d3;
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3Svg: Selection<SVGSVGElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;
    let width: number;
    let height: number;


    if (this.parentNativeElement !== null) {

            d3ParentElement = d3.select(this.parentNativeElement);
            d3Svg = this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');

            width = +d3Svg.attr('width');
            height = +d3Svg.attr('height');

         let  treemap  = this.d3.tree().size([height, width]);
         var root = d3.hierarchy(this.treeData) ;
         root.x0 = height / 2;
         root.y0 = 0;
         root.children.forEach(d => this.collapse(d));
    }

  }





}

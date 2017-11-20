import { TreeModel } from 'ng2-tree';


import { Component , OnInit } from '@angular/core';
@Component({
    selector: 'app-tree2',
    template: `<tree [tree]="tree"></tree>`
  })


export class Tree2Component {
    public tree: TreeModel = {
        value: 'Programming languages by programming paradigm',
        children: [
          {
            value: 'Object-oriented programming',
            children: [
              {value: 'Java'},
              {value: 'C++'},
              {value: 'C#'}
            ]
          },
          {
            value: 'Prototype-based programming',
            children: [
              {value: 'JavaScript'},
              {value: 'CoffeeScript'},
              {value: 'Lua'}
            ]
          }
        ]
      };
}


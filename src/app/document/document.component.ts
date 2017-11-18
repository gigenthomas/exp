import { Component, OnInit } from "@angular/core";
import { TreeNodeType } from "../shared/types";
import { FileFolder } from "../models/fileFolder.model";

@Component({
    selector: 'sc-document',
    templateUrl: './document.component.html',
   })


export class DocumentComponent implements OnInit {
    nodes: FileFolder;
      constructor() { }
      ngOnInit(): void {
        const nodeTreeType = TreeNodeType.FileFolder;
        this.nodes = new FileFolder();
        this.nodes.id = 1 ;
        this.nodes.name = 'Test' ;
        const  dept1  = new FileFolder();

        dept1.name = 'File1';
        dept1.id = 2 ;
        const dept2 = new FileFolder();
        dept2.name = 'File2' ;
        dept2.id = 3 ;
        this.nodes.children = [ dept1, dept2 ];
        const dept3 = new FileFolder();
        dept3.id = 4 ;
        dept3.name = 'test3';

        const dept4 = new FileFolder();
        dept4.id = 5 ;
        dept4.name = 'test5';
        dept2.children = [ dept3, dept4];
        
      }
      showNodeChildren(node:  FileFolder ): void {
      }
    
      showNodeDetails(node:  FileFolder): void {
      }
}

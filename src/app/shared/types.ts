import { Observable } from 'rxjs/Rx';


import { FileFolder } from '../models/fileFolder.model';

export const enum SidePaneViewType {
  ChildView,
  DetailsView
}

export const enum TreeNodeType {
  FileFolder = 0
  
}

export interface NodeService {
  getDetailsById(id: number, fileFolder?: FileFolder): Observable<FileFolder>;
}

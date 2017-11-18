
import { TreeNodeType } from '../shared/types';
export class FileFolder {
id: number ;
name: string ;
isDeleted: boolean;
type: TreeNodeType;
isFile: boolean;
createdOn: string;
children: FileFolder[];
}

import { Guid } from 'guid-typescript';

export interface Product { 
    // id: string;          
    // guid: string;       
    // name: string;        
    // price: number;        
    // description: string; 
    // type: string;        
    // status: string;   
    // amount: number;     
    // isDeleted: boolean;  
    // createdOn: Date;     
    // updatedOn: Date;    

    id: Guid;
  name: string;
  description?: string;
  amount: number;
  type: string;
  status: boolean;
  createdOn: string;
  updatedOn: string;
  isDeleted: boolean;
}
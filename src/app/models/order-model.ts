export interface Order {

        id: number;  
        price: number;  
        tax: number;  
        discount: number;
        delivery: number;
        totalAmount: number;  
        createdOn: Date;  
        updatedOn: Date;  
        isDeleted: boolean;  
        customerId: number;   
}

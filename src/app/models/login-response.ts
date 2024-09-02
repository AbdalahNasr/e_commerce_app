export interface LoginResponse {


    data: {
        id: string;
        isAdmin: boolean;
        createdOn: string;
        updatedOn: string;
        isDeleted: boolean;
      };
      statusCode: number;
      message: string;
}

export enum RequestType {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

export type ErrorObjectType = {
  errors?: {
    message: string;
  };
};

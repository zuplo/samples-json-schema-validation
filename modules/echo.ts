import { ZuploRequest } from "@zuplo/runtime";
    
export default async function (request: ZuploRequest) {
  // just echo the body back to the client
  return await request.json();
}
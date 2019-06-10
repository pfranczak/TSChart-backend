import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
    case "production":
        path = `${__dirname}/../../.env`;
        break;
    default:
        path = `${__dirname}/../../.env.ds`;
}
dotenv.config({ path: path });

export const SERVER_PORT = process.env.SERVER_PORT;
import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import path from "path";
import { buildSchema } from "type-graphql";
import { CodigoPromocionalResolver } from "./resolvers/CodigoPromocionalResolver";
require("dotenv").config({ path: ".env.local" });

async function main() {
    const schema = await buildSchema({
        resolvers:[CodigoPromocionalResolver],
        emitSchemaFile: path.resolve(__dirname, "schema.gql")
    });
    const server = new ApolloServer({
        schema
    });
    const {url} = await server.listen();
    console.log("Server running on ", url);
}
main();
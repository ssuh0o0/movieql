import {GraphQLServer} from "graphql-yoga";
import resolvers from "resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers:resolvers
});
server.start(()=>console.log("Graphql server running"));



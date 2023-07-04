"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("module-alias/register");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const jwt_1 = require("./utils/jwt");
const authChecker_1 = __importDefault(require("./utils/authChecker"));
const resolvers_1 = require("./resolvers");
const http_1 = __importDefault(require("http"));
async function bootstrap() {
    // Build the schema
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: resolvers_1.resolvers,
        authChecker: authChecker_1.default,
    });
    // Init express
    const app = (0, express_1.default)();
    // app.use(
    //   cors({
    //     origin: "https://studio.apollographql.com",
    //     credentials: true,
    //   })
    // );
    const httpServer = http_1.default.createServer(app);
    app.use((0, cookie_parser_1.default)());
    // Create the apollo server
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        context: jwt_1.verifyUserAndGetContext,
        cache: "bounded",
        plugins: [
            process.env.NODE_ENV === "production"
                ? (0, apollo_server_core_1.ApolloServerPluginLandingPageProductionDefault)()
                : (0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)(),
            (0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer }),
        ],
    });
    await server.start();
    // apply middleware to server
    server.applyMiddleware({
        app,
        path: "/graphql",
        cors: {
            origin: "https://studio.apollographql.com",
            credentials: true,
        },
    });
    // app.listen on express server
    const PORT = process.env.PORT || 4000;
    await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}
bootstrap();

import dotenv from "dotenv";
dotenv.config();
import "module-alias/register";
import "reflect-metadata";
import express from "express";
import { buildSchema } from "type-graphql";
import cookieParser from "cookie-parser";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginDrainHttpServer,
} from "apollo-server-core";
import { verifyUserAndGetContext } from "./utils/jwt";
import authChecker from "./utils/authChecker";
import { resolvers } from "./resolvers";
import http from "http";

async function bootstrap() {
  // Build the schema
  const schema = await buildSchema({
    resolvers,
    authChecker,
  });

  // Init express
  const app = express();
  // app.use(
  //   cors({
  //     origin: "https://studio.apollographql.com",
  //     credentials: true,
  //   })
  // );
  const httpServer = http.createServer(app);

  app.use(cookieParser());

  // Create the apollo server
  const server = new ApolloServer({
    schema,
    context: verifyUserAndGetContext,
    cache: "bounded",
    plugins: [
      process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageLocalDefault(),
      ApolloServerPluginDrainHttpServer({ httpServer }),
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
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

bootstrap();

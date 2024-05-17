import config from "../config/config";
import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(config.AppWriteProjectId); // Your project ID

export const account = new Account(client);
export const id = ID.unique();

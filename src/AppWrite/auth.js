import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.AppWriteUrl) // Your API Endpoint
      .setProject(config.AppWriteProjectId); // Your project ID
    this.account = new Account(this.client);
  }
  async signup({ email, password, name }) {
    try {
      await this.account.create(ID.unique(), email, password, name);
      return this.signin({ email, password });
    } catch (error) {
      console.log(error);
    }
  }
  async signin({ email, password }) {
    try {
      await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions("current");
    } catch (error) {
      console.log(error);
    }
  }
}
const authService = new AuthService();
export default authService;

import config from "../config/config";
import { ID, Client, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.AppWriteUrl)
      .setProject(config.AppWriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, featureImg, userId, Status }) {
    try {
      return await this.databases.createDocument(
        config.AppWriteDatabaseId, // Database id
        config.AppWriteCollectionId, // collection id
        slug, // document id
        {
          title,
          featureImg,
          userId,
          Status,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost(slug, { title, featureImg, Status }) {
    try {
      return await this.databases.updateDocument(
        config.AppWriteDatabaseId, // Database id
        config.AppWriteCollectionId, // collection id
        slug, // document id
        {
          title,
          featureImg,
          Status,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.AppWriteDatabaseId, // Database id
        config.AppWriteCollectionId, // collection id
        slug // document id
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getAllPost() {
    try {
      return await this.databases.listDocuments(
        config.AppWriteDatabaseId, // Database id
        config.AppWriteCollectionId, // collection id
        [Query.equal("status", ["active"])]
      );
    } catch (error) {
      console.log(error);
    }
  }
  // upload file
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.AppWriteBucketId, // bucketId
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(error);
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.createFile(
        config.AppWriteBucketId, // bucketId
        fileId
      );
    } catch (error) {
      console.log(error);
    }
  }
  async filePreview(fileId) {
    try {
      return this.bucket.getFilePreview(
        config.AppWriteBucketId, // bucketId
        fileId
      );
    } catch (error) {
      console.log(error);
    }
  }
}

const service = new Service();
export default service;

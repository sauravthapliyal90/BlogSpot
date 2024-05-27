import confi from "../confi/confi";
import { Client, Databases, ID, Query, Storage } from "appwrite";

export class Services{
    client = new Client();
    storage;
    database;

    constructor(){
        this.client
        .setEndpoint(confi.appwriteUrl)
        .setProject(confi.appwriteProjectId);
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({status, title, content, slug, featuredImage, userId}){
       try {
         return await this.database.createDocument(
            confi.appwriteDatabaseId,
            confi.appwriteColectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                userId,
                status
            }
         )
       } catch (error) {
         throw error;
       }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
       try {
         return await this.database.updateDocument(
           confi.appwriteDatabaseId,
           confi.appwriteColectionId,
           slug,
           {
            title,
            content,
            status,
            featuredImage
           }
         )
       } catch (error) {
          throw error;
       }
    }

    async deletePost(slug){
        try {
          return await this.database.deleteDocument(
            confi.appwriteDatabaseId,
            confi.appwriteColectionId,
            slug
          )
        } catch (error) {
           throw error;
        }
    }

    async getPost(slug){
       try {
         return await this.database.getDocument(
          confi.appwriteDatabaseId,
          confi.appwriteColectionId,
          slug
         )
       } catch (error) {
         throw error;
       }
    }

    async getPosts(queries = [Query.equal("status","active")]){
      try {
        return await this.database.listDocuments(
          confi.appwriteDatabaseId,
          confi.appwriteColectionId,
          queries
        )
      } catch (error) {
        throw error;
      }
    }

    //upload file service
    
    async uploadFile(file){
      try {
        return await this.storage.createFile(
           confi.appwriteBucketId,
           ID.unique(),
           file
        )
      } catch (error) {
         throw error;
      }
    }

    async deleteFile(fileId){
       try {
         return await this.storage.deleteFile(
          confi.appwriteBucketId,
          fileId
         )
       } catch (error) {
         throw error;
       }
    }

    async filePreview(fileId){
      try {
         return await this.storage.getFilePreview(
           confi.appwriteBucketId,
           fileId
         )
      } catch (error) {
         throw error;
      }
    }
}

const service = new Services()

export default service;
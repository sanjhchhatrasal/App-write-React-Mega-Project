import config from "../Config/Config";
import {Account, Client, ID} from 'appwrite'


 export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
            this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
          const userAccount =  await this.account.create((ID.unique()), email, password, name)
          if (userAccount) {
            return userAccount;
          }else{
            return null;
          }
        } catch (error) {
            throw error;
        }
    }
 }

 const authService = new AuthService();

 export default authService
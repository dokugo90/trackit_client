"use server"

import { MongoClient } from "mongodb";
import { registerProps } from "../interfaces/interfaceTypes";
import axios from "axios";

export default async function Register(registerProps: registerProps) {
    "use server";

     const { email, firstName, lastName, password } = registerProps;

   // const { email, firstName, lastName, password } = formProps;
  
    /*const mongoClient = new MongoClient("mongodb+srv://devbudgetbee:NbLv1mB8bgPLLoRS@trackitdb.ahqhial.mongodb.net/Trackit");
  
    const data = await mongoClient.db().collection("users").find().toArray();*/

    return axios.post(`${process.env.NEXT_PUBLIC_API}sign_up`, { email, firstName, lastName, password })
  .catch(() => false);
    
    
  };
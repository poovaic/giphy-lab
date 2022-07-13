
import React from "react";
import axios from 'axios';
const BASE_URL = "https://api.giphy.com/"
const API_KEY = '2kZpwAtORXujeZcl3UHcVX3nWQzOJj97'


export async function CallApi(gif){
    try{
    const response = await axios.get(`${BASE_URL}/v1/gifs/search?api_key=${API_KEY}&q=${gif}&limit=25`);
   //https://api.giphy.com/v1/gifs/search?api_key=2kZpwAtORXujeZcl3UHcVX3nWQzOJj97&q=life&limit=25
    console.log(response);
    return response;
    }
    catch(error){
            return (error)
    }

   }
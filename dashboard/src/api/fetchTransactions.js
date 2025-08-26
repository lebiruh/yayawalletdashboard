
import axios from "axios";
import {requestAllTransactionHeaders} from '../utils/requestHeaders';


// Define the base URL for the API
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchTransactions = async (page) => {
    
    // Construct the URL for the find-by-user endpoint
    let url = `${BASE_URL}/find-by-user?p=${page}`;
 
    // Add the API credentials as headers
    const headers = requestAllTransactionHeaders();

    // Make a GET request to the API and get the response
    const response = await axios.get(url, { headers });
    return response.data;
  };
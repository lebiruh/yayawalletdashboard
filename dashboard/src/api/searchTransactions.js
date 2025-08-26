import {requestSearchTransactionHeaders} from '../utils/requestHeaders';
import axios from "axios";


// Define the base URL for the API
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const searchTransactions = async (setSearchData, inputData) => {
    
    // Construct the URL for the search endpoint
    let url = `${BASE_URL}/search`;
    
    // Add the API credentials as headers
    const headers = requestSearchTransactionHeaders (inputData)

      // Make a GET request to the API and get the response
    const response = await axios.post(url, inputData, { headers });

    setSearchData(response.data);
  };

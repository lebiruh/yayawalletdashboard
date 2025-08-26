import CryptoJS from 'crypto-js';

// Define the API credentials
const API_KEY = import.meta.env.VITE_API_KEY;
const API_SECRET = import.meta.env.VITE_API_SECRET;


export function requestAllTransactionHeaders () {

  const timestamp = Date.now().toString(); // Get current timestamp in milliseconds
  const signature = signRequest(timestamp,'GET',`/api/en/transaction/find-by-user`,''); // Sign the request
  
  // Add the API credentials as headers
  const headers = {
    'YAYA-API-KEY': API_KEY,
    'YAYA-API-TIMESTAMP': timestamp,
    'YAYA-API-SIGN': signature,
  };

  return headers
}

export function requestSearchTransactionHeaders (inputData) {

  const timestamp = Date.now().toString(); // Get current timestamp in milliseconds
  const signature = signRequest(timestamp,'POST',`/api/en/transaction/search`,JSON.stringify(inputData)); // Sign the request
  
  // Add the API credentials as headers
  const headers = {
    'YAYA-API-KEY': API_KEY,
    'YAYA-API-TIMESTAMP': timestamp,
    'YAYA-API-SIGN': signature,
  };

  return headers
}

const signRequest = (timestamp, method,endpoint,body) => {
  const message = timestamp + method.toUpperCase() + endpoint + body;
  const signature = CryptoJS.HmacSHA256(message, API_SECRET).toString(CryptoJS.enc.Base64);
  return signature;
};
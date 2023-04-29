import axios from "axios";
import * as SecureStore from 'expo-secure-store';


export default axios.create({
    baseURL: "http://127.0.0.1:4010",
    headers: {
        Authorization: `Bearer ${SecureStore.getItemAsync('token')}`
    }
})
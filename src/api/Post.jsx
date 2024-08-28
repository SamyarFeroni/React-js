import axios from "axios";
import '../Data/db.json'
export default axios.create({
    baseURL:"  http://localhost:5173"
})
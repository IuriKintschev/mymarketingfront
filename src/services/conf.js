import Axios from "axios";

export const http = Axios.create({
	baseURL: "http://127.0.0.1:8000/"
})
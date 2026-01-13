import api from "./index";

export const getNeuraResponse = async (data) => {
    return api.post("ask",data)
}

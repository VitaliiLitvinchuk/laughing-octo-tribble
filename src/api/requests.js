/*
  Goto https://reqres.in/ for documentation on this api.
  
  If you haven't used axios, documentation here: https://github.com/axios/axios
  OR use any method / library you're comfortable with to perform the request(s).

  **** These stubs are just provided as a convienece, ****
  **** feel free to change whatever you like to accomplish the goal. ****
*/

import axios from "axios";

const baseUrl = "https://reqres.in/";

const baseAxios = axios.create({
    baseURL: baseUrl
});

export const getUsers = async () => {
    try {
        const res = await baseAxios.get(`api/users?per_page=12`);

        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};

// Bonus:
export const deleteUser = async (id) => {
    try {
        const res = await baseAxios.delete(`api/users/${id}`); // - 204
        // const res = await baseAxios.delete(`api/users?id=${id}`); // idk - 204
        console.log(res);

        return true;
    }
    catch (error) {
        console.log(error);
    }
};

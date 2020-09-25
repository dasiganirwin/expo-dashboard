import http from "../services/http-common";

const create = data => {
    return http.post("/users", data);
    };
    
    const update = (id, data) => {
    return http.put(`/users/${id}`, data);
    };

      
      export default {
        create,
        update,
    
      };
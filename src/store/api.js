import { apiUrl } from "@/assets/config";
import axios from "axios";

export default {
    branches: {
        resourceUrl: "branches",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "GET"
            });
        },
        newBranch(branch) {
            return axios({
                    url: `${apiUrl}/${this.resourceUrl}`,
                    method: "POST",
                    data: branch
                }
            )
        },
        updateBranch(branch) {
            return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${branch.id}`,
                    method: "PUT",
                    data: branch
                }
            )
        },
        deleteBranch(branch) {
            return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${branch.id}`,
                    method: "DELETE",
                }
            )
        }
    },

    calls: {
        resourceUrl: "calls",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "GET"
            });
        }
    },

    messages: {
        resourceUrl: "messages",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "GET"
            });
        }
    },

    rooms: {
        resourceUrl: "rooms",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "GET"
            });
        },
        newRoom(room) {
            return axios({
                    url: `${apiUrl}/${this.resourceUrl}`,
                    method: "POST",
                    data: room
                }
            )
        },
        updateRoom(room) {
            return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${room.id}`,
                    method: "PUT",
                    data: room
                }
            )
        },
        deleteRoom(room) {
            return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${room.id}`,
                    method: "DELETE",
                }
            )
        }
    },

    users: {
        resourceUrl: "users",
        getAll() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}`,
                method: "GET"
            });
        },
        newUser(user) {
            return axios({
                url: `${apiUrl}/registration`,
                method: "POST",
                data: user
                }
            )
        },
        updateUser(user) {
            return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${user.id}`,
                    method: "PUT",
                    data: user
                }
            )
        },
        deleteUser(user) {
            return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${user.id}`,
                    method: "DELETE",
                }
            )
        }
    }
};

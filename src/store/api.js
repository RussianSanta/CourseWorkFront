import { apiUrl } from "@/assets/config";
import axios from "axios";

export default {
    home: {
        resourceUrl: "home",
        getRooms() {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/all`,
                method: "GET",
            });
        },
        newRoom(room) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/new`,
                method: "POST",
                data: room
            });
        },
        connectRoom(room) {
            return axios({
                    url: `${apiUrl}/${this.resourceUrl}/connect`,
                    method: "POST",
                    data: room
                }
            )
        }
    },

    rooms: {
        resourceUrl: "room",
        getMembers(roomId) {
            return axios({
                url: `${apiUrl}/${this.resourceUrl}/${roomId}/members`,
                method: "GET",
            });
        },
        joinRoom(roomId, member) {
            return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${roomId}/connect`,
                    method: "POST",
                    data: member
                }
            )
        },
        leaveRoom(roomId, member) {
            return axios({
                    url: `${apiUrl}/${this.resourceUrl}/${roomId}/leave`,
                    method: "DELETE",
                    data: member
                }
            )
        }
    }
};

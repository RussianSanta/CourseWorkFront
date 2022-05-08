<template>
  <v-container>
    <v-row
        class="button-div"
    >
      <v-btn
          fab
          large
          color="red"
          @click="goAway"
      >
        <v-icon>
          mdi-phone
        </v-icon>
      </v-btn>
      <v-btn
          fab
          large
          dark
      >
<!--        TODO Как поменять иконку :(-->
        <v-icon>
          mdi-microphone
        </v-icon>
      </v-btn>
      <v-btn
          fab
          large
          dark
          @click="membersList"
      >
        <v-icon>
          mdi-human
        </v-icon>
      </v-btn>
    </v-row>
    <v-overlay
        :opacity="opacity"
        :value="overlay"
    >
      <v-data-table
          :headers="headers"
          :items="members"
          :items-per-page="5"
          class="elevation-1"
      ></v-data-table>
    </v-overlay>
  </v-container>

</template>

<script>
import router from "../router/router";
import api from "@/store/api";

export default {
  name: "Room",
  data: () => ({
    count: 40,
    overlay: false,
    opacity: 0.55,
    zIndex: 0,
    member: {
      id: '',
      name: '',
      roomId: ''
    },
    members: [],
    headers: [
      {
        text: 'Имя',
        align: 'start',
        sortable: false,
        value: 'name',
      }
      ],
  }),

  methods: {
    goAway() {
      this.member.name = this.$store.getters.Name
      this.member.roomId = this.$store.getters.RoomId
      this.member.id = this.$store.getters.MemberId
      api.rooms.leaveRoom(this.$store.getters.RoomId,this.member)
      router.push("/home")
    },
    membersList() {
      this.overlay = ! this.overlay
      api.rooms.getMembers(this.$store.getters.RoomId).then(response => this.members = response.data)
    }
  }
}
</script>

<style scoped>

.button-div {
  width: 30%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 10%;
  left: 35%;
  z-index: 10;
}
</style>
<template>
  <v-container>
    <v-card
        elevation="8"
        id="main-card"
    >
      <v-card-title>
        <v-card-text>
          <h1>Подключение</h1>
        </v-card-text>
      </v-card-title>

      <v-card-text>
        <v-text-field
            solo
            label="Введите ваше имя"
            v-model="memberName"
            clearable
        ></v-text-field>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn
            elevation="4"
            class="main-button"
            @click="enterRoom"
        >
          Зайти
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import router from "../router/router";
import api from "@/store/api";
import MainPage from "@/views/MainPage";

export default {
  name: "Lobby",
  data: ()=> ({
    memberName: '',
    member: {
      name: '',
      roomId: ''
    },
    serverResponse: ''
  }),
  methods: {
    enterRoom() {
      this.member.name = this.memberName
      this.member.roomId = this.$store.getters.RoomId
      this.$store.commit("SetName", this.memberName)
      api.rooms.joinRoom(this.member.roomId,this.member).then(response => (this.$store.commit("SetMemberId",response.data.id)))
      router.push("/room")
    }
  }
}
</script>

<style scoped>
#main-card {
  width: 40%;
  margin: 15% auto auto;
  padding: 5px 5px 15px;
}

.main-button {
  width: 150px;
}
</style>
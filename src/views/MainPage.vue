<template>
  <v-container>
    <v-card
        elevation="8"
        id="main-card"
    >
      <v-card-title>
        <v-card-text>
          <h1>TalkAbout</h1>
        </v-card-text>
      </v-card-title>

      <v-card-text>
        <v-text-field
            solo
            label="Код комнаты"
            v-model="roomId"
            clearable
        ></v-text-field>

        <v-text-field
            solo
            label="Код входа"
            v-model="roomCode"
            clearable
        ></v-text-field>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn
            elevation="4"
            class="main-button"
            @click="createRoom()"
        >
          Создать
        </v-btn>
        <v-btn
            elevation="4"
            class="main-button"
            @click="connectRoom"
        >
          Подключиться
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("../assets/img/back1.jpg");
  background-size: cover;
}

#main-card {
  width: 40%;
  margin: 15% auto auto;
  padding: 5px 5px 15px;
}

.main-button {
  width: 150px;
}
</style>

<script>
import router from "../router/router";
import api from "@/store/api";
export default {
  name: "MainPage",
  data:()=> ({
    roomId: '',
    roomCode: '',
    roomData: {
      id: '',
      code: ''
    },
    serverResponse: ''
  }),
  methods: {
    createRoom() {
      this.roomData.id = this.roomId
      this.roomData.code = this.roomCode
      this.$store.commit('SetRoomId',this.roomId)
      api.home.newRoom(this.roomData).then(response => (this.serverResponse = response.data))
      if (this.serverResponse.id === this.roomId) {
        router.push("/lobby")
      } else {
        // alert("Повторите попытку создания комнаты.")
      }
    },

    connectRoom() {
      this.roomData.id = this.roomId
      this.roomData.code = this.roomCode
      this.$store.commit('SetRoomId',this.roomId)
      api.home.connectRoom(this.roomData).then(response => (this.serverResponse = response.data))
      if (this.serverResponse) {
        router.push("/lobby")
      } else {
        // alert("Комнаты с таким id не найдено")
      }
    }
  }
}
</script>

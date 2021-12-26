<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <router-link to="/branches">Ветки</router-link> |
        <router-link to="/calls">Звонки</router-link> |
        <router-link to="/messages">Сообщения</router-link> |
        <router-link to="/rooms">Комнаты</router-link> |
        <router-link to="/users">Пользователи</router-link>
<!--        <router-link to="/test">Тест</router-link>-->
      </div>
      <router-view/>
    </div>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("assets/img/back1.jpg");
  background-size: cover;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #04272d;

    &.router-link-exact-active {
      color: #08ac87;
    }
  }
}
</style>

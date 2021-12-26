<template>
  <v-container>
    <v-card class="mainCard">
      <v-card-title>
        Сообщения
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Поиск"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="messages"
          :search="search"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import api from "@/store/api";

export default {
  name: "MessagesList",
  data: () => ({
    search: '',
    messages: [],
    headers: [
      {
        text: 'Id',
        align: 'start',
        value: 'id',
      },
      {text: 'Текст', value: 'text'},
      {text: 'Дата', value: 'date'},
      {text: 'Отправитель', value: 'owner.id'},
      {text: 'Ветка', value: 'branch.id'},
    ],
  }),
  mounted() {
    api.messages.getAll().then(response => (this.messages = response.data))
  }
}
</script>

<style scoped>

</style>
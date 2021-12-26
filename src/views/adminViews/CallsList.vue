<template>
  <v-container>
    <v-card class="mainCard">
      <v-card-title>
        Звонки
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
          :items="calls"
          :search="search"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import api from "@/store/api";

export default {
  name: "CallsList",
  data: () => ({
    search: '',
    calls: [],
    headers: [
      {
        text: 'Id',
        align: 'start',
        value: 'id',
      },
      {text: 'Статус', value: 'status'},
      {text: 'Начало', value: 'startDate'},
      {text: 'Длительность', value: 'duration'},
      {text: 'Комната', value: 'room.id'},
    ],
  }),
  mounted() {
    api.calls.getAll().then(response => (this.calls = response.data))
  }
}
</script>

<style scoped>

</style>
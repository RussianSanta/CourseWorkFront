<template>
  <v-container>
    <v-card class="mainCard">
      <v-card-title>
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
      :items="rooms"
      :search="search"
      class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
          flat
      >
        <v-toolbar-title>Комнаты</v-toolbar-title>
        <v-divider
            class="mx-4"
            inset
            vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
            v-model="dialog"
            max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
            >
              Добавить
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.name"
                        label="Название"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4">
                    <v-select
                        :items="usersId"
                        v-model="editedItem.ownerId"
                        label="Владелец"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
              >
                Отмена
              </v-btn>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
              >
                Сохранить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Вы уверены?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Отмена</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
          small
          @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
          color="primary"
          @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import api from "@/store/api";

export default {
  name: "TestView",
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Id',
        align: 'start',
        value: 'id',
      },
      { text: 'Название', value: 'name' },
      { text: 'Владелец', value: 'owner.id' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    rooms: [],
    users: [],
    usersId: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      name: '',
      ownerId: '',
      owner: ''
    },
    defaultItem: {
      id: '',
      name: '',
      ownerId: '',
      owner: ''
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Создание' : 'Изменение'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      api.rooms.getAll().then(response => (this.rooms = response.data))
      api.users.getAll().then(response => (this.users = response.data))
    },

    editItem (item) {
      this.usersId = this.users.map(item => item.id)
      this.editedIndex = this.rooms.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editedItem.ownerId = item.owner.id
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.rooms.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.rooms.splice(this.editedIndex, 1)
      api.rooms.deleteRoom(this.editedItem)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      this.editedItem.owner = this.users.find(value => value.id === this.editedItem.ownerId);
      if (this.editedIndex > -1) {
        Object.assign(this.rooms[this.editedIndex], this.editedItem)
        api.rooms.updateRoom(this.editedItem)
      } else {
        api.rooms.newRoom(this.editedItem).then(response => (this.rooms.push(response.data)))
      }
      this.close()
    },
  },
}
</script>

<style scoped>

</style>
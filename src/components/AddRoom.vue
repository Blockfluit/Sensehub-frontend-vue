<script>
import { storeToRefs } from 'pinia'
import { useMainStore } from '../cinema/CinemaStore'
import api from '../services/websocket/websocket-service'
import { ref } from 'vue'

const mainStore = useMainStore()
const { ws } = storeToRefs(mainStore)
const roomName = ref('')
const thumbnail = ref('')

function onClick() {
    api.postRoom(ws.value, roomName.value, thumbnail.value)
    roomName.value = ''
    thumbnail.value = ''
} 

export default {
    name: "AddRoom",
    data() {
        return {
            
        }
    }
}

</script>

<template>
    <div>
        <h1>Add Room</h1>
        <p>Room name:</p>
        <input type="text" placeholder="Room name" v-model="roomName">
        <input type="text" placeholder="thumbnail url" v-model="thumbnail">
        <button @click="onClick()">Add room</button>
    </div>
</template>

<style scoped>
</style>
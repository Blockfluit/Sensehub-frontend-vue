const getters = {
    getWs: (state) => state.ws,
    getClientName: (state) => state.clientName,
    getCurrentRoom: (state) => state.currentRoom,
    getRoomName: (state) => state.roomName,
    getRooms: (state) => state.rooms,
    getChat: (state) => state.chat,
    getTime: (state) => state.time,
    getVideo: (state) => state.video
}

export default getters
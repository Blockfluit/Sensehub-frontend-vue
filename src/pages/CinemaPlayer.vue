<script>
import Chat from "../components/Chat.vue"
import ClientPanel from "../components/ClientPanel.vue"
import AdminPanel from "../components/AdminPanel.vue"
import PlaylistPanel from "../components/PlaylistPanel.vue"
import { mapGetters, mapMutations } from "vuex"
import api from "../services/websocket/websocket-service"
import feather from "feather-icons"

export default {
    name: "CinemaPlayer",
    components: { ClientPanel, AdminPanel, Chat, PlaylistPanel },
    data() {
        return {
            latency: 0,
        }
    },
    methods: {
        ...mapMutations([
            "setTime",
            "setChat",
            "setCurrentRoom",
            "setVideo",
            "setVideos",
        ]),
        ping() {
            api.ping(this.getWs)
            this.latency -= performance.now()
        },
        formatTime(tempTime) {
            let time = "00:00:00"

            if (!isNaN(tempTime) || tempTime !== undefined)
                time = new Date(parseInt(tempTime) * 1000)
                    .toISOString()
                    .substr(11, 8)

            return time
        },
        formatPath(path) {
            let fileName = this.getCurrentRoom.name
            if (path !== "") {
                fileName = path
                    .replace(/\.[^/.]+$/, "")
                    .split("/")
                    .pop()
            }
            return fileName
        },
        toLobby() {
            this.setVideo(null)
            this.setCurrentRoom(null)
            api.getRooms(this.getWs)
        },
    },
    mounted() {
        this.setVideo(this.$refs.video)

        this.getWs.onmessage = (message) => {
            let msg = JSON.parse(message.data)

            if (msg[0].method === "patch" && msg[0].type === "status") {
                this.ping()
                if (this.getCurrentRoom.path !== msg[1].path)
                    this.$refs.video.load()
                this.setCurrentRoom(msg[1])
                if (this.getCurrentRoom.path === "") this.getCurrentRoom.time = 0
                this.$refs.video.volume = this.getVolume / 100
                this.$refs.video.currentTime = msg[1].time
                msg[1].play ? this.$refs.video.play() : this.$refs.video.pause()
            } else if (msg[0].method === "patch" && msg[0].type === "videos") {
                this.setVideos(msg[1])
            } else if (msg[0].method === "trace" && msg[0].type === "pong") {
                this.latency += performance.now()
                this.$refs.video.currentTime += this.latency / 1000 / 2
            } else if (msg[0].method === "patch" && msg[0].type === "chat") {
                this.setChat(msg[1])
            }
        }
        feather.replace()
        api.getStatus(
            this.getWs,
            this.getCurrentRoom.name,
            this.getUser.username
        )

        this.$refs.video.ontimeupdate = () => {
            if (this.$refs.video !== undefined) {
                this.setTime(this.$refs.video.currentTime)
            }
        }
    },
    computed: {
        ...mapGetters([
            "getWs",
            "getCurrentRoom",
            "getVideo",
            "getTime",
            "getChat",
            "getUser",
            "getVolume",
        ]),
        time: {
            get() {
                return this.getTime
            },
            set(value) {
                this.$refs.video.currentTime = value
                this.setTime(value)
            },
        },
        banner: {
            cache: false,
            get() {
                return this.getWs !== undefined && this.getWs.readyState === 3 ?
                    "https://api.sensegang.nl/thumbnails/cinema_banner_noconn.jpg" :
                    "https://api.sensegang.nl/thumbnails/cinema_banner.jpg"
            }
        },
    },
}
</script>

<template>
    <div class="container">
        <div @click="toLobby()" class="back-wrapper">
            <i data-feather="chevron-left"></i>
            <h1 style="margin-left: 10px;">{{ getCurrentRoom.name }}</h1>
        </div>
        <div class="video-chat-wrapper">
            <div class="horizontal-container">
                <video ref="video" class="video-player" :poster="banner">
                    <source :src="getCurrentRoom.path" type="video/mp4" />
                </video>
                <div class="controls">
                    <div class="control-wrapper">
                        <div class="info">
                            <p style="flex-grow: 1; width: fit-content;">{{ formatPath(getCurrentRoom.path) }}</p>
                            <p style="margin: 0px 10px">-</p>
                            <p style="flex-grow: 1; width: fit-content;">{{ `${formatTime(this.time)} /
                            ${formatTime(getCurrentRoom.duration)}` }}</p>
                        </div>
                        <ClientPanel />
                    </div>
                </div>
            </div>
            <div class="chat">
                <Chat />
            </div>
        </div>
        <PlaylistPanel />
        <div>
            <AdminPanel v-if="getUser.isAdmin" />
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 0px 50px;
    margin-top: 80px;
}

.video-chat-wrapper {
    display: flex;
}

.back-wrapper {
    display: flex;
    align-items: center;
    width: 70vw;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
}

.chat {
    display: flex;
    flex-grow: 1;
}

.info {
    display: flex;
    margin-right: 70px;
}

video::-webkit-media-controls-enclosure {
    display: none !important;
}

.horizontal-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
}

.video-player {
    width: 100%;
    max-height: 60vh;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    background-color: black;
    transition: all 0.3s ease;
}

.controls {
    position: relative;
    background-color: #1e1e1e;
    padding: 10px 0px;
    left: 0;
    bottom: 0;
    width: 100%;
}

.control-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
}

@media screen and (max-width: 1355px) {
    .container {
        padding: 0px 10px;
    }

    .video-player {
        margin: 0px 0px 10px 0px;
    }

    .chat {
        justify-content: center;
    }

    .video-chat-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .horizontal-container {
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 759px) {
    .container {
        padding: 0px 10px;
    }

    .control-wrapper {
        justify-content: center;
        flex-direction: column;
    }

    .info {
        margin: 0;
    }

    .video-player {
        margin: 0px 0px 10px 0px;
        width: 100%;
    }

    .back-wrapper {
        width: 95vw;
    }
}

@media screen and (max-width: 460px) {
    .cinema-card {
        min-width: 250px;
        max-width: 250px;
    }

    .room-card {
        min-width: 250px;
        max-width: 250px;
    }
}
</style>

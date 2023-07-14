<template>
    <div class="nav-bar">
        <div class="nav-bar__content">
            <div class="nav-bar__main">
                <router-link :to="{ name: 'home' }">
                    <div class="logo-container">
                        <img src="/icons/dellekes_logo.png" alt="logo" class="logo">
                        <span class="logo-text">DellekesHub</span>
                    </div>
                </router-link>
            </div>
            <img @click="onHamburgerClick" ref="hamburger" src="icons/bars.svg" class="hamburger" alt="">
            <div class="nav-bar__items" :class="{ 'dropdown': showDropdown }">
                <div class="nav-bar__items__link">
                    <router-link :to="{ name: 'cinema' }">Cinema</router-link>
                </div>
                <div class="nav-bar__items__link">
                    <a href="https://docs.google.com/spreadsheets/d/1a29YOR_nIMIFddnmBEm3yQW-2lBIMUqtfEFCGpSlVK8/edit?usp=sharing"
                        target="_blank">Requests</a>
                </div>
                <div v-if="getUser.isAdmin" class="nav-bar__items__link">
                    <router-link :to="{ name: 'upload' }">Upload</router-link>
                </div>
                <div v-if="getUser.isAdmin" class="nav-bar__items__link">
                    <router-link :to="{ name: 'admin' }">Admin</router-link>
                </div>
                <div class="nav-bar__items__link">
                    <a @click="logout">Logout</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.logo-container {
    display: flex;
    align-items:end;
    padding: 10px 0px 4px 0px;
    height: 65px;
}
.logo {
    position: absolute;
    height: 50px;
    filter:brightness(70%);
    z-index: 1;
    margin-bottom: 10px;
}
.logo-text {
    z-index: 2;
    padding: 0px;
    font-weight: 300;
    font-size: 14px;
    height: 12px;
}
</style>
<script>
import { LOGOUT } from "@/store/actions.type";
import { mapGetters } from "vuex";

export default {
    name: "NavBar",
    data() {
        return {
            showDropdown: false
        }
    },
    watch: {
        $route() {
            this.showDropdown = false
        }
    },
    methods: {
        onHamburgerClick() {
            this.showDropdown = !this.showDropdown
        },
        logout() {
            this.$store.dispatch(LOGOUT)
            this.$router.push({ name: 'login' })
        }
    },
    computed: {
        ...mapGetters(['getUser'])
    }
}
</script>
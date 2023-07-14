<template>
    <div class="main-layout">
        <NavBar />
        <ul class="background">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <router-view id="page" />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
    name: "MainLayout",
    components: { NavBar }
}
</script>

<style scoped>
@keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: #1e1e1e;
    overflow: hidden;
}
.background li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 46s linear infinite;
}




.background li:nth-child(0) {
    left: 37%;
    width: 54px;
    height: 54px;
    bottom: -54px;
    animation-delay: 1s;
}
.background li:nth-child(1) {
    left: 30%;
    width: 57px;
    height: 57px;
    bottom: -57px;
    animation-delay: 2s;
}
.background li:nth-child(2) {
    left: 66%;
    width: 22px;
    height: 22px;
    bottom: -22px;
    animation-delay: 7s;
}
.background li:nth-child(3) {
    left: 80%;
    width: 42px;
    height: 42px;
    bottom: -42px;
    animation-delay: 1s;
}
.background li:nth-child(4) {
    left: 9%;
    width: 39px;
    height: 39px;
    bottom: -39px;
    animation-delay: 16s;
}
.background li:nth-child(5) {
    left: 1%;
    width: 29px;
    height: 29px;
    bottom: -29px;
    animation-delay: 1s;
}
.background li:nth-child(6) {
    left: 33%;
    width: 41px;
    height: 41px;
    bottom: -41px;
    animation-delay: 7s;
}
.background li:nth-child(7) {
    left: 15%;
    width: 29px;
    height: 29px;
    bottom: -29px;
    animation-delay: 15s;
}
.background li:nth-child(8) {
    left: 85%;
    width: 49px;
    height: 49px;
    bottom: -49px;
    animation-delay: 25s;
}
.background li:nth-child(9) {
    left: 6%;
    width: 20px;
    height: 20px;
    bottom: -20px;
    animation-delay: 41s;
}
.background li:nth-child(10) {
    left: 74%;
    width: 24px;
    height: 24px;
    bottom: -24px;
    animation-delay: 2s;
}
.background li:nth-child(11) {
    left: 1%;
    width: 36px;
    height: 36px;
    bottom: -36px;
    animation-delay: 45s;
}
.background li:nth-child(12) {
    left: 65%;
    width: 45px;
    height: 45px;
    bottom: -45px;
    animation-delay: 12s;
}
.background li:nth-child(13) {
    left: 75%;
    width: 23px;
    height: 23px;
    bottom: -23px;
    animation-delay: 17s;
}
.background li:nth-child(14) {
    left: 70%;
    width: 29px;
    height: 29px;
    bottom: -29px;
    animation-delay: 26s;
}
.background li:nth-child(15) {
    left: 29%;
    width: 48px;
    height: 48px;
    bottom: -48px;
    animation-delay: 5s;
}
.background li:nth-child(16) {
    left: 89%;
    width: 28px;
    height: 28px;
    bottom: -28px;
    animation-delay: 38s;
}
.background li:nth-child(17) {
    left: 41%;
    width: 27px;
    height: 27px;
    bottom: -27px;
    animation-delay: 3s;
}
.background li:nth-child(18) {
    left: 9%;
    width: 54px;
    height: 54px;
    bottom: -54px;
    animation-delay: 14s;
}
.background li:nth-child(19) {
    left: 53%;
    width: 49px;
    height: 49px;
    bottom: -49px;
    animation-delay: 60s;
}
.background li:nth-child(20) {
    left: 21%;
    width: 56px;
    height: 56px;
    bottom: -56px;
    animation-delay: 91s;
}
.background li:nth-child(21) {
    left: 68%;
    width: 21px;
    height: 21px;
    bottom: -21px;
    animation-delay: 65s;
}
.background li:nth-child(22) {
    left: 29%;
    width: 20px;
    height: 20px;
    bottom: -20px;
    animation-delay: 3s;
}
.background li:nth-child(23) {
    left: 75%;
    width: 49px;
    height: 49px;
    bottom: -49px;
    animation-delay: 38s;
}
.background li:nth-child(24) {
    left: 20%;
    width: 39px;
    height: 39px;
    bottom: -39px;
    animation-delay: 91s;
}
.background li:nth-child(25) {
    left: 28%;
    width: 49px;
    height: 49px;
    bottom: -49px;
    animation-delay: 68s;
}
.background li:nth-child(26) {
    left: 4%;
    width: 28px;
    height: 28px;
    bottom: -28px;
    animation-delay: 99s;
}
.background li:nth-child(27) {
    left: 47%;
    width: 21px;
    height: 21px;
    bottom: -21px;
    animation-delay: 105s;
}
.background li:nth-child(28) {
    left: 76%;
    width: 47px;
    height: 47px;
    bottom: -47px;
    animation-delay: 122s;
}
.background li:nth-child(29) {
    left: 36%;
    width: 43px;
    height: 43px;
    bottom: -43px;
    animation-delay: 124s;
}
.background li:nth-child(30) {
    left: 30%;
    width: 29px;
    height: 29px;
    bottom: -29px;
    animation-delay: 3s;
}
.background li:nth-child(31) {
    left: 77%;
    width: 22px;
    height: 22px;
    bottom: -22px;
    animation-delay: 89s;
}
.background li:nth-child(32) {
    left: 73%;
    width: 40px;
    height: 40px;
    bottom: -40px;
    animation-delay: 27s;
}
.background li:nth-child(33) {
    left: 14%;
    width: 39px;
    height: 39px;
    bottom: -39px;
    animation-delay: 34s;
}
.background li:nth-child(34) {
    left: 24%;
    width: 40px;
    height: 40px;
    bottom: -40px;
    animation-delay: 130s;
}
.background li:nth-child(35) {
    left: 23%;
    width: 51px;
    height: 51px;
    bottom: -51px;
    animation-delay: 119s;
}
.background li:nth-child(36) {
    left: 86%;
    width: 29px;
    height: 29px;
    bottom: -29px;
    animation-delay: 31s;
}
.background li:nth-child(37) {
    left: 52%;
    width: 30px;
    height: 30px;
    bottom: -30px;
    animation-delay: 131s;
}
.background li:nth-child(38) {
    left: 22%;
    width: 45px;
    height: 45px;
    bottom: -45px;
    animation-delay: 33s;
}
.background li:nth-child(39) {
    left: 84%;
    width: 44px;
    height: 44px;
    bottom: -44px;
    animation-delay: 193s;
}
.background li:nth-child(40) {
    left: 57%;
    width: 31px;
    height: 31px;
    bottom: -31px;
    animation-delay: 38s;
}
.background li:nth-child(41) {
    left: 33%;
    width: 26px;
    height: 26px;
    bottom: -26px;
    animation-delay: 117s;
}
.background li:nth-child(42) {
    left: 23%;
    width: 46px;
    height: 46px;
    bottom: -46px;
    animation-delay: 74s;
}
.background li:nth-child(43) {
    left: 15%;
    width: 54px;
    height: 54px;
    bottom: -54px;
    animation-delay: 148s;
}
.background li:nth-child(44) {
    left: 15%;
    width: 41px;
    height: 41px;
    bottom: -41px;
    animation-delay: 154s;
}
.background li:nth-child(45) {
    left: 53%;
    width: 38px;
    height: 38px;
    bottom: -38px;
    animation-delay: 213s;
}
.background li:nth-child(46) {
    left: 21%;
    width: 30px;
    height: 30px;
    bottom: -30px;
    animation-delay: 46s;
}
.background li:nth-child(47) {
    left: 5%;
    width: 55px;
    height: 55px;
    bottom: -55px;
    animation-delay: 115s;
}
.background li:nth-child(48) {
    left: 81%;
    width: 38px;
    height: 38px;
    bottom: -38px;
    animation-delay: 4s;
}
.background li:nth-child(49) {
    left: 89%;
    width: 39px;
    height: 39px;
    bottom: -39px;
    animation-delay: 208s;
}
</style>
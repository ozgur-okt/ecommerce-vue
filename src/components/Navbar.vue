<template>
  <div class="container" :class="{ 'sidebar-open': isSidebarOpen }">
    <div class="sidebar">
      <span class="menu"> MENU </span>
      <img src="../assets/close-icon.svg" alt="" class="close-button" @click="closeSidebar">
      <!-- Sidebar content -->
      <div class="profile">
        <img class="profile-pic" src="../assets/avatar.png" />
        <div class="profile-info">
          <p>Teresa Owens</p>
          <p> teresa.owens@gmail.com </p>
          <img src="../assets/profile-icon.svg" alt="" class="profile-icon">
          <span class="my-profile">My Profile</span>

          <img src="../assets/signout-icon.svg" alt="" class="signout-icon">
          <span class="signout">Sign Out</span>
        </div>
      </div>
      <div>
        <div v-for="(title, index) in titles" :key="index" class="sidebar-options">
          <p>{{ title.name }}</p>
          <p v-for="(subtitle, i) in title.subtitles" :key="i">{{ subtitle }}</p>
        </div>
      </div>
    </div>
    <div class="top-bar">
      <!-- Main content -->
      <div class="bars">
        <img src="../assets/bars.svg" alt="Bars icon" @click="openSidebar">
      </div>
      <div class="puma-header">
        <div class="puma-logo"></div>
        <div class="puma-logotext">EXCLUSİVE</div>
      </div>
      <div class="card">
        <div class="card-price">
          <p>$ 0.00</p>
          <p>Card is empty</p>
        </div>
        <router-link to="/cart">
          <img src="../assets/cart.png" alt="Card icon">
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<style>
.container {
  display: flex;
  position: relative;
}

.sidebar {
  width: 350px;
  background-color: #fff;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -350px;
  z-index: 999;
  transition: right 0.3s ease-in-out;
}

.sidebar-open .sidebar {
  left: 0;
}

.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background-color: rgba(101, 101, 101, 0.589);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.sidebar-open.container::before {
  opacity: 1;
  z-index: 1;
}

/* Header of sidebar */

.menu {
  position: relative;
  top: 20px;
  left: 35px;
  letter-spacing: 3px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 30px;
  font-size: 2.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 100;
}

/* Profile section in sidebar */
.profile {
  display: flex;
  border-top: 1px solid rgba(128, 128, 128, 0.44);
  border-bottom: 1px solid rgba(128, 128, 128, 0.44);
  margin-top: 50px;
}

.profile-info {
  line-height: 3px;
  margin-left: 20px;
  padding-top: 10px;
}

.profile-info p:nth-child(1) {
  font-size: 16px;
  font-weight: bold;
}

.profile-info p:nth-child(2) {
  font-size: 12px;
  color: gray;
  margin-bottom: 20px;
}

.profile-info span {
  font-size: 14px;
  position: relative;
  bottom: 6px;
  left: 6px;
  font-weight: bold;
}

.my-profile {
  color: #3175c3
}

.signout {
  color: rgba(128, 128, 128, 0.631);
}

.profile-info .signout-icon {
  margin-left: 27px;
}

/* Top navigation bar */

.top-bar {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 90px 0 90px;
  margin: 20px 0 0 0;
}

.top-bar img {
  cursor: pointer;
  height: 40px;
}

.bars {
  width: 111px;
}

.puma-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 310px;
  color: black;
}

.puma-logo {
  width: 170px;
  height: 100%;
  padding-right: 20px;
  border-right: 2px solid rgba(128, 128, 128, 0.45);
  background-image: url('../assets/puma-logo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 140px;
}

.puma-logotext {
  display: flex;
  height: 100%;
  width: 140px;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
}

.card {
  display: flex;
  line-height: 2px;
  text-align: right;
}

.card p:nth-child(1) {
  font-size: 14px;
  font-weight: 500;
}

.card p:nth-child(2) {
  color: gray;
  font-size: 12px;
  font-weight: 500;
}

.card .card-price {
  margin: 0 8px 0 0
}

/* Sidebar options below profile */

.sidebar-options {
  letter-spacing: 2px;
  margin: 55px 0 0 30px;
  cursor: pointer;
}

.sidebar-options p:nth-child(1) {
  color: gray;
}

@media (max-width: 767px) {
  .top-bar{
    padding: 0 60px 0 60px;
  }
  .bars {
    width: 55px;
  }

  .card-price {
    display: none;
  }

  .puma-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
  }

  .puma-logo {
    border: none;
    width: 120px;
    padding-right: 0px;
    background-size: 120px;
  }

  .puma-logotext {
    height: 40px;
    width: 120px;
    margin-right: 19px;
  }

}
</style>
  
<script>
export default {
  name: "Navbar",
  data() {
    return {
      isSidebarOpen: false,
      titles: [
        { name: 'COLLECTIONS', subtitles: ['PUMA X PERKS AND MINI', 'PUMA X POKEMON', 'PUMA X CHİLDHOOD DREAMS'] },
        { name: 'ACCOUNT', subtitles: ['MY PROFILE', 'ORDER HISTORY', 'SETTINGS', 'SIGN OUT'] }
      ]
    }
  },
  methods: {
    openSidebar() {
      this.isSidebarOpen = true;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    }
  }
}
</script>
  
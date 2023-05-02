<template>
  <div class="signin">
    <div class="signin__container">
      <div class="signin__header">
        <div class="signin__logo"></div>
        <div class="signin__logotext">EXCLUSİVE</div>
      </div>
      <form>
        <label>
          E-MAİL
          <input type="email" v-model="email">
        </label>
        <label>
          PASSWORD
          <input type="password" v-model="password">
        </label>
        <router-link to="/products">
          <button type="submit">SIGN IN</button>
        </router-link>
      </form>
      <div> Do you have an account? &nbsp;&nbsp; <a href="#"><b>Sign Up</b></a></div>
      <div class="footer">
        <p>&copy;2022 PUMA Company <span class="separator"> All Rights Reserved </span></p>
        <p>Privacy Statement &nbsp; &bull; &nbsp; Privacy Statement </p>
      </div>
    </div>
    <div class="signin__image"></div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      //this.$router.push('/home')
    }
  }
}
</script>
<style scoped>

.signin {
  display: flex;
  height: 100vh;
  flex-direction: row;
}

.signin__image {
  flex: 1;
  background-image: url('../assets/Login/rectangle4.png');
  background-size: cover;
  background-position: center;
}

.signin__container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
}

.signin__header {
  display: flex;

  height: 130px;
  width: 310px;
  margin-bottom: 50px;
  margin-top: 130px;
  color: gray;
}

.signin__logo {
  width: 170px;
  height: 130px;
  padding-right: 25px;
  border-right: 2px solid rgba(128, 128, 128, 0.45);
  background-image: url('../assets/puma-logo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 140px;
}

.signin__logotext {
  display: flex;
  height: 100%;
  width: 140px;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
}

.signin__container form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  letter-spacing: 3px;
}

.signin__container label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 12px;
  font-weight: 800;
}

.signin__container input {
  display: block;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-left: 3px solid black;
  padding-left: 0.5em;
  width: 300px;
  height: 20px;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  border-radius: 2px;
}

.signin__container button {
  padding: 0.5rem;
  background-color: #101010;
  color: #fff;
  border: none;
  width: 317px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 40px;
  letter-spacing: 3px;
  /*transition: background-color 0.2s ease;*/
}

.signin__container a {
  color: #101010;
  text-decoration: none;
}

.signin__container .footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: gray;
  text-align: center;
  line-height: 1px;
  margin-top: 50px;
}

.signin__container .separator {
  border-left: 1px solid gray;
  padding-left: 0.7em;
  margin-left: 0.5em;
}

@media (max-width: 767px) {
  .signin__image {
    display: none;
  }
  .signin__container .footer {
    line-height: 20px;
  }
}
</style>

  

  
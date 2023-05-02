<template>
    <div class="footer">
        <div class="footer-logo"></div>
        <div class="footer-text">
            <p>&copy;2022 PUMA Company <span class="footer-separator"> All Rights Reserved </span></p>
            <p>Privacy Statement &nbsp; &bull; &nbsp; Privacy Statement </p>
        </div>
    </div>
</template>
  
<style>
.footer {
    margin: 60px 0 150px 0;
}

.footer-logo {
    width: 170px;
    height: 100px;
    background-image: url('../assets/puma-logo.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 140px;
    display: block;
    margin: auto;
}

.footer-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: gray;
    line-height: 1px;
    margin-top: 50px;
}

.footer-separator {
    border-left: 1px solid gray;
    padding-left: 0.7em;
    margin-left: 0.5em;
}
</style>
  
<script>
export default {
    name: 'Footer',
}
</script>
  
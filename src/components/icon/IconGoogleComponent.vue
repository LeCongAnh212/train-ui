<template>
  <div class="google-logo"></div>
</template>

<style>
.google-logo {
  position: relative;
  width: 30px;
  height: 30px;
  padding: 0;
  border-top: 6px solid #ea4335;
  border-right: 6px solid #4285f4;
  border-bottom: 6px solid #34a853;
  border-left: 6px solid #fbbc05;
  border-radius: 50%;
  background-color: azure;
}

.google-logo::before {
  content: "";
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  width: 7px;
  height: 6px;
  background-color: #4285f4;
}

.google-logo::after {
  content: "";
  position: absolute;
  top: -12px;
  right: -10px;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-right: 20px solid rgb(255, 255, 255);
}
</style>

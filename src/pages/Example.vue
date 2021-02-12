<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="text-white toolbarT">
        <q-toolbar class="row full-height justify-center">
          <q-btn flat>
            <q-icon name="laberu" />
            <q-toolbar-title class="titleName"
              ><strong>LABERU.AI</strong>
            </q-toolbar-title>
          </q-btn>
          <q-space />
          <q-btn
            flat
            round
            dense
            icon="search"
            class="q-mr-xs text-blue-grey-7"
          />
          <q-btn flat round dense icon="group_add" class="text-blue-grey-7" />
        </q-toolbar>
      </div>
    </q-header>
    <q-parallax height="720">
      <div class="area">
        <ul class="circles">
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
      </div>
    </q-parallax>

    <q-page-container style="padding-top: 0">
      <div class="context">
        <div class="row justify-around">
          <div class="col-md-6">
            <q-card class="exCard">
              <q-card-actions vertical>
                <q-img src="../images/exImg.png" class="exImg" />
              </q-card-actions>
            </q-card>

            <q-card class="exCard" style="margin-top:20px">
              <q-card-actions vertical>
                <q-img src="../images/exDes.png" height="10%" />
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-md-6">
            <q-card class="rightCard">
              <q-card-actions vertical>
                <div class="exTitle">Tutorial</div>

                <div class="exDes">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris placerat libero sit amet ultrices lobortis. Sed sed
                  aliquet nisl. Sed in pulvinar turpis, vel lacinia lectus.
                  Pellentesque hendrerit, libero a ullamcorper tempor, nibh
                  lacus finibus velit, eget tincidunt odio augue quis turpis. In
                  nec justo turpis. Aliquam non ante sed lectus euismod
                  malesuada. Vestibulum hendrerit lobortis neque. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Donec a orci
                  vehicula, fringilla orci eget,
                </div>

                <div class="btnStart">
                  <q-btn
                    class="btnStartColor"
                    label="START"
                    @click="$router.push('/index')"
                  />
                </div>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

export default {
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style>
.btnStartColor {
  color: white;
  width: 60%;
  background-color: #4e54c8;
}

.btnStart {
  padding: 40px 10px 10px 10px;
  text-align: center;
}

.exTitle {
  padding: 10px 10px 10px 10px;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
}

.exDes {
  padding: 10px 20px 10px 20px;
  text-align: center;
  font-size: 18px;
}

.exCard {
  left: 20%;
  height: auto;
  width: 50%;
  border-radius: 10px;
}

.rightCard {
  right: 10%;
  padding-bottom: 15px;
  height: auto;
  width: 80%;
  border-radius: 10px;
}

.exImg {
  width: 100%;
  height: 50%;
}

.q-pa-md {
  padding: 16px 16px;
  margin: -20px 0 0 0;
}

.q-textarea .q-field__native {
  resize: none;
  padding-top: 17px;
  min-height: 52px;
}

.toolbarT {
  height: 80px;
  background: #f8f8f8;
}

.titleName {
  color: #666877;
}

.context {
  width: 100%;
  position: absolute;
  top: 10rem;
}

.area {
  background: #e6e8ea;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
  height: 100vh;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(94, 51, 51, 0.24);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

.iconic {
  /* Group 65 */

  position: absolute;
  width: 30px;
  height: 30px;

  box-shadow: inset 0px 0px 62px rgba(0, 0, 0, 0.25);

  /* Ellipse 74 */

  position: absolute;
  width: 30px;
  height: 30px;

  background: #6d6b8a;

  /* Group 64 */

  position: absolute;
  width: 16.62px;
  height: 19.56px;

  /* Rectangle 128 */

  position: absolute;
  width: 1.8px;
  height: 15.21px;

  background: #d15eff;
  border-radius: 3px;

  /* Rectangle 130 */

  position: absolute;
  width: 1.8px;
  height: 10.37px;

  background: #d15eff;
  border-radius: 3px;

  /* Rectangle 132 */

  position: absolute;
  width: 1.8px;
  height: 6.57px;

  background: #d15eff;
  border-radius: 3px;

  /* Rectangle 129 */

  position: absolute;
  width: 1.8px;
  height: 5.65px;

  background: #d15eff;
  border-radius: 3px;
  transform: rotate(-90deg);

  /* Rectangle 131 */

  position: absolute;
  width: 2.18px;
  height: 16.62px;

  background: #d15eff;
  border-radius: 3px;
  transform: rotate(-90deg);

  /* Rectangle 133 */

  position: absolute;
  width: 1.8px;
  height: 16.62px;

  background: #d15eff;
  border-radius: 3px;
  transform: rotate(-90deg);
}
</style>

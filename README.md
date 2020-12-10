# vue2-csspin
Spinner Component for Vue.js 2.x.
This project is an wrapper of [CSSPIN](https://www.npmjs.com/package/csspin)

csspin for vue 3.x is [here](https://github.com/stepanowon/vue-csspin)

[![npm](https://img.shields.io/npm/v/vue2-csspin.svg )](https://www.npmjs.com/package/vue2-csspin)
[![npm](https://img.shields.io/npm/dm/vue2-csspin.svg)](https://www.npmjs.com/package/vue2-csspin)
[![GitHub stars](https://img.shields.io/github/stars/stepanowon/vue2-csspin.svg?style=social&label=Stars&style=for-the-badge)](https://github.com/stepanowon/vue2-csspin/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/stepanowon/vue2-csspin.svg?style=social&label=Fork&style=for-the-badge)](https://github.com/stepanowon/vue2-csspin/network)
[![Build Status](https://travis-ci.org/stepanowon/vue2-csspin.svg?branch=master)](https://travis-ci.org/stepanowon/vue2-csspin)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

------------

> Author : Stephen Won(원형섭), OpenSG Inc.        
> Online Demo : https://vue2-csspin.vercel.app/

## License
MIT 
## Usage  

#### CDN - usage
~~~
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>vue-csspin 테스트</title>
<link rel="stylesheet" href="https://unpkg.com/vue2-csspin/dist/vue2-csspin.css" />
</head>
<body>
    <div id="app">
      <h2>Vue2Csspin Test</h2><hr />
      Loading Message : <input type="text" v-model="message" /><br />
      Spinner Style : 
      <select v-model="spinStyle">
          <option>cp-round</option>
          <option>cp-pinwheel</option>
          <option>cp-balls</option>
          <option>cp-bubble</option>
          <option>cp-flip</option>
          <option>cp-hue</option>
          <option>cp-skeleton</option>
          <option>cp-eclipse</option>
          <option>cp-boxes</option>
          <option>cp-morph</option>
          <option>cp-heart</option>
          <option>cp-meter</option>
      </select><br />
      opacity(0 &lt; x &lt; 1) : <input type="text" v-model.number="opacity" /><br />
      background-color : 
      <select v-model="color">
          <option>black</option>
          <option>white</option>
          <option>red</option>
          <option>yellow</option>
          <option>blue</option>
          <option>aqua</option>
          <option>green</option>
          <option>orange</option>
          <option>brown</option>
          <option>salmon</option>
          <option>chocolate</option>
          <option>bisque</option>
      </select><br />
      <button @click="viewVueCsspin">Test Spinner</button>
      <vue2-csspin v-if="visible" :message="message" :spin-style="spinStyle" :color="color" :opacity="opacity" />
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script type="text/javascript" src="https://unpkg.com/vue2-csspin"></script>
    <script type="text/javascript">
    new Vue({
      el: '#app',
      data: function() {
        return { 
          visible: false,
          message: "Loading",
          spinStyle : "cp-round",
          opacity : 0.3,
          color : "black",
        };
      },
      methods : {
        viewVueCsspin() {
          this.visible = true;
          setTimeout(()=>{
            this.visible = false;
          }, 5000)
        }
      }
    })

    </script>
</body>
</html>
~~~
##

#### NPM - install
~~~
npm install --save vue2-csspin
- or -
yarn add vue2-csspin
~~~

#### NPM - usage
~~~
<template>
  <div>
    <h2>Vue2Csspin Test</h2><hr />
    Loading Message : <input type="text" v-model="message" /><br />
    Spinner Style : 
    <select v-model="spinStyle">
        <option>cp-round</option>
        <option>cp-pinwheel</option>
        <option>cp-balls</option>
        <option>cp-bubble</option>
        <option>cp-flip</option>
        <option>cp-hue</option>
        <option>cp-skeleton</option>
        <option>cp-eclipse</option>
        <option>cp-boxes</option>
        <option>cp-morph</option>
        <option>cp-heart</option>
        <option>cp-meter</option>
    </select><br />
    opacity(0 &lt; x &lt; 1) : <input type="text" v-model.number="opacity" /><br />
    background-color : 
    <select v-model="color">
        <option>black</option>
        <option>white</option>
        <option>red</option>
        <option>yellow</option>
        <option>blue</option>
        <option>aqua</option>
        <option>green</option>
        <option>orange</option>
        <option>brown</option>
        <option>salmon</option>
        <option>chocolate</option>
        <option>bisque</option>
    </select><br />
    <button @click="viewVueCsspin">Test Spinner</button>
    <vue2-csspin v-if="visible" :message="message" :spin-style="spinStyle" :color="color" :opacity="opacity" />
  </div>
</template>

<script>
import { Vue2Csspin } from 'vue2-csspin'

export default {
  name: 'App',
  components: {
    Vue2Csspin
  },
  data() {
    return { 
      visible: false,
      message: "Loading",
      spinStyle : "cp-round",
      opacity : 0.7,
      color : "white",
    };
  },
  methods : {
    viewVueCsspin() {
      this.visible = true;
      setTimeout(()=>{
        this.visible = false;
      }, 5000)
    }
  }
}
</script>
~~~
##
#### Props
   * message
      - type : String
      - Loading Message
      - Default : "Loading" 
   * spinStyle 
     - type : String
     - Spinner Style
     - default : "cp-round"
     - available value : "cp-round", "cp-pinwheel", "cp-bubble", "cp-flip", "cp-hue", "cp-skeleton", "cp-eclipse", "cp-boxes", "cp-morph", "cp-heart", "cp-meter"
     - about more detail style ---> https://webkul.github.io/csspin/


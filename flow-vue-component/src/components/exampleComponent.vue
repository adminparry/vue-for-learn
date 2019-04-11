<template>
  <p>I'm made with Flow!</p>
</template>

<script>
/* @flow */

const randomThing: number = 'Boop!'

export default {
  created() {
    console.log(randomThing)
  }
}
</script>
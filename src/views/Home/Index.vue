<template>
  <div class="home">
    <HomeTitle/>
    <MainForm/>
  </div>
</template>

<script>
import HomeTitle from './HomeTitle'
import MainForm from './HomeForm'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    HomeTitle,
    MainForm
  }
}
</script>

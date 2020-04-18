<template>
  <div class="top-heroes">
    <!-- Título con nuestra fuente Diablo-like -->
    <h2 class="my-4 font-diablo">Top Heroes</h2>
    <!-- 3 columnas, una para cada TopHero -->
    <b-row>
      <!-- No te olvides de poner el `key` cuando uses v-for -->
      <b-col sm="4" v-for="hero in heroes" :key="hero.id">
        <!-- TopHero con datos como prop -->
        <TopHero :hero="hero"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TopHero from './TopHero'

export default {
  name: 'TopHeroes',
  components: { TopHero },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  }
}
</script>
<style lang="stylus">
.hero-portrait-wrapper
  .title-name
    color white
    font-weight 900

  .level-circle
    width 26px
    height 26px
    padding 4px
    font-weight bold
    text-align center
    border-radius 13px
    background-color #15202b
    box-shadow 0 0 0 2px #6c757d
</style>

<template>
  <div id="app" class="container-sm">
    <div class="row text-center">
      <nav-bar></nav-bar>
    </div>
    <div class="row">
      <div class="col-md-3 mp-padding-left-0 menu">
        <sidebar-menu></sidebar-menu>
      </div>

      <div class="col-md-9 mp-padding-left-0">
        <b-card
            class="mb-3"
            header="Secondary">
          <template #header class="">
            <span class="ml-1"> Nội dung gen ra ở đây</span>
          </template>
          <b-card-body>
            <router-view></router-view>
          </b-card-body>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from './components/partial/sidebar_menu'
import NavBar from './components/partial/navbar'

export default {
  name: 'App',
  computed: {
    routerViewKey() {
      return this.$route.meta.routeKey || this.$route.path
    },
  },
  components: {
    SidebarMenu,
    NavBar,
  }
}
</script>

<style>
body {
  background-color: #e9ebee;
}
</style>
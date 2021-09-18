<template>
  <div>
    <b-card
        no-body
        class="mb-3 bg-sidebar"
        header="Secondary"
        header-text-variant="white"
        v-for="item in menus" :key="item.id">
      <template #header class="">
        <b-icon :icon="item.icon"></b-icon>
        <span class="ml-1">{{ item.title }}</span>
      </template>
      <b-list-group flush>
        <b-list-group-item v-for="menu in item.items" :key="menu.id" class="sidebar-item">
          <b-icon :icon="menu.icon"></b-icon>
          <a
              v-if="menu.type === 'fixed_link' "
              :href="menu.value"
              target="_blank">
            <span class="ml-1">{{ menu.title }}</span>
          </a>
          <router-link v-else :to="menu.value">
            <span class="ml-1">{{ menu.title }}</span>
          </router-link>
        </b-list-group-item>
      </b-list-group>
    </b-card>

  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
  data: () => {
    return {
      menus: [
        {
          id: 1,
          title: 'Thông tin cơ bản',
          icon: 'code-slash',
          items: [
            {
              id: 1,
              icon: 'code-slash',
              title: 'Trang chủ',
              type: 'router', // router | fixed_link
              value: '/',
            },
            {
              id: 2,
              icon: 'code-slash',
              title: 'Về tôi',
              type: 'router', // router | fixed_link
              value: '/about',
            },
            {
              id: 3,
              icon: 'code-slash',
              title: 'Blog của tôi',
              type: 'fixed_link', // router | fixed_link
              value: 'https://minhphong306.wordpress.com',
            }
          ]
        },
        {
          id: 2,
          title: 'Tools',
          icon: 'code-slash',
          items: [
            {
              id: 1,
              icon: 'code-slash',
              title: 'CRUD API generator',
              type: 'router', // router | fixed_link
              value: 'tools/api-gen',
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.bg-sidebar {
  background-color: #337ab7;
}

.sidebar-item {
  cursor: pointer;
}
</style>
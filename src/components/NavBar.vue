<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="header shadow p-3 mb-4" sticky>
    <b-navbar-brand to="/">
      <img
        src="../assets/logo.png"
        width="36"
        height="36"
        class="d-inline-block align-top"
        alt="logo"
      />
      <span class="d-inline-block align-center pt-1 mx-2">Seberapa Cepat</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/typing">Blog</b-nav-item>
        <b-nav-item to="/tentang">Tentang</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

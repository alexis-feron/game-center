<template>
  <footer class="footer">
    <div class="footer-content">
      <p>
        &copy; {{ currentYear }} Game Center -
        <a class="link" href="alexis-feron.com">Alexis Feron</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  padding: 20px 0;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #e0e0e0;
  font-family: "Inter", sans-serif;
  font-weight: 500;
}

.link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 550;
}

.link:hover {
  color: black;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.footer-nav {
  display: flex;
  gap: 15px;
}

.footer-nav a {
  color: #42b983;
  text-decoration: none;
  font-weight: 550;
}

.footer-nav a:hover {
  text-decoration: underline;
}
</style>

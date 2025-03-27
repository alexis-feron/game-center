<template>
  <footer class="footer">
    <div class="footer-content">
      <p>
        &copy; {{ currentYear }} Game Center -
        <a
          class="link"
          href="https://www.alexis-feron.com"
          target="_blank"
          rel="noopener noreferrer"
          >Alexis Feron</a
        >
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
  background: linear-gradient(135deg, #1f1f1f, #42b983);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 550;
}

.link:hover {
  background: linear-gradient(135deg, #42b983, #1f1f1f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>

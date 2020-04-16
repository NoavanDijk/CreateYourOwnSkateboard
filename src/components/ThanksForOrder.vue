<template>
  <div class="thanksfororder">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-fifths">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Bedankt!
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>Bedankt voor uw bestelling!</p>
              <br />
              <p>Het wordt zo snel mogelijk bij u bezorgd.</p>
            </div>
          </div>
          <footer class="card-footer">
            <router-link to="/" class="next">
              <button class="button next">
                Ga terug naar Home
              </button>
            </router-link>
          </footer>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<style scoped>
.thanksfororder {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.column {
  width: 100%;
}

.next {
  width: 100%;
  border: 0;
  background-color: #28a745;
  cursor: pointer;
  height: 56px;
  color: white;
  border-radius: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.next:hover {
  background-color: #2bb54b;
  color: white;
}
</style>

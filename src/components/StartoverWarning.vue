<template>
  <div class="modal js-modalconfirmdelete" :class="{'is-active': activeModalId === 'modal-delete'}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title is-family-secondary">Delete</p>
        <button class="delete" aria-label="close" v-on:click="onClickCloseModal"></button>
      </header>
      <section class="modal-card-body">
        <p class="text">Weet u zeker dat u opnieuw wilt beginnen? Dit kan niet ongedaan worden gemaakt.</p>
      </section>
      <footer class="modal-card-foot footerdeletewarning">
        <button class="button is-text" v-on:click="onClickCloseModal">Cancel</button>
        <button class="button deletebutton" v-on:click="startover">Begin opnieuw</button>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'onClickCloseModal',
      'startover',
      'activeModalId'
    ],
  }
</script>

<style scoped>
.footerdeletewarning{
  display: flex;
  justify-content: space-between;
}

.modal-card-foot{
  padding: 15px;
}

.text{
  margin: 0.5em 0 0.5em 0;
}

.deletebutton{
  background-color: #dc3545;
  color: white;
}

.deletebutton:hover{
  background: #c82333;
  color: white;
  border-color: #bd2130;
}

.button{
  margin-bottom: 0;
}
</style>
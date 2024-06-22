<script setup lang='ts'>
import AvatarComponent from '@/components/avatarComponent.vue'

let current_message = 'vaslhlbvkashlvncshlvbcxlkvbnxbzkluhvnczblkhvnzdsbkchlznFSDAAFSDKBL FSDLFHSALDFNJASFLBSAJDNFLHBASDNJ;FDASFNJSDAFJASDFD;NAS DSAFNAS;LDJFNSDAFNSADJNF;ASJDNF;A SDN;JFNSA;LNFLSNL FSAKJDF;KSAMJFJ;ASDNNFLNJFAS'

</script>

<template>
  <div class='message'>
    <avatar-component/>
    <p>{{current_message}}</p>
  </div>
</template>

<style scoped>
.avatar{
  margin-left: 40px;
  margin-top: 40px;
  height: 60px;
  width: 60px;
}

.message{
  grid-template-columns: 100px 710px;
  display: grid;
  width: 810px;
  overflow-x: visible;
}

p{
  margin-top: 40px;
  margin-left: 20px;
  font-size: 22px;
}
</style>
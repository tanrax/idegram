<template>
    <div class="ratio ratio-4x3">
	<img alt="" :src="urlPublic" class="
		  img
		  object-fit-cover
		  border
		  rounded
		  ">
    </div>
</template>

<script setup>

 import { createClient } from '@supabase/supabase-js'

 // Variables
 const supabase = createClient('https://jwjhesfrctbwxqukejwm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3amhlc2ZyY3Rid3hxdWtlandtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NjA4NzYsImV4cCI6MTk5NTEzNjg3Nn0.mc35BToVLVAkx-3eFDGYR3OlxuwA55w3RwDG6XnBMmY')
 const urlPublic = ref();

 const props = defineProps({
     url: String
 })

 onMounted(async () => {

     const { data } = await supabase
	 .storage
	 .from('photos')
	 .getPublicUrl(props.url);
     urlPublic.value = data.publicUrl;
 })


</script>

<style scope>
 .img {
     width: 100%;
 }
</style>

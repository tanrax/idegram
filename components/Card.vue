<template>
    <article class="mb-5">
	<!-- Imagen -->
	<div class="ratio ratio-4x3">
	    <img @click="addLike" alt="" :src="urlPublic" class="
					img
					object-fit-cover
					border
					rounded
					">
	</div>
	<!-- Controles -->
	<div class="d-flex justify-content-end">
	    <button @click="addLike" class="btn btn-outline-primary p-3 text-center mt-2" aria-current="page">❤️ {{ likes }}</button>
	</div>
    </article>
</template>

<script setup>

 import { createClient } from '@supabase/supabase-js'

 // Variables
 const supabase = createClient('https://jwjhesfrctbwxqukejwm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3amhlc2ZyY3Rid3hxdWtlandtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NjA4NzYsImV4cCI6MTk5NTEzNjg3Nn0.mc35BToVLVAkx-3eFDGYR3OlxuwA55w3RwDG6XnBMmY')
 const urlPublic = ref();

 const props = defineProps({
     id: Number,
     url: String,
     likes: Number
 })


 onMounted(async () => {
     // Obtener la URL publica de la imagen
     const { data }  = await supabase
	 .storage
	 .from('photos')
	 .getPublicUrl(props.url);
     urlPublic.value = data.publicUrl;
 })

async function addLike() {
     const { error } = await supabase
	 .from('photos')
	 .update({ likes: props.likes + 1 })
	 .eq('id', props.id)
 }


</script>

<style scope>
 .img {
     width: 100%;
 }
</style>

<template>
    <div>

	<h1>Subir imagen</h1>
	<input ref="inputFile" type="file">
	<button @click="subirFoto">Subir</button>
	<h1>Listado imagenes subidas</h1>
	<Card v-for="photo in photos" :url="photo.url" />
    </div>
</template>

<script setup>

 import { createClient } from '@supabase/supabase-js'

 // Variables
 const supabase = createClient('https://jwjhesfrctbwxqukejwm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3amhlc2ZyY3Rid3hxdWtlandtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NjA4NzYsImV4cCI6MTk5NTEzNjg3Nn0.mc35BToVLVAkx-3eFDGYR3OlxuwA55w3RwDG6XnBMmY')
 const inputFile = ref();
 const photos = ref();

 // Funciones

 async function obtenerFotos() {
     const { data, error } = await supabase
	 .from('photos')
	 .select()
     photos.value = data;
 }

 async function subirFoto() {

     const url = `public/${crypto.randomUUID()}.jpg`;
     // Subimos la imagen al bucket (disco duro online)
     const { data, errorUpload } = await supabase
	 .storage
	 .from('photos')
	 .upload(url, inputFile.value.files[0], {
	     cacheControl: '3600',
	     upsert: false
	 });

     // Guardamos la ruta en la base de datos

     const { errorTable } = await supabase
	 .from('photos')
	 .insert({ url: url, id_user: "anonimo" });

     // Refrescamos las fotos que se muestran
     obtenerFotos();

 }

// Cuando se carge la pagina, llamará todo el contenido de onMounted
 onMounted(() => {
     // Obtiene las fotos
     obtenerFotos();
 })

</script>

<script setup lang="ts">
import { ref } from 'vue';
import "../app/styles/style.css";
import ButtonText from '../shared/ui/ButtonText.vue';
const files = ref<FileList>();
const isDragging = ref(false);
const isUploaded = ref(false);


const toggleActive = () => {
    isDragging.value = !isDragging.value;
}

const handleDrop = (event: DragEvent) => {
    toggleActive();
    if (event.dataTransfer == null || event.dataTransfer.files.length <= 0) {
        throw console.error("error");
    }
    files.value = event.dataTransfer.files;
    isUploaded.value = true;
    console.log(files.value[0]);
}

const handleFileSelect = (event: Event) => {
    const selectedFiles = (event.target as HTMLInputElement).files
    if (selectedFiles != null && selectedFiles.length > 0) {
        files.value = selectedFiles;
        isUploaded.value = true;
    }
}

const clickLoad = () => {
    document.getElementById("updfile")?.click();
}

</script>

<template>
    <div class="main">
        <div class="dropzone" id="updarea" @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive"
            @dragover.prevent @drop.prevent="handleDrop">
            <div v-if="!isUploaded" class="dz-wrapper">
                <span>Перетащите файлы</span>
                <span>или</span>
                <span>Нажмите, чтобы выбрать</span>
                <label for="upd_file" id="up_lbl" v-on:click="clickLoad">
                    <input type="file" @change="handleFileSelect" name="upd_file" id="updfile"
                        accept=".fb2, .epub, .rtf, .txt">
                </label>
            </div>
            <div v-if="isUploaded && files != undefined" class="dz-wrapper">
                <div style="margin-bottom: 50px;" class="flex-column-centered">
                    <span>Выбран файл</span>
                    <i>{{ files[0].name }}</i>
                </div>
                <div class="flex-column-centered">
                    <ButtonText title="Продолжить"/>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.main {
    height: 100%;
    width: 100%;
    background-color: #091413;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.dropzone {
    height: 40%;
    width: 30%;
    border: 3px dashed #408A71;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justify-content: center;
    position: relative;
}

.dz-wrapper {
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    justify-content: inherit;
}

.dropzone span {
    color: #B0E4CC;
    font-size: large;
    font-weight: 600;
}

.dropzone i {
    color: #B0E4CC;
}

.dropzone label {
    cursor: pointer;
    position: absolute;
    height: 100%;
    width: 100%;
}

.dropzone input {
    display: none;
}
</style>
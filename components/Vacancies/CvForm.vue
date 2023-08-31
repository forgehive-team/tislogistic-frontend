<template>
    <div class="form-container">
        <div class="fields">
            <div class="fields fields_top">
                <div class="input-container">
                    <input
                        v-model="formData.phone"
                        v-maska
                        class="input"
                        :placeholder="$texts.phoneNumber"
                        data-maska="+7 ### ###-##-##"
                        data-maska-eager
                    />
                    <p class="error">{{ invalidInputMessages.phone }}</p>
                </div>
                <div class="input-container">
                    <input
                        v-model="formData.email"
                        class="input"
                        :placeholder="$texts.email"
                    />
                    <p class="error">{{ invalidInputMessages.email }}</p>
                </div>
            </div>
            <div class="input-container fio">
                <input
                    v-model="formData.full_name"
                    class="input"
                    :placeholder="$texts.FIO"
                />
                <p class="error">{{ invalidInputMessages.full_name }}</p>
            </div>
        </div>
        <div class="bottom">
            <div class="btns">
                <a
                    class="cv-btn"
                    href="/anketa.docx"
                    download="Анкета_Тис_Лоджистик"
                >
                    <IconsDownLoad />{{ $texts.downloadSurvey }}
                </a>
                <div class="input-container">
                    <input
                        id="file-upload"
                        ref="fileUpload"
                        class="input-hidden"
                        type="file"
                        hidden
                        accept=".pdf,.jpg,.jpeg,.png,.docx"
                        @change="onUpload"
                    />

                    <label
                        for="file-upload"
                        class="cv-btn"
                        :class="{ disabled: fileName }"
                    >
                        <IconsUpLoad />
                        {{ fileName || $texts.uploadSurvey }}
                    </label>
                    <span
                        v-if="formData.file"
                        class="delete-file"
                        @click="deleteFile"
                    >
                        <IconsCross />
                    </span>
                    <p class="error survey_error">
                        {{ invalidInputMessages.file }}
                    </p>
                </div>
                <button class="send-btn" @click="handleSubmit">
                    {{ $texts.send }}
                </button>
            </div>
            <p class="confidentiality">
                Нажимая кнопку, Вы принимаете условия
                <br />
                <NuxtLink to="/eula" target="_blank"
                    >пользовательского соглашения
                </NuxtLink>
                и
                <NuxtLink to="/politika-konfidencialnosti" target="_blank"
                    >политики конфиденциальности</NuxtLink
                >
            </p>
        </div>
    </div>
</template>

<script setup>
import { vMaska } from 'maska';
import validate from '~~/helpers/validate';
const showSuccess = useSuccessModal();
const { newsApiBase } = useRuntimeConfig();
const url = newsApiBase + 'vacancy_request/submit';

const formData = reactive({
    phone: '',
    email: '',
    full_name: '',
    file: null,
});
const invalidInputMessages = reactive({
    phone: '',
    email: '',
    full_name: '',
    file: '',
});

const fileName = ref('');
const fileUpload = ref(null);
const onUpload = () => {
    const file = [...fileUpload.value.files][0];
    fileName.value = file.name;
    formData.file = file;
};
const deleteFile = () => {
    fileName.value = '';
    formData.file = null;
};

const sendData = async () => {
    const data = new FormData();
    for (const [key, value] of Object.entries(formData)) {
        data.append(key, value);
    }
    for (const pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }
    try {
        showSuccess.value = !showSuccess.value;
        await $fetch(url, {
            method: 'POST',
            body: data,
        });
    } catch (err) {
        console.log(err);
    }
};

const handleSubmit = () => {
    let valid = true;
    for (const [key, value] of Object.entries(formData)) {
        const errMessage = validate(value, key);
        if (errMessage) {
            valid = false;
            invalidInputMessages[key] = errMessage;
            const unwatch = watch(
                () => formData[key],
                () => clearError(key, unwatch)
            );
        }
    }
    valid && sendData();
};
const clearError = (key, unwatch) => {
    invalidInputMessages[key] = '';
    unwatch();
};
</script>

<style
    src="@/assets/scss/components/Vacancies/CvForm.scss"
    lang="scss"
    scoped
></style>

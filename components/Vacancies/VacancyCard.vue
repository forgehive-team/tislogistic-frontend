<template>
    <div class="vacancy">
        <h3>{{ props.title }}</h3>
        <p>{{ props.salary }}</p>
        <a
            >Узнать подробнее
            <IconsLongArrowRight />
        </a>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'salary']);
</script>

<style
    src="@/assets/scss/components/Vacancies/VacancyCard.scss"
    lang="scss"
    scoped
></style>

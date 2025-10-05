<template>
    <h2 class="component-header">{{ $texts.faqTitle }}</h2>
    <div class="faq__container">
        <HomeFrequentQuestionItem
            v-for="item in questions"
            :key="item.index"
            :title="item.title"
            :answer="item.answer"
            :index="item.index"
            :expanded="item.isExpanded"
            @expand="expandQuestion"
        />
    </div>
</template>

<script setup>
import { faqList } from '~~/config/consolidatedCargoList';

const questions = reactive(
    faqList.map(({ title, answer }, index) => ({
        title,
        answer: markRaw(answer),
        index,
        isExpanded: false,
    }))
);

const expandQuestion = (selectedIndex) => {
    questions.forEach((_, index) => {
        questions[index].isExpanded =
            index === selectedIndex ? !questions[index].isExpanded : false;
    });
};
</script>

<style
    src="@/assets/scss/components/Home/FrequentQuestions.scss"
    lang="scss"
    scoped
></style>

<style lang="scss" scoped>
.faq__container {
    margin: 0 !important;
}
</style>

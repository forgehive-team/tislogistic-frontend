<template>
    <div class="faq">
        <h2>{{ $texts.faqTitle }}</h2>
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
            <Collapse :when="allShown" class="collapse">
                <HomeFrequentQuestionItem
                    v-for="item in questions"
                    :key="item.index"
                    :title="item.title"
                    :answer="item.answer"
                    :index="item.index"
                    :expanded="item.isExpanded"
                    @expand="expandQuestion"
                />
            </Collapse>
        </div>
        <button class="show-all-btn" @click="allShown = !allShown">
            {{ allShown ? $texts.collapse : $texts.expandAll }}
            <IconsExpandArrow :class="{ rotated: allShown }" />
        </button>
    </div>
</template>

<script setup>
import { Collapse } from 'vue-collapsed';
import QuestionOne from './faq/QuestionOne.vue';
const allShown = ref(false);
const fakeData = [
    {
        title: 'Какие у вас есть коробли',
        answer: QuestionOne,
    },
    {
        title: 'Какие у вас есть коробли',
        answer: QuestionOne,
    },
    {
        title: 'Какие у вас есть коробли',
        answer: QuestionOne,
    },
    {
        title: 'Какие у вас есть коробли',
        answer: QuestionOne,
    },
];
const questions = reactive(
    fakeData.map(({ title, answer }, index) => ({
        title,
        answer,
        index,
        isExpanded: index === 3, // Initial values, display expanded on mount
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

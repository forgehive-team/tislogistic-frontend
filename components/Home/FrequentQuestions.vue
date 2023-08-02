<template>
    <div class="faq">
        <h2>{{ $texts.faqTitle }}</h2>
        <div class="faq__container">
            <HomeFrequentQuestionItem
                v-for="item in mainQuestions"
                :key="item.index"
                :title="item.title"
                :answer="item.answer"
                :index="item.index"
                :expanded="item.isExpanded"
                @expand="expandQuestion"
            />
            <Collapse :when="allShown" class="collapse">
                <HomeFrequentQuestionItem
                    v-for="item in extraQuestions"
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
import { faqList } from '~~/config/faqList';

const allShown = ref(false);

const questions = reactive(
    faqList.map(({ title, answer }, index) => ({
        title,
        answer: markRaw(answer),
        index,
        isExpanded: false,
    }))
);

const mainQuestions = computed(() => {
    return questions.slice(0, 5);
});
const extraQuestions = computed(() => {
    return questions.slice(5);
});

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

<template>
    <div
        class="question"
        :class="{ question_expanded: props.expanded }"
        @click="expand"
    >
        <h3 :class="{ semibold: props.expanded }">{{ props.title }}</h3>
        <Collapse :when="props.expanded" class="collapse">
            <div class="answer">
                <component :is="props.answer" />
            </div>
        </Collapse>
        <IconsExpandArrow :class="{ rotated: props.expanded }" />
    </div>
</template>
<script setup>
import { Collapse } from 'vue-collapsed';
const props = defineProps(['title', 'answer', 'expanded', 'index']);
const emit = defineEmits('expand');
const expand = () => {
    emit('expand', props.index);
};
</script>

<style
    src="@/assets/scss/components/Home/FrequentQuestions.scss"
    lang="scss"
    scoped
></style>

<script setup lang="ts">
    import { reactive } from 'vue';
    import Button, { ButtonSize } from './BaseButton.vue';
    import { StoryLayout } from 'histoire';
    import EnvelopeIcon from '~icons/heroicons/envelope-20-solid';

    const layout: StoryLayout = {
        type: 'single',
    };

    const state = reactive({
        size: 'base' as ButtonSize,
    });
</script>

<template>
    <Story :layout="layout">
        <Variant title="Primary">
            <Button :size="state.size" color="primary">Primary</Button>
        </Variant>
        <Variant title="Secondary">
            <Button :size="state.size" color="secondary">Secondary</Button>
        </Variant>
        <Variant title="White">
            <Button :size="state.size" color="white">Secondary</Button>
        </Variant>
        <Variant title="With Prefix">
            <Button :size="state.size" color="primary">
                <template #prefix>
                    <EnvelopeIcon class="h-5 w-5" />
                </template>
                Primary
            </Button>
        </Variant>
        <Variant title="With Suffix">
            <Button :size="state.size" color="primary">
                <template #suffix>
                    <EnvelopeIcon class="h-5 w-5" />
                </template>
                Primary
            </Button>
        </Variant>
        <Variant title="With Prefix and Suffix">
            <Button :size="state.size" color="primary">
                <template #prefix>
                    <EnvelopeIcon class="h-5 w-5" />
                </template>
                Primary
                <template #suffix>
                    <EnvelopeIcon class="h-5 w-5" />
                </template>
            </Button>
        </Variant>
        <template #controls>
            <HstSelect
                v-model="state.size"
                :options="['xs', 'sm', 'base', 'lg', 'xl']"
                title="Button size" />
        </template>
    </Story>
</template>

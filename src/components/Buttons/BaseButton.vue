<script setup lang="ts">
    import { computed, useAttrs, useSlots } from 'vue';
    import { variants } from 'classname-variants';

    export type ButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    export type ButtonColor = 'primary' | 'secondary' | 'white';

    const props = withDefaults(
        defineProps<{
            size?: ButtonSize;
            color?: ButtonColor;
        }>(),
        {
            size: 'base',
            color: 'white',
        }
    );

    // We grab any extra attributes passed to the component so we can forward
    // them to the underlying HTML button tag.
    const attrs = useAttrs();

    const slots = useSlots();

    const button = computed(() =>
        variants({
            base: 'inline-flex items-center justify-between border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
            variants: {
                size: {
                    xs: 'rounded px-2.5 py-1.5 text-xs',
                    sm: 'rounded-md px-3 py-2 text-sm leading-4',
                    base: 'rounded-md px-4 py-2 text-sm',
                    lg: 'rounded-md px-4 py-2 text-base',
                    xl: 'rounded-md px-6 py-3 text-base',
                },
                color: {
                    primary:
                        'bg-indigo-600 hover:bg-indigo-700 border-transparent text-white',
                    secondary:
                        'bg-indigo-100 hover:bg-indigo-200 border-transparent text-indigo-700',
                    white: 'bg-white hover:bg-gray-50 border-gray-300 text-gray-700',
                },
            },
            defaultVariants: {
                size: 'base',
                color: 'white',
            },
        })({
            size: props.size,
            color: props.color,
        })
    );
</script>

<template>
    <button :class="button" v-bind="attrs">
        <div v-if="!!slots.prefix" class="mr-2">
            <slot name="prefix" />
        </div>
        <slot />
        <div v-if="!!slots.suffix" class="ml-2">
            <slot name="suffix" />
        </div>
    </button>
</template>

<svelte:options tag="my-button" />

<script lang="ts">
  import '../style/tailwind.css';
  import { createEventDispatcher } from 'svelte';

  import {
    ButtonEnum,
    ButtonSizeEnum,
    type Button,
    type ButtonSize,
  } from '../models/button';
  import { ColorEnum, type Color } from '../models/color';

  export let color: Color = ColorEnum.PRIMARY;
  export let size: ButtonSize = ButtonSizeEnum.MEDIUM;
  export let disabled: boolean = false;
  export let fill: Button = ButtonEnum.SIMPLE;

  console.log(disabled);

  const dispatch = createEventDispatcher();

  const onClick = (event: Event) => {
    if (!disabled) {
      dispatch('click', event);
    }
  };
</script>

<button
  class="btn btn-{size} btn-{color} btn-{fill} {disabled !== false
    ? 'disabled'
    : ''}"
  type="button"
  on:click={onClick}
>
  <slot />
</button>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  .btn {
    @apply font-sans py-1 px-4 font-semibold cursor-pointer;

    &.btn-bg {
      @apply text-xl;
    }

    &.btn-md {
      @apply text-base;
    }

    &.btn-sm {
      @apply text-xs;
    }

    &.disabled {
      @apply pointer-events-none cursor-not-allowed;
    }
  }

  .btn-simple {
    @apply rounded;
  }

  .btn-rounded {
    @apply rounded-full;
  }

  .btn-outlined {
    @apply bg-transparent border rounded;

    &.btn-primary {
      border-color: var(--primary, #3f51b5);
      color: var(--primary, #3f51b5);

      &:not(.disabled):hover {
        background-color: var(--primary, #3f51b5);

        @apply text-white;
      }
    }

    &.btn-accent {
      border-color: var(--accent, #ff4081);
      color: var(--accent, #ff4081);

      &:not(.disabled):hover {
        background-color: var(--accent, #ff4081);

        @apply text-white;
      }
    }
    &.btn-warn {
      border-color: var(--warn, #f44336);
      color: var(--warn, #f44336);

      &:not(.disabled):hover {
        background-color: var(--warn, #f44336);

        @apply text-white;
      }
    }

    &.disabled {
      border-color: #0000001f;
      color: #00000042;
    }
  }

  .btn-simple,
  .btn-rounded {
    @apply border-none;

    &:not(.disabled):hover {
      @apply opacity-80;
    }

    &.btn-primary {
      background-color: var(--primary, #3f51b5);

      @apply text-white;
    }

    &.btn-accent {
      background: var(--accent, #ff4081);
      @apply text-white;
    }
    &.btn-warn {
      background: var(--warn, #f44336);
      @apply text-white;
    }

    &.disabled {
      background-color: #0000001f;
      color: #00000042;
    }
  }
</style>

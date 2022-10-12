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

<style src="./button.scss"></style>
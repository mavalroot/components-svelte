<svelte:options tag="my-icon" />

<script lang="ts">
  import { icons } from "./paths";

  export let icon: string | undefined;
  export let size: string = '24';
  export let fill: string | undefined = undefined;
</script>

{#if !!icon}
  <svg width={size} height={size} viewBox="0 0 24 24"
    ><path d={icons[icon]} {fill} /></svg
  >
{/if}

<svelte:options tag="icon-list" />

<script lang="ts">
  import '../style/tailwind.css';

  import { icons } from '$lib/icon/paths';
  import Icon from '$lib/icon/Icon.svelte';

  let labels = Object.keys(icons);
</script>

<div class="grid">
  {#each labels as label}
    <div>
      <Icon icon={label} />
      <div>{label}</div>
    </div>
  {/each}
</div>

<style lang="scss">
  .grid {
    display: grid;
    width: 100%;
    margin: auto;
    grid-template-columns: repeat(auto-fill, 9em);
    grid-gap: 10px;

    > div {
      text-align: center;
      border: 1px solid black;
      padding: 5px;
    }
  }
</style>

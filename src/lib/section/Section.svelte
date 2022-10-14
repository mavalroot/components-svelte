<svelte:options tag="my-section" />

<script lang="ts">
  import '../../shared/style/tailwind.css';
</script>

<div class="section">
  {#if $$slots.header}
    <div class="section__header">
      <slot name="header" />
    </div>
  {/if}

  <div class="section__content">
    <slot name="content" />
  </div>

  {#if $$slots.footer}
    <div class="section__footer">
      <slot name="footer" />
    </div>
  {/if}
</div>

<style src="./section.scss"></style>

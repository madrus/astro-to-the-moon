<script>
  import { toggle } from '../stores/svelteStores'
  import './Toggle.css'

  export let show = 'cards'
</script>

{#if show === $toggle}
  <button
    on:click={() => {
      toggle.set($toggle === 'readme' ? 'cards' : 'readme')
    }}
  >
    {$toggle === 'cards' ? 'Show GitHub README' : 'Show link cards'}
  </button>
  <slot />
{/if}

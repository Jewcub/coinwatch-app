<script>
    import { createEventDispatcher } from "svelte";
    export let id, text, purchasevalue;
    const dispatch = createEventDispatcher();
    function triggerUpdate() {
      dispatch("update", { id, text, purchase_price });
    }
    function handleDoubleClick() {
      const yes = confirm("Are you sure you wish to delete this item?");
      if (yes) {
        dispatch("delete", id);
      }
    }
  </script>
  
  <style>
    .coinvalueitem {
      display: flex;
      align-items: center;
      padding: 15px;
      background: #ffffff;
    }
    .coinvalueitem:focus-within {
      background: rgba(255, 255, 255, 0.8);
    }
  
    
    .text-input {
      flex-grow: 1;
      background: none;
      border: none;
      outline: none;
      font-weight: 500;
      font-size: 1em;
    }
    
  </style>
  
  <div class="coinvalueitem" >
    <input
      class="text-input"
      type="text"
      bind:value={text}
      on:keyup={({ key, target }) => key === 'Enter' && target.blur()}
      on:blur={() => triggerUpdate()} />
    <input
      class="text_input"
      type="text"
      bind:value={purchasevalue}
      on:keyup={({ key, target }) => key === 'Enter' && target.blur()}
      on:blur={() => triggerUpdate()} />
  </div>
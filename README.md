# Solid.js Standalone

Removed Babel JSX version for the time being as it is unsupported.

## Tagged Template Literals
```html
<script src="https://unpkg.com/solid-standalone/html.min.js"></script>
<script>
  const { createState, createRoot } = Solid;
  const { html } = SolidHTML;

  const App = () => {
    const [state, setState] = createState({counter: 0});
    setInterval(() => setState('counter', c => c + 1), 1000);
    return html`<div>${() => state.counter}</div>`;
  }
  createRoot(() => document.body.appendChild(App()));
</script>
```

## HyperScript
```html
<script src="https://unpkg.com/solid-standalone/h.min.js"></script>
<script>
  const { createState, createRoot } = Solid;
  const { h } = SolidHyper;

  const App = () => {
    const [state, setState] = createState({counter: 0});
    setInterval(() => setState('counter', c => c + 1), 1000);
    return h('div', () => state.counter);
  }
  createRoot(() => document.body.appendChild(App()));
</script>
```
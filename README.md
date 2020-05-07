# Solid.js Standalone

## Tagged Template Literals
```html
<script src="https://unpkg.com/solid-standalone/html.min.js"></script>
<script>
  const { createState } = Solid;
  const { html, render } = SolidDOM;

  const App = () => {
    const [state, setState] = createState({counter: 0});
    setInterval(() => setState('counter', c => c + 1), 1000);
    return html`<div>${() => state.counter}</div>`;
  }
  render(App, document.body);
</script>
```

## HyperScript
```html
<script src="https://unpkg.com/solid-standalone/h.min.js"></script>
<script>
  const { createState } = Solid;
  const { h, render } = SolidDOM;

  const App = () => {
    const [state, setState] = createState({counter: 0});
    setInterval(() => setState('counter', c => c + 1), 1000);
    return h('div', () => state.counter);
  }
  render(App, document.body);
</script>
```
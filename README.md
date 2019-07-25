# No Longer Supported
Sufficient changes to the babel runtime to auto generate imports gets in the way of this modules functioning. I no longer have time to maintain it.

# Solid.js Standalone

Intended for use in browsers. It has 3 builds. Version 0.5.0 breaks all existing references.

## JSX

Exposes Solid and SolidDOM on the window object. This library uses the Babel Standalone package to compile script tags with type='text/solid'. Using babel in the browser as you can imagine is expensive but it is useful for examples and trying Solid out.

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/solid-standalone/babel.min.js"></script>
<script type='text/solid'>
  const { createState, createRoot } = Solid;

  const App = () => {
    const [state, setState] = createState({counter: 0});
    setInterval(() => setState('counter', c => c + 1), 1000);
    return <div>{( state.counter )}</div>
  }
  createRoot(() => document.body.appendChild(<App />));
</script>
```

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
# Solid.js Standalone

Intended for use in browsers. Exposes Solid, SolidDOM, and S on the window object. This library uses the Babel Standalone package to compile script tags with type='text/solid'. Using babel in the browser as you can imagine is expensive but it is useful for examples and trying Solid out.

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/solid-standalone"></script>
<script type='text/solid'>
  const { State, root } = Solid;

  const App = () => {
    const state = new State({counter: 0});
    setInterval(() => state.set({counter: state.counter + 1}), 1000);
    return <div>{state.counter}</div>
  }
  root(() => document.body.appendChild(<App />))
</script>
```
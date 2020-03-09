# DMS new blog

This is React App Template that contained custom components and templates.

To change Layout, in index.js import other Layout component and change attribute layout.

For example, to change LayoutModern to Layout, make next changes

```javascript
import Layout from './components/hoc/Layout/Layout'

ReactDOM.render(<App layout={Layout}/>, document.getElementById('root'));
```
# sl-web-tools
Open source tools to allow working with USB sticks containing SL chips in the browser.
Powered by [Smlight-cc-flasher](https://github.com/smlight-workspace/smlight-cc-flasher) and [Pyodide](https://pyodide.org/en/stable/).

## Setup

```bash
npm install @smlight/cc-web-tools
```

## Integration

Create a manifest to customize the flasher for your device and include the web component:

```html
<smlight-zigbee-flasher manifest="./assets/manifests/slzb-07p7.json">
  <span slot="button">Connect</span>
</smlight-zigbee-flasher>
```

## Building

To recreate `src/requirements.txt`, recompute dependencies with pip:

```bash
python -m venv venv
venv/bin/pip install -r requirements.txt
venv/bin/pip freeze > src/requirements.txt
```

Finally, build with `npm`:

```
npm run build
```
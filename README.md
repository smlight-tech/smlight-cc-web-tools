# SMLIGHT-CC-WEB-TOOLS

## 1. Description
SMLIGHT-CC-WEB-TOOLS is the open source ([license](https://github.com/smlight-tech/smlight-cc-web-tools/LICENSE)) tools for flashing USB dongles built on Texas Instruments CC13xx/CC26XX chips in the web browser.

**READY-TO-USE DEPLOYED WEB VERSION**  
is available by this link: https://smlight.tech/flasher/


Powered by [smlight-cc-flasher](https://github.com/smlight-tech/smlight-cc-flasher) and [Pyodide](https://pyodide.org/en/stable/).  


| Step 0 |  | Step 1 |  | Step 2 |  |  Step 3 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Navigate to [web-flasher](https://smlight.tech/flasher/) |  | Plug your USB dongle |  | Choose firmware |  | Flash! |
| <img src="https://github.com/smlight-tech/smlight-cc-web-tools/blob/main/img/flasher-address-600.png?raw=true" width="180" /> | <img src="https://github.com/smlight-tech/smlight-cc-web-tools/blob/main/img/arrows-next.png?raw=true" width="180" /> | <img src="https://github.com/smlight-tech/smlight-cc-web-tools/blob/main/img/slzb-07p7-plug-in-600.png?raw=true" width="180" /> | <img src="https://github.com/smlight-tech/smlight-cc-web-tools/blob/main/img/arrows-next.png?raw=true" width="180" /> | <img src="https://github.com/smlight-tech/smlight-cc-web-tools/blob/main/img/slzb-07p7-flasher-select-600.png?raw=true" width="180" /> | <img src="https://github.com/smlight-tech/smlight-cc-web-tools/blob/main/img/arrows-next.png?raw=true" width="180" /> | <img src="https://github.com/smlight-tech/smlight-cc-web-tools/blob/main/img/slzb-07p7-flash-successful-600.png?raw=true" width="180" /> |  



**Supported chips and tested devices**:

| Chip model|USB Stick Example* | Zigbee coordinator | Zigbee router | Matter-over-Thread |
| ------- |:-------:|:-------:|:-------:|:-------:|
| **CC26XX Series**: | | | | |
| CC2674P10 |[SLZB-07p10](https://smlight.tech/product/slzb-07p10/)| Yes | Yes | Yes |
| CC2652P7 |[SLZB-07p7](https://smlight.tech/product/slzb-07p10/) | Yes | Yes | Yes |
| CC2652P | SLZB-02 |  Yes | Yes | Yes |
||||
| **CC13XX Series**: | | | | |
| CC1354P10 |---|---|---|---|
| CC1352P7 |---|---|---|---|
| CC1352P |---|---|---|---| 

_*_ smlight-cc-web-flasher lets users flash any other models of USB coordinators, however, we recommend using the abovementioned tested models.

## 2. Setup

```bash
npm install @smlight/cc-web-tools
```

## 3. Integration
3.1. Create a manifest to customize the flasher for your device and include the web component:

```html
<smlight-zigbee-flasher manifest="./assets/manifests/slzb-07p7.json">
  <span slot="button">Connect</span>
</smlight-zigbee-flasher>
```

## 4. Building

4.1. To recreate `src/requirements.txt`, recompute dependencies with pip:

```bash
python -m venv venv
venv/bin/pip install -r requirements.txt
venv/bin/pip freeze > src/requirements.txt
```

4.2. Finally, build with `npm`:

```
npm run build
```


## 5. Legal and Admin
(c) SMLIGHT. All rights reserved. [License](https://github.com/smlight-tech/smlight-cc-web-tools/LICENSE)
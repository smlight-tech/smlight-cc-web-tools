/** (c) SMLIGHT (https://github.com/smlight-tech).
  * Subject to: https://github.com/smlight-tech/smlight-cc-web-tools/LICENSE
  * www.smlight.tech
*/

import { customElement } from 'lit/decorators.js';
import { IconButtonBase } from '@material/mwc-icon-button/mwc-icon-button-base';
import { styles } from '@material/mwc-icon-button/mwc-icon-button.css';

@customElement('usf-icon-button')
export class UsfIconButton extends IconButtonBase {
  static override styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'usf-icon-button': UsfIconButton;
  }
}

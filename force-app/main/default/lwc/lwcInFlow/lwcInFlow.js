import { LightningElement,api } from 'lwc';

export default class LwcInFlow extends LightningElement {
    @api firstName;
    @api lastName;
}
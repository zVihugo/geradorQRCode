import prompt from 'prompt';
import promptQRCode from '../../prompts/promptQR.js';
import handle from './handle.js';

async function createQrCode(){
    prompt.get(promptQRCode,  handle);
    prompt.start();
}

export default createQrCode;
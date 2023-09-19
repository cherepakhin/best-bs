import messageError from './MessageError/dlg.js';
import discountPercent from './DiscountPercent/dlg.js';
import discountByGroupT from './DiscountByGroupT/dlg.js';
import discountPercentOnProduct from './DiscountPercentOnProduct/dlg.js';
import discountSumma from './DiscountSumma/dlg.js';
import payment from './Payment/dlg.js';
import registerCard from './bonuscard/RegisterCard/dlg.js';
import increaseCard from './bonuscard/IncreaseCard/dlg.js';
import payCard from './bonuscard/PayCard/dlg.js';

/**
 * Map для связи типа диалога с контроллером диалога
 * @type {{}}
 */
let mapDlg = new Map();

mapDlg.set(messageError.typeDlg, messageError);
mapDlg.set(discountPercent.typeDlg, discountPercent);
mapDlg.set(discountByGroupT.typeDlg, discountByGroupT);
mapDlg.set(discountPercentOnProduct.typeDlg, discountPercentOnProduct);
mapDlg.set(discountSumma.typeDlg, discountSumma);
mapDlg.set(payment.typeDlg, payment);
mapDlg.set(registerCard.typeDlg, registerCard);
mapDlg.set(increaseCard.typeDlg, increaseCard);
mapDlg.set(payCard.typeDlg, payCard);

export default mapDlg;


import {useContext} from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import CartContext from '../../store/cart-context';
import './Flutterwave.css'
export default function FlutterwaveApp() {
    const ctx = useContext(CartContext);
 

    
   const config = {
    public_key: 'FLWPUBK_TEST-a27e4649b883a78f400adf6637c05ba1-X',
    tx_ref: Date.now(),
    amount: ctx.totalAmount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'mamaputonlinefood@gmail.com',
      phone_number: '08065032361',
      name: 'Mamaput Online Food',
    },
    customizations: {
      title: 'Mamaput Online Food',
      description: 'Payment for items in cart',
      logo: '../../../public/images/mamalogo.png',
    },
  };

  
  const fwConfig = {
    ...config,
    text: 'Pay Online!',
    callback:
     (response) => {
      
      closePaymentModal()
    },
    onClose: () => {},
  };

  return (
        <div className="orderbtn">
      <FlutterWaveButton {...fwConfig} />
      </div>
  
  );
}










// FLWPUBK_TEST-a27e4649b883a78f400adf6637c05ba1-X
const express = require('express');
const bodyParser = require('body-parser');
const paypal = require('paypal-rest-sdk');
const plans = require('./plans.js');

const app = express();
const PORT = process.env.PORT || 3000;

paypal.configure({
  'mode': 'sandbox',
  'client_id': 'AU6_NWRXDx-MuTAk1XBb-rhN5pe0o7eZn1Sbnp9EsRZOv4XmJgYU2gWsIaDjiPai5wjcQsU3C2hyUQ_J',
  'client_secret': 'EKX01BI_jwrrM6XGQJmmGNvxOkDm67gafakjlOf7viTvAyjumtSOQMIqrS2Vmvhn7xgR9CCCOy9u6FoC'
});

app.use(bodyParser.json());

app.get('/subscribe/:planName/:token', async (req, res) => {
  const { planName, token } = req.params;
  if(token=="X01BI_jwrrM6XGQJmmGNvxsRZOv4XmJgYU2gmvhn7xU3C2hy"){
    const planData = plans[planName];
  
    try {
      const plan = await new Promise((resolve, reject) => {
        paypal.billingPlan.create(planData, (error, billingPlan) => {
          if (error) {
            reject(error);
          } else {
            resolve(billingPlan);
          }
        });
      });
  
      console.log('Plan created:', plan.id);
  
      const patchRequest = [{
        "op": "replace",
        "path": "/",
        "value": {
          "state": "ACTIVE"
        }
      }];
  
      await new Promise((resolve, reject) => {
        paypal.billingPlan.update(plan.id, patchRequest, (error, response) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        });
      });
  
      console.log('Plan activated:', plan.id);
  
      var d = new Date(Date.now() + 1 * 60 * 1000);
      d.setSeconds(d.getSeconds() + 4);
      var isDate = d.toISOString();
      var isoDate = isDate.slice(0, 19) + "Z";
  
      const billingAgreementAttributes = {
        "name": "360ment",
        "description": "PayPal Subscription",
        "start_date": isoDate,
        "plan": {
          "id": plan.id
        },
        "payer": {
          "payment_method": "paypal"
        }
      };
  
      paypal.billingAgreement.create(billingAgreementAttributes, async (error, billingAgreement) => {
        if (error) {
          console.error('Error creating billing agreement:', error);
          res.status(500).json({ success: false, error: error.message });
        } else {
          const subscription_link = billingAgreement.links[0].href;
          console.log('Billing agreement created with ID:', billingAgreement.id);
          console.log(subscription_link);
          res.redirect(subscription_link);
        }
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  }else{
    console.error('Invalid token');
    res.status(500).json({ success: false, error: "Invalid token" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

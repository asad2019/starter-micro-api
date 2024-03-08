module.exports = {
    standard_monthly: {
        name: "Standard Monthly",
        description: "Standard monthly subscription plan",
        type: "INFINITE",
        payment_definitions: [
            {
                name: "Monthly Subscription",
                type: "REGULAR",
                frequency: "MONTH",
                frequency_interval: "1",
                amount: {
                    value: "20.00",
                    currency: "USD"
                },
                cycles: "0"
            }
        ],
        merchant_preferences: {
            auto_bill_amount: "YES",
            cancel_url: "https://360ment.smartweblabs.tech.com/cancel-paypal.php",
            return_url: "https://360ment.smartweblabs.tech.com/return-paypal.php",
            initial_fail_amount_action: "CONTINUE",
            max_fail_attempts: "3",
        }
    },
    plus_monthly: {
        name: "Plus Monthly",
        description: "Plus monthly subscription plan",
        type: "INFINITE",
        payment_definitions: [
            {
                name: "Monthly Subscription",
                type: "REGULAR",
                frequency: "MONTH",
                frequency_interval: "1",
                amount: {
                    value: "50.00",
                    currency: "USD"
                },
                cycles: "0"
            }
        ],
        merchant_preferences: {
            auto_bill_amount: "YES",
            cancel_url: "https://360ment.smartweblabs.tech.com/cancel-paypal.php",
            return_url: "https://360ment.smartweblabs.tech.com/return-paypal.php",
            initial_fail_amount_action: "CONTINUE",
            max_fail_attempts: "3",
        }
    },
    standard_yearly: {
        name: "Standard Yearly",
        description: "Standard yearly subscription plan",
        type: "INFINITE",
        payment_definitions: [
            {
                name: "Yearly Subscription",
                type: "REGULAR",
                frequency: "YEAR",
                frequency_interval: "1",
                amount: {
                    value: "180.00",
                    currency: "USD"
                },
                cycles: "0"
            }
        ],
        merchant_preferences: {
            auto_bill_amount: "YES",
            cancel_url: "https://360ment.smartweblabs.tech.com/cancel-paypal.php",
            return_url: "https://360ment.smartweblabs.tech.com/return-paypal.php",
            initial_fail_amount_action: "CONTINUE",
            max_fail_attempts: "3",
        }
    },
    plus_yearly: {
        name: "Plus Yearly",
        description: "Plus yearly subscription plan",
        type: "INFINITE",
        payment_definitions: [
            {
                name: "Yearly Subscription",
                type: "REGULAR",
                frequency: "YEAR",
                frequency_interval: "1",
                amount: {
                    value: "540.00",
                    currency: "USD"
                },
                cycles: "0"
            }
        ],
        merchant_preferences: {
            auto_bill_amount: "YES",
            cancel_url: "https://360ment.smartweblabs.tech.com/cancel-paypal.php",
            return_url: "https://360ment.smartweblabs.tech.com/return-paypal.php",
            initial_fail_amount_action: "CONTINUE",
            max_fail_attempts: "3",
        }
    },
    pro_yearly: {
        name: "Pro Yearly",
        description: "Pro yearly subscription plan",
        type: "INFINITE",
        payment_definitions: [
            {
                name: "Yearly Subscription",
                type: "REGULAR",
                frequency: "YEAR",
                frequency_interval: "1",
                amount: {
                    value: "780.00",
                    currency: "USD"
                },
                cycles: "0"
            }
        ],
        merchant_preferences: {
            auto_bill_amount: "YES",
            cancel_url: "https://360ment.smartweblabs.tech.com/cancel-paypal.php",
            return_url: "https://360ment.smartweblabs.tech.com/return-paypal.php",
            initial_fail_amount_action: "CONTINUE",
            max_fail_attempts: "3",
        }
    },
};
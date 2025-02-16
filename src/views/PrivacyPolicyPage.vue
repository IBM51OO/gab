<template>
    <div class="terms">
        <div class="container">
            <div class="terms__title">
                Privacy Policy
            </div>
            <div class="terms__date">
                Effective Date: 8.02.2025
            </div>
            <div class="terms-content">
                <div class="terms-content__list">
                    <div class="terms-content__item" v-for="(item, index) in terms" :key="index">
                        <div class="terms-content__item-title">
                            {{ item.title }}
                        </div>
                        <div class="terms-content__item-content">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref} from "vue";

const terms = ref([
    {
        title: '1. Introduction',
        content: 'UNI COBRAND LTD ("Company," "we," "us," or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and disclose personal data when you visit our website and use our services.',
    },
    {
        title: '2. Data Controller Information',
        content: 'Company Name: UNI COBRAND LTD\n' +
            'Registered Office: 593 Holly Lane, Birmingham, West Midlands, United Kingdom, B24 9LU\n' +
            'Company Number: 16200923\n' +
            'Contact Email: info@fitsphere.pro'
    },
    {
        title: '3. Information We Collect',
        content: 'When you use our services, we may collect the following types of personal data:\n' +
            '- Full Name\n' +
            '- Email Address'
    },
    {
        title: '4. Purpose and Legal Basis for Data Collection',
        content: 'We collect and process your personal data on the following legal bases:\n' +
            '- Contractual necessity: To provide and manage our online educational courses.\n' +
            '- Legitimate interest: To communicate with you regarding course access, updates, and support.\n' +
            '- Legal compliance: To fulfill obligations related to financial transactions and consumer protection laws.\n' +
            '- Consent: When required, we obtain your explicit consent before processing data (e.g., for marketing communications).'
    },
    {
        title: '5. Data Sharing and Third-Party Processors',
        content: 'We do not sell or share your personal data with third parties for marketing purposes. However, we may share your data with the following third-party service providers:\n' +
            '- Payment Processors (e.g., Jetopay, Impaya): To securely process transactions in compliance with applicable financial regulations.\n' +
            '- Regulatory Authorities: If required by law, we may disclose personal data to comply with legal obligations.'
    },
    {
        title: '6. Data Security Measures',
        content: 'We implement appropriate security measures to protect your personal data from unauthorized access, disclosure, or misuse. These measures include:\n' +
            '- SSL/TLS encryption for secure data transmission.\n' +
            '- Restricted access to personal data for authorized personnel only.\n' +
            '- Regular security audits to ensure data protection compliance.'
    },
    {
        title: '7. User Rights',
        content: 'Under applicable data protection laws, you have the following rights:\n' +
            '- Access & Correction: You can request access to and correction of your personal data.\n' +
            '- Erasure: You have the right to request the deletion of your personal data when it is no longer necessary.\n' +
            '- Objection & Restriction: You may object to or request restriction of processing in certain circumstances.\n' +
            '- Data Portability: You can request a copy of your data in a structured, commonly used format.\n' +
            '- Right to Lodge a Complaint: If you believe we have violated your rights, you can file a complaint with the UK Information Commissioner\'s Office (ICO) or another competent regulatory authority.\n' +
            '\n' +
            'To exercise your rights, contact us at info@fitsphere.pro.'
    },
    {
        title: '8. Data Retention Policy',
        content: 'We retain personal data for as long as necessary to provide our services and fulfill legal obligations:\n' +
            '- User account data: Retained for up to 5 years after the last interaction.\n' +
            '- Transaction records: Retained for 7 years to comply with tax and accounting regulations.\n' +
            '- Marketing communications: Retained until you opt-out or withdraw consent.\n' +
            '\n' +
            'Once the retention period expires, data is securely deleted or anonymized.'
    },
    {
        title: '9. Cookies and Tracking Technologies',
        content: 'We do not use cookies or similar tracking technologies.'
    },
    {
        title: '10. Changes to This Privacy Policy',
        content: 'We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date. Users will be notified of material changes where required by law.'
    },
    {
        title: '11. Contact Us',
        content: 'For any questions regarding this Privacy Policy, contact us at info@fitsphere.pro or by mail at our registered office address.'
    },
])
</script>
<style lang="scss">
.terms {
    &__title {
        background: #1969AD;
        font-style: italic;
        font-family: 'AtkinsonHyperlegible',serif;
        font-weight: 700;
        background: linear-gradient(to right, #1969AD 3%, #7EB8E8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 20px;
        @include mqm(1024) {
            text-align: center;
        }
    }
    &__date {
        font-size: 14px;
        margin-top: 20px;
        @include mqm(1024) {
            max-width: 670px;
            margin: 20px auto 0 auto;
            padding-left: 50px;
            border-left: 3px solid #576C7E;
            padding-bottom: 10px;
        }
    }
    .terms-content {
        margin-top: 30px;
        @include mqm(1024) {
            max-width: 670px;
            margin: 0 auto;
            border-left: 3px solid #1A69AD;
            padding-left: 50px;
        }
        &__item {
            margin-bottom: 50px;
        }
        &__item-title {
            font-size: 14px;
            font-weight: 700;
        }
        &__item-content {
            font-size: 14px;
            margin-top: 10px;
        }
    }
    .container {
        padding: 0 20px;
        @include mqm(1024) {
            padding: 0 80px;
        }
    }
}
</style>

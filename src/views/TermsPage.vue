<template>
    <div class="terms">
        <div class="container">
            <div class="terms__title">
                Terms & Condition
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
        content: 'These Terms & Conditions ("Terms") govern your use of the website and services provided by UNI COBRAND LTD ("Company," "we," "us," or "our"). By accessing our website and purchasing our courses, you agree to comply with these Terms.',
    },
    {
        title: '2. Company Information',
        content: 'Company Name: UNI COBRAND LTD\n' +
            'Registered Office: 593 Holly Lane, Birmingham, West Midlands, United Kingdom, B24 9LU\n' +
            'Company Number: 16200923\n' +
            'Contact Email: info@fitsphere.pro'
    },
    {
        title: '3. Services Provided',
        content: 'We provide online educational courses that can be accessed through our website after successful payment.'
    },
    {
        title: '4. User Eligibility',
        content: 'By using our website and services, you confirm that you:\n' +
            '- Are at least 18 years old.\n' +
            '- Are a resident of the European Union or another eligible jurisdiction.\n' +
            '- Agree to abide by all applicable laws and regulations.'
    },
    {
        title: '5. Account Registration and User Obligations',
        content: '- To access our courses, you may be required to register an account.\n' +
            '- You are responsible for maintaining the confidentiality of your account credentials.\n' +
            '- You agree not to share, distribute, or resell course materials.'
    },
    {
        title: '6. Payments and Refunds',
        content: '- Payments are processed through third-party payment providers, such as Jetopay and Impaya.\n' +
            '- All transactions are final, and we do not offer refunds except where required by law.\n' +
            '- A purchased course is considered started immediately upon payment, and as such, is not eligible for refunds in accordance with Directive 2011/83/EU (EU Consumer Rights Directive). In case of technical issues preventing access to a purchased course, we will provide reasonable assistance to restore access.'
    },
    {
        title: '7. Intellectual Property Rights',
        content: '- All content, including text, videos, and materials provided through our courses, is the intellectual property of UNI COBRAND LTD.\n' +
            '- You may not copy, reproduce, or distribute course materials without our written consent.\n' +
            '- Any violation of our intellectual property rights may result in legal action in accordance with the UK Copyright, Designs and Patents Act 1988.'
    },
    {
        title: '8. Termination of Services',
        content: '- We reserve the right to suspend or terminate your access to our services if you violate these Terms.\n' +
            '- In the case of termination due to a breach of Terms, no refunds will be issued.'
    },
    {
        title: '9. Limitation of Liability',
        content: '- We provide our courses on an "as-is" basis without warranties of any kind.\n' +
            '- We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.\n' +
            '- Nothing in this agreement shall limit liability for fraud, willful misrepresentation, or any other case where such limitation is prohibited by law.'
    },
    {
        title: '10. Data Protection and Privacy',
        content: '- Our use of personal data is governed by our Privacy Policy.\n' +
            '- By using our services, you acknowledge and consent to the collection and processing of your personal data as described in our Privacy Policy.'
    },
    {
        title: '11. Amendments to These Terms',
        content: '- We reserve the right to update or modify these Terms at any time.\n' +
            '- Users will be notified of material changes via email or through an announcement on our website.'
    },
    {
        title: '12. Governing Law and Dispute Resolution',
        content: '- These Terms are governed by the laws of the United Kingdom.\n' +
            '- Any disputes arising from these Terms shall be resolved through arbitration or in the competent courts of the United Kingdom.\n' +
            '- Before initiating legal proceedings, the parties agree to attempt resolution through Alternative Dispute Resolution (ADR) in accordance with UK Alternative Dispute Resolution for Consumer Disputes Regulations 2015.'
    },
    {
        title: '13. Contact Us',
        content: 'For any questions regarding these Terms & Conditions, contact us at info@fitsphere.pro.'
    },
])
</script>
<style lang="scss">
.terms {
    &__title {
        color: #000;
        font-weight: 500;
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
            border-left: 3px solid #576C7E;
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

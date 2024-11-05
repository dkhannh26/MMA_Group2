import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// Tạo các file JSON cho các ngôn ngữ, ví dụ: en.json, vi.json
import en from './en.json';
import vi from './vi.json';

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
        en: { translation: en },
        vi: { translation: vi },
    },
    lng: Localization.locale, // Ngôn ngữ mặc định dựa trên ngôn ngữ của thiết bị
    fallbackLng: 'en', // Nếu không tìm thấy ngôn ngữ, dùng 'en' làm mặc định
    interpolation: {
        escapeValue: false, // Không cần escape trong React Native
    },
});

export default i18n;

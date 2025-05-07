# 🧠 مطر المصفوفة 🌧️

> *"للأسف، لا يمكن لأحد أن يُخبَر ما هي المصفوفة. عليك أن تراها بنفسك."* - مورفيوس

رسوم متحركة للمطر الرقمي للمصفوفة في الطرفية، تجلب تأثير "المطر الرقمي" الشهير من أفلام المصفوفة مباشرة إلى طرفية الكمبيوتر الخاصة بك. اختر الحبة الحمراء 💊 وانظر مدى عمق حفرة الأرنب...

*اقرأ بلغات أخرى: [English](README.en.md), [Português](README.pt-br.md), [Español](README.es.md), [Français](README.fr.md), [Deutsch](README.de.md), [中文](README.zh.md), [日本語](README.ja.md), [Русский](README.ru.md), [العربية](README.ar.md), [हिन्दी](README.hi.md)*

## ✨ الميزات

- 📊 أحرف متساقطة أخاذة بأسلوب المصفوفة (كاتاكانا وأرقام وحروف)
- 💬 عرض رسائل موسطة ("THE MATRIX HAS YOU")
- ⏯️ إيقاف مؤقت/استئناف باستخدام شريط المسافة (تجميد الوقت في المصفوفة)
- 📝 دعم الرسائل الأولية المخصصة (كن العرافة الخاصة بك)
- 🔄 واجهة برمجة تطبيقات لعرض الرسائل لإنشاء تسلسلات موقوتة أو عروض تفاعلية
- 🐇 اتبع الأرنب الأبيض بأدوات تحكم تفاعلية

## 💾 التثبيت

### كأداة سطر أوامر عالمية

```bash
# تثبيت عالمي
npm install -g the-matrix-rain

# تشغيل رسوم Matrix rain المتحركة
matrix-rain

# تشغيل برسالة مخصصة
matrix-rain "FOLLOW THE WHITE RABBIT"

# عرض اقتباسات عشوائية من Matrix
matrix-rain --random

# تشغيل في الوضع التفاعلي
matrix-rain --interactive

# تشغيل لوقت محدد (بالثواني)
matrix-rain --time 30

# للمساعدة والمزيد من الخيارات
matrix-rain --help
```

> **ملاحظة**: بعد التثبيت العالمي، سيكون الأمر `matrix-rain` متاحًا من أي طرفية. لا حاجة لتشغيل `node index.js` يدويًا!

### كتبعية مشروع

```bash
# إضافة إلى مشروعك
npm install the-matrix-rain

# أو
yarn add the-matrix-rain
```

### من المصدر

```bash
# حرر عقلك...
git clone https://github.com/frederico-kluser/the-matrix-rain.git
cd the-matrix-rain
npm install
```

## 🕹️ الاستخدام

### خيارات سطر الأوامر

عند التثبيت عالميًا، يمكنك استخدام خيارات سطر الأوامر التالية:

```bash
# تشغيل مع رسالة "WAKE UP NEO" الافتراضية
matrix-rain

# تشغيل برسالة مخصصة
matrix-rain "FOLLOW THE WHITE RABBIT"

# تشغيل لوقت محدد (بالثواني)
matrix-rain --time 30

# عرض اقتباسات عشوائية من Matrix
matrix-rain --random

# الوضع التفاعلي - اكتب رسائل للعرض
matrix-rain --interactive

# عرض المساعدة
matrix-rain --help
```

### الاستخدام الأساسي

تُرجع دالة `matrixRain` وعداً (Promise)، لذا يجب استخدامها مع async/await أو سلاسل الوعود:

```javascript
const matrixRain = require('the-matrix-rain');

// مثال باستخدام async/await (لا توجد ملعقة)
async function startMatrix() {
  // ابدأ برسالة "WAKE UP NEO" الافتراضية أو رسالة مخصصة
  const matrix = await matrixRain();  // أو await matrixRain("رسالة مخصصة");

  // عرض رسالة مخصصة
  matrix.display("THE MATRIX HAS YOU");

  // إيقاف الرسوم المتحركة عند الانتهاء (الخروج من البناء)
  matrix.stop();
}

// استدعاء الدالة غير المتزامنة
startMatrix();

// بديل باستخدام صيغة الوعد (تذكر... كل ما أقدمه هو الحقيقة)
matrixRain().then(matrix => {
  matrix.display("THE MATRIX HAS YOU");
  
  // لاحقًا، أوقف الرسوم المتحركة
  setTimeout(() => matrix.stop(), 5000);
});
```

### سكريبتات NPM

يتضمن المشروع العديد من سكريبتات npm لتشغيل الأمثلة:

```bash
# تشغيل المثال الأساسي (خيار الحبة الزرقاء)
npm run example:basic

# تشغيل مع رسالة أولية مخصصة (تحدث مثل العرافة)
npm run example:custom

# تشغيل تسلسل رسائل موقوت (مثل التحدث مع المهندس)
npm run example:sequence

# تشغيل الوضع التفاعلي - اكتب رسائل لعرضها (كن وكيلك الخاص)
npm run example:interactive

# تشغيل مع اقتباسات عشوائية من المصفوفة (مثل الشعور بالديجافو في المصفوفة)
npm run example:quotes

# قائمة بالأمثلة المتاحة (ماذا لو أخبرتك...)
npm run examples
```

## 🧪 الأمثلة

يحتوي المجلد `/examples` على عروض توضيحية مختلفة تُظهر طرقًا مختلفة لاستخدام رسوم المطر المصفوفة المتحركة.
يمكنك تشغيل هذه الأمثلة باستخدام سكريبتات npm المذكورة أعلاه.

- `examples/basic.js` - مثال بسيط برسالة أولية افتراضية
- `examples/custom-initial.js` - مثال رسالة أولية مخصصة (مثل اختيار الحبة الحمراء الخاصة بك)
- `examples/timed-sequence.js` - تسلسل رسائل موقوت (أعطال في المصفوفة)
- `examples/interactive.js` - اكتب رسائل لعرضها أثناء التشغيل (كن المختار)
- `examples/random-quotes.js` - يعرض اقتباسات عشوائية من فيلم المصفوفة (حكمة صهيون)

كل مثال يوضح ميزات مختلفة من رسوم المطر المصفوفة المتحركة. لتشغيل مثال مباشرة:

```bash
node examples/interactive.js
```

## 🔌 واجهة برمجة التطبيقات

### matrixRain([initialMessage])

يبدأ رسوم مطر المصفوفة المتحركة.

- `initialMessage` (اختياري): رسالة مخصصة لعرضها في البداية (الافتراضي: "WAKE UP NEO")
- يُرجع: وعداً يحل إلى كائن يحتوي على طرق `display` و `stop`

### matrix.display(message)

يعرض رسالة في وسط الشاشة (مثل خلل في المصفوفة).

- `message`: السلسلة النصية المراد عرضها

### matrix.stop()

يوقف الرسوم المتحركة وينظف الطرفية (يخرج من المصفوفة).

## 🎮 أدوات التحكم

- `المسافة`: إيقاف مؤقت/استئناف الرسوم المتحركة (تجميد المصفوفة)
- `M`: عرض رسالة "MATRIX HAS YOU" (اشعر بالديجافو)
- `Ctrl+C`: الخروج من التطبيق (خذ الحبة الزرقاء)

## 🔓 الترخيص

MIT

---

> *"أنا أعرف الكونغ فو."* - نيو
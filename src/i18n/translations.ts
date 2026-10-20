export type SectionKey =
  | 'hero'
  | 'about'
  | 'services'
  | 'projects'
  | 'contact';

export type Language = 'en' | 'fa' | 'prs';

export type TranslationDictionary = {
  siteName: string;
  tagline: string;
  intro: string;
  ctaPrimary: string;
  ctaSecondary: string;
  nav: Record<string, string>;
  heroBadge: string;
  aboutTitle: string;
  aboutBody: string[];
  servicesTitle: string;
  services: Array<{ title: string; description: string }>; 
  projectsTitle: string;
  projects: Array<{ title: string; summary: string; status: string }>;
  contactTitle: string;
  contactBody: string;
  emailLabel: string;
  phoneLabel: string;
  addressLabel: string;
  footerText: string;
};

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    siteName: 'Omega Technology',
    tagline: 'Innovate. Build. Scale.',
    intro: 'Technology that moves your business forward.',
    ctaPrimary: 'Request a consultation',
    ctaSecondary: 'View services',
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
    },
    heroBadge: 'Digital solutions for growth',
    aboutTitle: 'Built for ambitious businesses',
    aboutBody: [
      'We help companies turn ideas into effective digital products and systems that are fast, scalable, and reliable.',
      'From strategy and product design to engineering and deployment, we support the full digital lifecycle.',
    ],
    servicesTitle: 'What we do',
    services: [
      { title: 'Web Development', description: 'Modern responsive websites and web apps tailored to your business goals.' },
      { title: 'Mobile Apps', description: 'User-friendly Android and cross-platform apps designed for real-world engagement.' },
      { title: 'Custom Software', description: 'Business systems, internal tools, and workflows built around your operations.' },
      { title: 'UI/UX Design', description: 'Clean, conversion-focused interfaces that keep users engaged and confident.' },
      { title: 'IT Consulting', description: 'Strategy, architecture guidance, and technology planning for modern teams.' },
      { title: 'Database & Backend', description: 'Secure, scalable data and API foundations for growing products and businesses.' },
    ],
    projectsTitle: 'Selected focus areas',
    projects: [
      { title: 'Business Websites', summary: 'Brand-led digital experiences that communicate trust and convert visitors.', status: 'In planning' },
      { title: 'Custom Platforms', summary: 'Operational dashboards and internal systems built around your processes.', status: 'In planning' },
      { title: 'Mobile Experiences', summary: 'Accessible, mobile-first apps built with performance and usability in mind.', status: 'Coming soon' },
    ],
    contactTitle: 'Let’s build something meaningful',
    contactBody: 'Start a conversation about your next digital project, product, or system upgrade.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    addressLabel: 'Location',
    footerText: '© 2026 Omega Technology. Crafted for progress.',
  },
  fa: {
    siteName: 'امگا تکنولوژی',
    tagline: 'راه‌حل‌های هوشمند برای کسب‌وکار شما',
    intro: 'تکنولوژی برای پیشرفت کسب‌وکار شما',
    ctaPrimary: 'درخواست مشاوره',
    ctaSecondary: 'مشاهده خدمات',
    nav: {
      about: 'درباره ما',
      services: 'خدمات',
      projects: 'پروژه‌ها',
      contact: 'تماس',
    },
    heroBadge: 'راهکارهای دیجیتال برای رشد',
    aboutTitle: 'برای کسب‌وکارهای بلندپرواز ساخته شده',
    aboutBody: [
      'ما به کسب‌وکارها کمک می‌کنیم ایده‌ها را به محصولات و سیستم‌های دیجیتال مؤثر تبدیل کنند که سریع، مقیاس‌پذیر و قابل اعتماد باشند.',
      'از استراتژی و طراحی محصول تا توسعه و استقرار، در تمام چرخه دیجیتال همراه شما هستیم.',
    ],
    servicesTitle: 'ما چه کاری انجام می‌دهیم',
    services: [
      { title: 'طراحی وب', description: 'وب‌سایت‌ها و اپلیکیشن‌های مدرن و پاسخ‌گو متناسب با اهداف کسب‌وکار شما.' },
      { title: 'اپلیکیشن‌های موبایل', description: 'اپ‌های کاربرپسند اندرویدی و چندپلتفرمی برای تعامل واقعی با کاربران.' },
      { title: 'نرم‌افزارهای سفارشی', description: 'سیستم‌ها و ابزارهای داخلی بر اساس فرآیندهای واقعی کسب‌وکار شما.' },
      { title: 'طراحی رابط کاربری', description: 'رابط‌های تمیز و هدفمند که تجربه کاربر را روان و قابل اعتماد می‌کنند.' },
      { title: 'مشاوره فناوری اطلاعات', description: 'راهبری استراتژیک، معماری و برنامه‌ریزی فناوری برای تیم‌های مدرن.' },
      { title: 'پایگاه داده و بک‌اند', description: 'زیرساخت‌های امن و مقیاس‌پذیر برای رشد محصولات و کسب‌وکارها.' },
    ],
    projectsTitle: 'تمرکز‌های منتخب',
    projects: [
      { title: 'وب‌سایت‌های کسب‌وکار', summary: 'تجربه‌های دیجیتال برندمحور برای ایجاد اعتماد و تبدیل بازدیدکننده به مشتری.', status: 'در حال برنامه‌ریزی' },
      { title: 'پلتفرم‌های سفارشی', summary: 'داشبوردها و سیستم‌های داخلی متناسب با فرآیندهای شما.', status: 'در حال برنامه‌ریزی' },
      { title: 'تجربه‌های موبایلی', summary: 'اپ‌های موبایل اول، سریع و قابل دسترس برای کاربرانی که به تجربه روان نیاز دارند.', status: 'به‌زودی' },
    ],
    contactTitle: 'بیایید چیزی معنادار بسازیم',
    contactBody: 'برای پروژه یا سیستم دیجیتال بعدی خود با ما صحبت کنید و نیازهای خود را بررسی کنیم.',
    emailLabel: 'ایمیل',
    phoneLabel: 'تلفن',
    addressLabel: 'موقعیت',
    footerText: '© 2026 امگا تکنولوژی. طراحی شده برای پیشرفت.',
  },
  prs: {
    siteName: 'امگا تکنولوژی',
    tagline: 'نوآوری. ساخت. رشد.',
    intro: 'تکنالوژی برای پیشرفت کسب‌وکار شما',
    ctaPrimary: 'درخواست مشاوره',
    ctaSecondary: 'نمایش خدمات',
    nav: {
      about: 'در باره ما',
      services: 'خدمات',
      projects: 'پروژه‌ها',
      contact: 'تماس',
    },
    heroBadge: 'راه‌حل‌های دیجیتالی برای رشد',
    aboutTitle: 'برای کسب‌وکارهای جاه‌طلب ساخته شده',
    aboutBody: [
      'ما به کسب‌وکارها کمک می‌کنیم ایده‌ها را به محصولات و سیستم‌های دیجیتالی مؤثر تبدیل کنند که سریع، مقیاس‌پذیر و قابل اعتماد هستند.',
      'از استراتژی و طراحی محصول تا توسعه و استقرار، در تمام چرخه دیجیتالی همراه شما هستیم.',
    ],
    servicesTitle: 'ما چه کاری انجام می‌دهیم',
    services: [
      { title: 'توسعه وب', description: 'وب‌سایت‌ها و اپلیکیشن‌های مدرن و پاسخگو متناسب با اهداف کسب‌وکار شما.' },
      { title: 'اپلیکیشن‌های موبایل', description: 'اپلیکیشن‌های کاربرپسند اندرویدی و چندپلتفرمی برای تعامل واقعی با کاربران.' },
      { title: 'نرم‌افزارهای سفارشی', description: 'سیستم‌ها و ابزارهای داخلی بر اساس فرآیندهای واقعی کسب‌وکار شما.' },
      { title: 'طراحی رابط کاربر', description: 'رابط‌های تمیز و هدفمند که تجربه کاربر را روان و قابل اعتماد می‌کنند.' },
      { title: 'مشاوره فناوری اطلاعات', description: 'راهبری استراتژیک، معماری و برنامه‌ریزی فناوری برای تیم‌های مدرن.' },
      { title: 'پایگاه داده و بک‌اند', description: 'زیرساخت‌های امن و مقیاس‌پذیر برای رشد محصولات و کسب‌وکارها.' },
    ],
    projectsTitle: 'تمرکز‌های منتخب',
    projects: [
      { title: 'وب‌سایت‌های کسب‌وکار', summary: 'تجربه‌های دیجیتالی برندمحور برای ایجاد اعتماد و تبدیل بازدیدکننده به مشتری.', status: 'در حال برنامه‌ریزی' },
      { title: 'پلتفرم‌های سفارشی', summary: 'داشبوردها و سیستم‌های داخلی متناسب با فرآیندهای شما.', status: 'در حال برنامه‌ریزی' },
      { title: 'تجربه‌های موبایلی', summary: 'اپلیکیشن‌های موبایل اول و سریع برای کاربرانی که به تجربه روان نیاز دارند.', status: 'به‌زودی' },
    ],
    contactTitle: 'بیایید چیزی معنادار بسازیم',
    contactBody: 'برای پروژه یا سیستم دیجیتالی بعدی خود با ما صحبت کنید و نیازهای خود را بررسی کنیم.',
    emailLabel: 'ایمیل',
    phoneLabel: 'تلفن',
    addressLabel: 'موقعیت',
    footerText: '© 2026 امگا تکنولوژی. طراحی شده برای پیشرفت.',
  },
};

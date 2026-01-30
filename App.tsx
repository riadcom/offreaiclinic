
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Zap, 
  MessageSquare, 
  Calendar, 
  ArrowLeft, 
  Users, 
  TrendingUp, 
  Clock, 
  ShieldCheck,
  ChevronDown,
  PlayCircle
} from 'lucide-react';

// --- Helper Components ---

const SectionTitle: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-right'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Button: React.FC<{ 
  variant?: 'primary' | 'secondary' | 'outline'; 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}> = ({ variant = 'primary', children, className = '', onClick }) => {
  const base = "px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl active:scale-95";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-emerald-500 text-white hover:bg-emerald-600",
    outline: "border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 bg-white"
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-right hover:text-blue-600 transition-colors"
      >
        <span className="text-lg font-bold">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// --- Sections ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl">S</div>
        <span className="text-xl font-black text-slate-900 hidden sm:inline">SmartClinic <span className="text-blue-600">AI</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-semibold text-slate-600">
        <a href="#problem" className="hover:text-blue-600 transition-colors">المشكلة</a>
        <a href="#solution" className="hover:text-blue-600 transition-colors">الحل</a>
        <a href="#how-it-works" className="hover:text-blue-600 transition-colors">كيف يعمل</a>
        <a href="#pricing" className="hover:text-blue-600 transition-colors">التكلفة</a>
      </div>
      <Button variant="primary" className="py-2 px-5 text-sm md:text-base">احجز مقعدك الآن</Button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 gradient-mesh overflow-hidden">
    <div className="container mx-auto px-4 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm mb-8 animate-bounce">
        <Zap className="w-4 h-4" />
        <span>ورشة تطبيقية حصرية للعيادات الجزائرية</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6 max-w-4xl">
        كل استفسار من مريض... <br/>
        <span className="text-blue-600">يجب أن يجد طريقه للعلاج فوراً</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl leading-relaxed">
        حوّل رسائل مرضاك من فوضى القنوات إلى تجربة رعاية ذكية في مكان واحد. 
        ورشة تدريبية تطبيقية + نظام <span className="font-bold text-slate-900 underline decoration-blue-500">SmartClinic AI</span> المتكامل.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 w-full max-w-5xl">
        {[
          { text: "رد فوري على 90% من أسئلة المرضى", icon: <CheckCircle className="text-emerald-500" /> },
          { text: "تقليل ضغط الاستقبال حتى 70%", icon: <CheckCircle className="text-emerald-500" /> },
          { text: "بدون اشتراكات باهظة شهرياً", icon: <CheckCircle className="text-emerald-500" /> },
          { text: "جاهز خلال أيام وليس أشهر", icon: <CheckCircle className="text-emerald-500" /> },
        ].map((item, idx) => (
          <div key={idx} className="bg-white/50 border border-slate-200 p-4 rounded-xl flex items-center gap-3">
            {item.icon}
            <span className="font-bold text-slate-700 text-sm">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
        <Button variant="primary" className="w-full sm:w-auto group">
          <span>احجز مقعدك في الورشة المجانية</span>
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </Button>
        <Button variant="outline" className="w-full sm:w-auto group">
          <PlayCircle className="w-6 h-6 text-blue-600" />
          <span>شاهد كيف تعمل المنظومة</span>
        </Button>
      </div>

      <div className="mt-16 w-full max-w-5xl relative">
        <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full"></div>
        <img 
          src="https://picsum.photos/seed/clinic-dashboard/1200/600" 
          alt="Dashboard Preview" 
          className="relative rounded-2xl shadow-2xl border border-slate-200 w-full"
        />
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="py-24 bg-slate-900 text-white">
    <div className="container mx-auto px-4">
      <SectionTitle 
        title="لماذا يخسر الأطباء والعيادات مرضى يومياً… دون أن يشعروا؟" 
        subtitle="الفوضى الرقمية هي العدو الخفي لنمو عيادتك"
      />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xl text-slate-300 leading-relaxed italic border-r-4 border-blue-500 pr-6">
            "الرسائل تأتي من كل مكان: واتساب، إنستغرام، فيسبوك... لا أحد يرد فوراً. المريض ينتظر… ثم يختفي. أو يذهب لعيادة أخرى أسرع في الرد."
          </p>
          <div className="grid grid-cols-1 gap-4 mt-8">
            {[
              "ضياع الاستفسارات بين القنوات المتعددة",
              "ردود متأخرة أو غير موحدة تقتل المصداقية",
              "فريق استقبال مرهق يرتكب أخطاء بشرية",
              "مرضى يفقدون الثقة قبل الزيارة الأولى"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-slate-800 p-4 rounded-xl">
                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                <span className="text-lg font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/receptionist-stress/600/600" 
            alt="Stressed Staff" 
            className="rounded-3xl shadow-xl grayscale opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-500 text-white px-6 py-2 rounded-full font-bold text-xl rotate-12 shadow-lg">خسارة مرضى محتملين!</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Transformation = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">
          تخيّل لو أن كل استفسار يصل… <br className="hidden md:block"/> يتم الرد عليه فوراً وباحتراف
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            { title: "صندوق واحد", desc: "كل الرسائل تصب في مكان منظم" },
            { title: "رد فوري", desc: "بوت ذكي يجيب بمعلومات دقيقة 24/7" },
            { title: "تصعيد ذكي", desc: "الحالات الجدية تُحوّل تلقائياً لفريقك" },
            { title: "مواعيد جاهزة", desc: "الموعد يُحجز والتذكير يُرسل آلياً" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-100">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-2xl font-bold relative z-10">
          هذا ليس خيالاً… هذا ما ستتعلمه وتطبقه في ورشة SmartClinic AI
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solution" className="py-24 bg-slate-50">
    <div className="container mx-auto px-4">
      <SectionTitle title="الحل: ورشة تدريبية + نظام عملي جاهز للتطبيق" subtitle="نحن لا نبيعك برنامجاً فحسب، بل نبني معك نظاماً متكاملاً" />
      <div className="grid md:grid-cols-2 gap-8">
        {/* Column 1: The Workshop */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-blue-100 group hover:border-blue-500 transition-colors">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black mb-6">الورشة التدريبية: ماذا تقدم؟</h3>
          <ul className="space-y-4">
            {[
              "فهم عملي لمشكلة تعدد القنوات وكيفية حلها",
              "كيفية بناء Inbox موحد باستخدام Chatwoot",
              "تصميم رحلة مريض ذكية من أول رسالة إلى الحجز",
              "إعداد بوت ذكي يعتمد على بيانات عيادتك الحقيقية"
            ].map((text, idx) => (
              <li key={idx} className="flex gap-3 text-lg font-semibold text-slate-700">
                <CheckCircle className="text-blue-600 shrink-0 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Column 2: The Tech System */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-emerald-100 group hover:border-emerald-500 transition-colors">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <Zap className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black mb-6">النظام التقني: ماذا ستخرج به؟</h3>
          <ul className="space-y-4">
            {[
              "قناة واحدة مجمعة لكل رسائل التواصل الاجتماعي",
              "بوت ذكي مدعوم بتقنية RAG لردود دقيقة جداً",
              "نظام تصعيد ذكي للحالات المهمة (Urgent Leads)",
              "تكامل سلس مع فريق الاستقبال الحالي لديك"
            ].map((text, idx) => (
              <li key={idx} className="flex gap-3 text-lg font-semibold text-slate-700">
                <CheckCircle className="text-emerald-500 shrink-0 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
    <div className="container mx-auto px-4">
      <SectionTitle title="كيف تعمل المنظومة خطوة بخطوة؟" />
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { 
            step: "01", 
            title: "كل القنوات ← Chatwoot", 
            desc: "نجمع كل الرسائل في Inbox واحد منظم وسهل الاستخدام.",
            icon: <MessageSquare className="w-10 h-10 text-blue-600" />
          },
          { 
            step: "02", 
            title: "البوت الذكي يتدخل", 
            desc: "يرد، يشرح، يسأل، ويقترح الإجراء المناسب للمريض فوراً.",
            icon: <Zap className="w-10 h-10 text-blue-600" />
          },
          { 
            step: "03", 
            title: "الفريق يستلم الحالات", 
            desc: "فريقك يستلم الحالات الجاهزة للحجز دون فوضى أو ضغط.",
            icon: <Calendar className="w-10 h-10 text-blue-600" />
          }
        ].map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-center text-center group">
            <div className="mb-6 relative">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-xl border-4 border-white">
                {item.step}
              </div>
            </div>
            <h3 className="text-2xl font-black mb-4">{item.title}</h3>
            <p className="text-slate-600 text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BenefitSplit = () => (
  <section className="py-24 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-px bg-slate-200 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
        <div className="bg-white p-12 hover:bg-blue-50 transition-colors">
          <h3 className="text-3xl font-black text-blue-600 mb-8 flex items-center gap-3">
            <Users className="w-8 h-8" />
            <span>ماذا يستفيد المريض؟</span>
          </h3>
          <div className="space-y-6">
            {[
              { t: "رد فوري", d: "لا انتظار لساعات، إجابة في أقل من 5 ثوانٍ" },
              { t: "وضوح تام", d: "معلومات دقيقة عن الخيارات العلاجية والأسعار" },
              { t: "حجز سريع", d: "عملية حجز موعد مبسطة في دقيقة واحدة" },
              { t: "اهتمام خاص", d: "إحساس المريض بالاحترافية والتقدير لصحته" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle className="text-blue-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-xl">{item.t}</h4>
                  <p className="text-slate-600">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-12 hover:bg-emerald-50 transition-colors">
          <h3 className="text-3xl font-black text-emerald-600 mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8" />
            <span>ماذا تستفيد العيادة؟</span>
          </h3>
          <div className="space-y-6">
            {[
              { t: "زيادة الحجوزات", d: "تحويل 40% أكثر من الاستفسارات إلى زيارات فعلية" },
              { t: "تقليل الجهد", d: "توفير 5 ساعات يومياً من وقت فريق الاستقبال" },
              { t: "صورة احترافية", d: "الظهور بمظهر العيادة العصرية المواكبة للتكنولوجيا" },
              { t: "بيانات دقيقة", d: "تقارير واضحة عن اهتمامات المرضى وأداء القنوات" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle className="text-emerald-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-xl">{item.t}</h4>
                  <p className="text-slate-600">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProofOfValue = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <SectionTitle title="الأرقام لا تكذب" subtitle="تأثير حقيقي ومباشر على أداء عيادتك" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { val: "80-90%", label: "ردود تلقائية دقيقة", icon: <MessageSquare /> },
          { val: "60-80%", label: "تقليل عبء الاستقبال", icon: <Users /> },
          { val: "+45%", label: "زيادة التحويل الرقمي", icon: <TrendingUp /> },
          { val: "-90%", label: "تقليل تكلفة التشغيل", icon: <Zap /> }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition-transform">
            <div className="text-blue-600 mb-4 inline-block bg-blue-50 p-3 rounded-xl">{stat.icon}</div>
            <div className="text-4xl font-black text-slate-900 mb-2">{stat.val}</div>
            <div className="text-slate-600 font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-24 bg-slate-50">
    <div className="container mx-auto px-4">
      <SectionTitle title="تكلفة واضحة… بدون مفاجآت" />
      <div className="max-w-3xl mx-auto bg-white rounded-[3rem] p-12 shadow-2xl border border-blue-100 text-center">
        <div className="text-2xl font-bold text-slate-700 mb-8">لا اشتراك شهري عالي ومقيد</div>
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
            <span className="text-xl font-bold">WhatsApp API الرسمي</span>
            <span className="text-blue-600 font-black">حسب الاستهلاك</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
            <span className="text-xl font-bold">سيرفر تقني بسيط</span>
            <span className="text-blue-600 font-black">~ 2000 دج/شهر</span>
          </div>
          <div className="p-6 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
            <div className="text-emerald-700 font-black text-3xl mb-2">أقل من 5000 دج شهرياً</div>
            <p className="text-emerald-600 font-bold">هذا هو الحل العملي الذي يناسب واقع العيادات الجزائرية</p>
          </div>
        </div>
        <Button variant="primary" className="w-full">احجز مكانك في الورشة التطبيقية</Button>
      </div>
    </div>
  </section>
);

const WhoIsItFor = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <SectionTitle title="لمن هذه الورشة؟" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          "طبيب أو مدير عيادة طموح",
          "مركز أسنان، تصوير أو تحاليل",
          "عيادة لديها تواصل رقمي نشط",
          "من يريد نظاماً عملياً بسيطاً"
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">{idx + 1}</div>
            <span className="text-xl font-bold text-slate-800">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-24 bg-slate-50">
    <div className="container mx-auto px-4 max-w-4xl">
      <SectionTitle title="الأسئلة الشائعة" />
      <div className="bg-white rounded-3xl p-8 shadow-xl">
        {[
          { q: "هل أحتاج فريق تقني؟", a: "لا، النظام مصمم ليكون سهلاً. في الورشة سنقوم بكل الإعدادات التقنية معك خطوة بخطوة." },
          { q: "هل النظام مفتوح المصدر فعلاً؟", a: "نعم، نعتمد على تقنيات مفتوحة المصدر مثل Chatwoot، مما يعني أنك تملك بياناتك بالكامل ولا تدفع اشتراكات لشركات وسيطة." },
          { q: "كم مدة الورشة؟", a: "الورشة مكثفة وتطبيقية، عادة ما تكون لمدة يومين إلى 3 أيام لنضمن أن عيادتك أصبحت جاهزة تماماً." },
          { q: "هل يمكن تخصيص البوت حسب تخصص العيادة؟", a: "بالتأكيد. بوت RAG الذي نستخدمه يتدرب على ملفات عيادتك الخاصة، تخصصاتك، وأسعارك بدقة متناهية." }
        ].map((item, idx) => (
          <FAQItem key={idx} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 bg-blue-600 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-black mb-8">لا تدع المريض ينتظر... <br/> درّب عيادتك على الاستجابة الذكية اليوم</h2>
      <p className="text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
        عرض توضيحي مجاني + شرح الورشة خلال 15–20 دقيقة. 
        اكتشف كيف يمكننا مساعدتك.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="secondary" className="px-12 py-5 text-xl">احجز العرض المجاني الآن</Button>
        <Button variant="outline" className="px-12 py-5 text-xl border-white text-white bg-transparent hover:bg-white/10 hover:text-white">اطّلع على تفاصيل التكلفة</Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-lg">S</div>
        <span className="text-xl font-black text-white">SmartClinic <span className="text-blue-600">AI</span></span>
      </div>
      <p className="mb-8">الحل الذكي للعيادات الجزائرية الحديثة. تواصل، حجز، رعاية.</p>
      <div className="flex justify-center gap-8 mb-8">
        <ShieldCheck className="w-6 h-6" />
        <Zap className="w-6 h-6" />
        <Clock className="w-6 h-6" />
      </div>
      <div className="text-sm">
        جميع الحقوق محفوظة © {new Date().getFullYear()} SmartClinic AI
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Problem />
      <Transformation />
      <Solution />
      <HowItWorks />
      <BenefitSplit />
      <ProofOfValue />
      <Pricing />
      <WhoIsItFor />
      <FAQ />
      <FinalCTA />
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-200 z-50 md:hidden transition-transform duration-300 ${showStickyCTA ? 'translate-y-0' : 'translate-y-full'}`}>
        <Button variant="primary" className="w-full">احجز مقعدك في الورشة الآن</Button>
      </div>
    </div>
  );
};

export default App;

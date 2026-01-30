
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
  PlayCircle,
  Smartphone,
  Layout
} from 'lucide-react';

// --- Helper Components ---

const SectionTitle: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-right'}`}>
    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">{title}</h2>
    {subtitle && <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Button: React.FC<{ 
  variant?: 'primary' | 'secondary' | 'outline'; 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}> = ({ variant = 'primary', children, className = '', onClick }) => {
  const base = "px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl active:scale-95";
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
        <span className="text-xl font-bold">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 text-lg leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// --- Sections ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-blue-200 shadow-lg">
          <Zap size={24} strokeWidth={3} />
        </div>
        <span className="text-2xl font-black text-slate-900 tracking-tight hidden sm:inline">SmartClinic <span className="text-blue-600">AI</span></span>
      </div>
      <div className="hidden lg:flex items-center gap-8 font-bold text-slate-600">
        <a href="#problem" className="hover:text-blue-600 transition-colors">المشكلة</a>
        <a href="#solution" className="hover:text-blue-600 transition-colors">الحل</a>
        <a href="#how-it-works" className="hover:text-blue-600 transition-colors">كيف يعمل</a>
        <a href="#pricing" className="hover:text-blue-600 transition-colors">التكلفة</a>
      </div>
      <Button variant="primary" className="py-2.5 px-6 text-base shadow-sm">ابدأ الآن</Button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 gradient-mesh overflow-hidden">
    <div className="container mx-auto px-4 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full font-bold text-sm mb-8 animate-pulse shadow-sm border border-blue-100">
        <Zap className="w-4 h-4 fill-current" />
        <span>تكنولوجيا الرد الذكي للعيادات الجزائرية 🇩🇿</span>
      </div>
      <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.15] mb-6 max-w-5xl tracking-tight">
        كل استفسار من مريض... <br/>
        <span className="text-blue-600 bg-clip-text">يجب أن يجد طريقه للعلاج فوراً</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl leading-relaxed font-medium">
        حوّل رسائل مرضاك من فوضى القنوات إلى تجربة رعاية ذكية في مكان واحد. 
        بناء <span className="text-slate-900 font-bold border-b-4 border-blue-400">نظام رد آلي</span> متكامل بذكاء عيادتك.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 w-full max-w-5xl">
        {[
          { text: "رد فوري على 90% من الأسئلة", icon: <MessageSquare className="text-blue-500" /> },
          { text: "تقليل ضغط الاستقبال بنسبة 70%", icon: <Users className="text-blue-500" /> },
          { text: "دعم لجميع اللغات (عربية، دارجة، فرنسية)", icon: <Smartphone className="text-blue-500" /> },
          { text: "تحويل الرسائل إلى مواعيد مؤكدة", icon: <Calendar className="text-blue-500" /> },
        ].map((item, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur p-4 rounded-2xl flex items-center gap-3 border border-slate-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
            <div className="bg-blue-50 p-2 rounded-lg">{item.icon}</div>
            <span className="font-bold text-slate-700 text-sm md:text-base">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-5 w-full justify-center px-4 mb-20">
        <Button variant="primary" className="w-full sm:w-auto group px-10">
          <span>احجز مقعدك في الورشة المجانية</span>
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </Button>
        <Button variant="outline" className="w-full sm:w-auto group px-10">
          <PlayCircle className="w-6 h-6 text-blue-600" />
          <span>شاهد كيف تعمل المنظومة</span>
        </Button>
      </div>

      <div className="w-full max-w-6xl relative px-4 lg:px-0">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-20 blur-2xl rounded-[3rem]"></div>
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600" 
            alt="Modern Digital Clinic Dashboard" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 right-8 text-right text-white">
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/30 inline-flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="font-bold text-lg">النظام نشط في 12 عيادة حالياً</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="py-24 bg-slate-900 text-white overflow-hidden">
    <div className="container mx-auto px-4">
      <SectionTitle 
        title="لماذا يخسر الأطباء والعيادات مرضى يومياً… دون أن يشعروا؟" 
        subtitle="الفوضى الرقمية هي العائق الأكبر أمام نمو عيادتك وزيادة دخلها"
      />
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <p className="text-2xl text-slate-300 leading-relaxed font-light italic border-r-8 border-blue-500 pr-8">
            "الرسائل تأتي من كل مكان: واتساب، إنستغرام، فيسبوك... لا أحد يرد فوراً. المريض ينتظر… ثم يختفي. أو يذهب لعيادة أخرى أسرع في الرد."
          </p>
          <div className="grid grid-cols-1 gap-5">
            {[
              { text: "ضياع الاستفسارات بين القنوات المتعددة", icon: <Smartphone className="text-red-400" /> },
              { text: "ردود متأخرة تقتل ثقة المريض فوراً", icon: <Clock className="text-red-400" /> },
              { text: "فريق استقبال مرهق يرتكب أخطاء بشرية", icon: <Users className="text-red-400" /> },
              { text: "مرضى يفقدون الحماس قبل الزيارة الأولى", icon: <TrendingUp className="text-red-400 rotate-180" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-xl font-bold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800" 
            alt="Stressed Customer Service Team" 
            className="rounded-[3rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-red-600 text-white px-8 py-4 rounded-3xl font-black text-2xl -rotate-6 shadow-[0_0_30px_rgba(220,38,38,0.5)] border-4 border-white">
              75% من المرضى يغادرون لعدم الرد!
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Transformation = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="bg-blue-600 rounded-[4rem] p-10 md:p-24 text-white text-center shadow-3xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
        <h2 className="text-4xl md:text-6xl font-black mb-10 relative z-10 tracking-tight leading-tight">
          تخيّل لو أن كل استفسار يصل… <br className="hidden md:block"/> <span className="text-emerald-300">يتم الرد عليه فوراً وباحتراف</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {[
            { title: "صندوق واحد", desc: "كل الرسائل تصب في مكان واحد منظم", icon: <Layout className="w-8 h-8 mb-4" /> },
            { title: "ذكاء اصطناعي", desc: "بوت ذكي يجيب بدقة 24/7", icon: <Zap className="w-8 h-8 mb-4" /> },
            { title: "تصعيد ذكي", desc: "تحويل الحالات الجدية فوراً لفريقك", icon: <CheckCircle className="w-8 h-8 mb-4" /> },
            { title: "مواعيد جاهزة", desc: "تأكيد الحجوزات وإرسال تذكيرات", icon: <Calendar className="w-8 h-8 mb-4" /> }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/15 backdrop-blur-xl p-8 rounded-3xl border border-white/20 hover:bg-white/25 transition-all">
              <div className="flex justify-center text-emerald-300">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-50 text-lg leading-snug opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-2xl md:text-3xl font-black relative z-10 inline-block px-10 py-4 bg-emerald-500/20 backdrop-blur rounded-2xl border border-emerald-400/30">
          هذا ليس خيالاً… هذا ما ستمتلكه بعد الورشة التطبيقية
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solution" className="py-24 bg-slate-50">
    <div className="container mx-auto px-4">
      <SectionTitle title="الحل: ورشة تدريبية + نظام عملي جاهز للتطبيق" subtitle="نحن لا نبيعك اشتراكاً شهرياً، بل نبني لك أصولك التقنية الخاصة" />
      <div className="grid md:grid-cols-2 gap-10">
        {/* Column 1: The Workshop */}
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-blue-50 group hover:border-blue-500 transition-all">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shadow-blue-100">
            <Users size={40} />
          </div>
          <h3 className="text-3xl font-black mb-8">الورشة: ماذا سـنقدم لك؟</h3>
          <ul className="space-y-6">
            {[
              "فهم تقني لكيفية عمل القنوات الموحدة",
              "بناء لوحة تحكم Chatwoot خاصة بعيادتك",
              "تصميم رحلة المريض المثالية أوتوماتيكياً",
              "تدريب البوت على تخصصات عيادتك وأسعارك"
            ].map((text, idx) => (
              <li key={idx} className="flex gap-4 text-xl font-bold text-slate-700">
                <div className="bg-blue-50 p-1.5 rounded-full shrink-0 h-fit mt-1"><CheckCircle className="text-blue-600 w-5 h-5" /></div>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Column 2: The Tech System */}
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-emerald-50 group hover:border-emerald-500 transition-all">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-lg shadow-emerald-100">
            <Smartphone size={40} />
          </div>
          <h3 className="text-3xl font-black mb-8">النظام: ما الذي ستملكه؟</h3>
          <ul className="space-y-6">
            {[
              "صندوق رسائل واحد (WhatsApp, Meta, Telegram)",
              "بوت ذكي RAG (لا يخطئ في المعلومات الطبية)",
              "نظام تنبيهات ذكي للفريق الطبي في الحالات الحرجة",
              "امتلاك كامل للسيرفر والبيانات دون شركات وسيطة"
            ].map((text, idx) => (
              <li key={idx} className="flex gap-4 text-xl font-bold text-slate-700">
                <div className="bg-emerald-50 p-1.5 rounded-full shrink-0 h-fit mt-1"><CheckCircle className="text-emerald-500 w-5 h-5" /></div>
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
  <section id="how-it-works" className="py-24 bg-white relative">
    <div className="container mx-auto px-4">
      <SectionTitle title="كيف تعمل المنظومة خطوة بخطوة؟" />
      <div className="grid md:grid-cols-3 gap-16 relative">
        <div className="hidden lg:block absolute top-1/3 left-0 w-full h-1 bg-slate-100 -z-10"></div>
        {[
          { 
            step: "01", 
            title: "تجميع القنوات", 
            desc: "كل رسائل واتساب، إنستغرام، وفيسبوك تصل لصندوق واحد (Omnichannel Dashboard).",
            icon: <Smartphone className="w-12 h-12 text-blue-600" />
          },
          { 
            step: "02", 
            title: "تفعيل البوت", 
            desc: "البوت الذكي يتدخل فوراً للرد على الأسئلة المتكررة وتوجيه المريض بشكل صحيح.",
            icon: <Zap className="w-12 h-12 text-blue-600" />
          },
          { 
            step: "03", 
            title: "تحويل المواعيد", 
            desc: "الفريق يستلم محادثات جاهزة للحجز فقط، مما يوفر 70% من وقت الموظفين.",
            icon: <Calendar className="w-12 h-12 text-blue-600" />
          }
        ].map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-center text-center group">
            <div className="mb-8 relative">
              <div className="w-28 h-28 bg-white border-2 border-slate-100 rounded-[2.5rem] flex items-center justify-center shadow-xl group-hover:border-blue-500 group-hover:-translate-y-2 transition-all">
                {item.icon}
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-2xl border-4 border-white shadow-lg">
                {item.step}
              </div>
            </div>
            <h3 className="text-2xl font-black mb-4">{item.title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BenefitSplit = () => (
  <section className="py-24 bg-slate-900">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-slate-800 p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800')] opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
          <h3 className="text-4xl font-black text-blue-400 mb-10 flex items-center gap-4 relative z-10">
            <Users className="w-10 h-10" />
            <span>للمريض</span>
          </h3>
          <div className="space-y-8 relative z-10">
            {[
              { t: "رد فوري 24/7", d: "إجابات شافية في أي وقت من اليوم أو الليل" },
              { t: "تجربة رقمية عصرية", d: "تواصل سهل دون الحاجة للاتصال المتكرر" },
              { t: "وضوح في المواعيد", d: "تأكيد فوري وحجز مباشر عبر الرابط الذكي" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-5">
                <CheckCircle className="text-blue-400 shrink-0 w-8 h-8" />
                <div>
                  <h4 className="font-bold text-2xl text-white mb-1">{item.t}</h4>
                  <p className="text-slate-400 text-lg leading-snug">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-800 p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800')] opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
          <h3 className="text-4xl font-black text-emerald-400 mb-10 flex items-center gap-4 relative z-10">
            <TrendingUp className="w-10 h-10" />
            <span>للعيادة</span>
          </h3>
          <div className="space-y-8 relative z-10">
            {[
              { t: "تحويل مبيعات أعلى", d: "خسارة صفر رسائل تعني 30-50% زيادة في الحجوزات" },
              { t: "توفير رواتب إضافية", d: "البوت يقوم بعمل 3 موظفين استقبال بدقة تامة" },
              { t: "براند أقوى", d: "ظهور عيادتك كأكثر عيادة تقنية وتطوراً في منطقتك" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-5">
                <CheckCircle className="text-emerald-400 shrink-0 w-8 h-8" />
                <div>
                  <h4 className="font-bold text-2xl text-white mb-1">{item.t}</h4>
                  <p className="text-slate-400 text-lg leading-snug">{item.d}</p>
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
      <SectionTitle title="أرقام حقيقية من عياداتنا" subtitle="هذه النتائج حققتها عيادات طب أسنان وتجميل في الجزائر بالفعل" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { val: "92%", label: "دقة إجابات البوت الطبي", icon: <MessageSquare /> },
          { val: "65%", label: "توفير في وقت الاستقبال", icon: <Clock /> },
          { val: "+40%", label: "زيادة في المواعيد المحجوزة", icon: <TrendingUp /> },
          { val: "5000 دج", label: "تكلفة التشغيل الشهرية القصوى", icon: <Zap /> }
        ].map((stat, idx) => (
          <div key={idx} className="bg-slate-50 border border-slate-100 p-10 rounded-[2.5rem] text-center hover:bg-white hover:shadow-2xl transition-all duration-500 group">
            <div className="text-blue-600 mb-6 inline-block bg-white p-5 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">{stat.icon}</div>
            <div className="text-5xl font-black text-slate-900 mb-3 tracking-tighter">{stat.val}</div>
            <div className="text-slate-600 font-bold text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <SectionTitle title="تكلفة تشغيل ذكية… بدون مفاجآت" />
      <div className="max-w-4xl mx-auto bg-white rounded-[4rem] p-12 md:p-20 shadow-3xl border border-blue-50 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-lg shadow-blue-200">
          الحل الاقتصادي الأول للعيادات
        </div>
        <div className="text-3xl font-black text-slate-800 mb-12 text-center">لا توجد اشتراكات شهرية تعجيزية</div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="text-xl font-black mb-4">التكاليف الثابتة (تقريبية)</h4>
            <div className="space-y-4">
              <div className="flex justify-between font-bold text-lg">
                <span>سيرفر Chatwoot</span>
                <span className="text-blue-600">~ 2500 دج/شهر</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>API واتساب</span>
                <span className="text-blue-600">حسب الاستهلاك</span>
              </div>
            </div>
          </div>
          <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 flex flex-col justify-center text-center">
            <div className="text-emerald-700 font-black text-4xl mb-2">~ 5000 دج</div>
            <p className="text-emerald-600 font-bold text-xl leading-snug">ميزانية تشغيل شهرية كاملة تغنيك عن موظف براتب 40,000 دج</p>
          </div>
        </div>
        <Button variant="primary" className="w-full py-6 text-2xl shadow-blue-200 shadow-2xl">سجل اهتمامك بالورشة الآن</Button>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4 max-w-4xl">
      <SectionTitle title="الأسئلة المتكررة" />
      <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100">
        {[
          { q: "هل أحتاج لخبرة برمجية؟", a: "أبداً. الورشة مصممة للأطباء ومديري العيادات. سنقوم بالجانب التقني سوياً في نظام بسيط مخصص لك." },
          { q: "هل النظام يدعم واتساب للأعمال؟", a: "نعم، النظام يدعم WhatsApp Cloud API الرسمي، وهو أقوى وأكثر استقراراً من واتساب العادي." },
          { q: "كم تستغرق الورشة؟", a: "نحن نؤمن بالسرعة. الورشة مكثفة (عادة يومين) تخرج منها بنظام يعمل ويستقبل رسائل المرضى فعلياً." },
          { q: "هل يمكن للبوت التحدث بالدارجة الجزائرية؟", a: "بالتأكيد! البوت مدعوم بأحدث تقنيات الذكاء الاصطناعي التي تفهم الدارجة، العربية، والفرنسية ببراعة تامة." }
        ].map((item, idx) => (
          <FAQItem key={idx} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 bg-blue-600 relative overflow-hidden text-white">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-10"></div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tight">لا تدع المريض ينتظر... <br/> <span className="text-emerald-300">درّب عيادتك على الذكاء اليوم</span></h2>
      <p className="text-2xl md:text-3xl mb-14 opacity-90 max-w-3xl mx-auto leading-relaxed">
        احصل على استشارة مجانية لمدة 20 دقيقة لنشرح لك كيف سنغير تجربة مرضك ونزيد حجوزات عيادتك.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Button variant="secondary" className="px-16 py-6 text-2xl shadow-emerald-500/30 shadow-2xl">احجز استشارتك المجانية</Button>
        <Button variant="outline" className="px-16 py-6 text-2xl border-white text-white bg-transparent hover:bg-white hover:text-blue-600">تفاصيل الورشة القادمة</Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 bg-slate-900 text-slate-400 border-t border-white/5">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">S</div>
        <span className="text-2xl font-black text-white">SmartClinic <span className="text-blue-600">AI</span></span>
      </div>
      <p className="text-xl mb-10 max-w-xl mx-auto">الرائد الأول في تحويل العيادات الجزائرية إلى عيادات ذكية تعتمد على البيانات والذكاء الاصطناعي.</p>
      <div className="flex justify-center gap-10 mb-12">
        <ShieldCheck className="w-8 h-8 hover:text-blue-400 cursor-help" />
        <Zap className="w-8 h-8 hover:text-blue-400 cursor-help" />
        <Clock className="w-8 h-8 hover:text-blue-400 cursor-help" />
      </div>
      <div className="text-sm font-medium tracking-widest opacity-50">
        جميع الحقوق محفوظة © {new Date().getFullYear()} SMARTCLINIC AI ALGERIA
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
    <div className="min-h-screen bg-slate-50 selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Transformation />
      <Solution />
      <HowItWorks />
      <BenefitSplit />
      <ProofOfValue />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-lg border-t border-slate-200 z-50 md:hidden transition-all duration-500 transform ${showStickyCTA ? 'translate-y-0 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]' : 'translate-y-full'}`}>
        <Button variant="primary" className="w-full text-xl py-5">احجز مقعدك في الورشة الآن</Button>
      </div>
    </div>
  );
};

export default App;

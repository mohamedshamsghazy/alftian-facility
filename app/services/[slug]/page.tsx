"use client"

import { useParams } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react"

// هذه البيانات يمكن جلبها لاحقاً من قاعدة بيانات أو ملف ترجمة موسع
const servicesData = {
  construction: {
    en: {
      title: "Smart Construction",
      description: "We utilize hybrid timber methods and industrial prefabrication to deliver carbon-neutral projects rapidly.",
      details: [
        "Modular Prefabrication techniques for speed.",
        "Urban Densification expertise.",
        "Sustainable Timber-Hybrid Technology."
      ],
      image: "/images/gemini-generated-image-14f7ih14f7ih14f7.jpeg"
    },
    de: {
      title: "Smart Construction",
      description: "Wir nutzen hybride Holzbauweisen und industrielle Vorfertigung, um CO2-neutrale Projekte schnell zu realisieren.",
      details: [
        "Modulare Vorfertigung für Geschwindigkeit.",
        "Experten für städtische Nachverdichtung.",
        "Nachhaltige Holz-Hybrid-Technologie."
      ],
      image: "/images/gemini-generated-image-14f7ih14f7ih14f7.jpeg"
    },
    ar: {
      title: "البناء الذكي",
      description: "نستخدم طرق البناء الخشبي الهجين والتصنيع المسبق لتسليم مشاريع محايدة للكربون بسرعة فائقة.",
      details: [
        "تقنيات التصنيع المسبق للسرعة.",
        "خبرة في التكثيف الحضري.",
        "تكنولوجيا الأخشاب الهجينة المستدامة."
      ],
      image: "/images/gemini-generated-image-14f7ih14f7ih14f7.jpeg"
    }
  },
  "facility-management": {
    en: {
      title: "Digital Facility Management",
      description: "A 100% digital workflow connecting tenants, landlords, and our 24/7 response team.",
      details: [
        "Technical Facility Management (Maintenance).",
        "Infrastructural Services (Cleaning, Security).",
        "Commercial Property Management."
      ],
      image: "/images/gemini-generated-image-d2gul3d2gul3d2gu.jpeg"
    },
    de: {
      title: "Digitales Facility Management",
      description: "Ein zu 100 % digitaler Workflow, der Mieter, Vermieter und unser 24/7-Reaktionsteam verbindet.",
      details: [
        "Technisches Gebäudemanagement (Wartung).",
        "Infrastrukturelles Gebäudemanagement (Reinigung, Sicherheit).",
        "Kaufmännisches Gebäudemanagement."
      ],
      image: "/images/gemini-generated-image-d2gul3d2gul3d2gu.jpeg"
    },
    ar: {
      title: "إدارة المرافق الرقمية",
      description: "سير عمل رقمي بالكامل يربط المستأجرين والملاك وفريق الاستجابة للطوارئ لدينا.",
      details: [
        "إدارة المرافق الفنية (الصيانة).",
        "خدمات البنية التحتية (النظافة، الأمن).",
        "إدارة الممتلكات التجارية."
      ],
      image: "/images/gemini-generated-image-d2gul3d2gul3d2gu.jpeg"
    }
  },
  modernization: {
    en: {
      title: "Serial Modernization",
      description: "Data-driven renovation planning using digital twins to revitalize large housing stocks.",
      details: [
        "Energy efficiency upgrades.",
        "Facade renovation.",
        "Smart building integration."
      ],
      image: "/images/gemini-generated-image-bjnhfbbjnhfbbjnh.jpeg"
    },
    de: {
      title: "Serielle Modernisierung",
      description: "Datengestützte Sanierungsplanung mit digitalen Zwillingen zur Revitalisierung großer Wohnungsbestände.",
      details: [
        "Energieeffizienz-Upgrades.",
        "Fassadensanierung.",
        "Integration intelligenter Gebäudetechnik."
      ],
      image: "/images/gemini-generated-image-bjnhfbbjnhfbbjnh.jpeg"
    },
    ar: {
      title: "التحديث المتسلسل",
      description: "تخطيط التجديد القائم على البيانات باستخدام التوائم الرقمية لإحياء المباني السكنية.",
      details: [
        "تحديثات كفاءة الطاقة.",
        "تجديد الواجهات.",
        "دمج المباني الذكية."
      ],
      image: "/images/gemini-generated-image-bjnhfbbjnhfbbjnh.jpeg"
    }
  }
}

export default function ServiceDetail() {
  const params = useParams()
  const { language } = useLanguage()

  // التأكد من أن الـ slug موجود في البيانات
  const slug = params.slug as string
  const service = servicesData[slug as keyof typeof servicesData]

  if (!service) {
    return notFound()
  }

  const content = service[language as keyof typeof service]

  return (
    <div className="min-h-screen bg-emerald-darker pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* زر العودة */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center text-white/60 hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4 me-2" />
            {language === 'ar' ? 'عودة للخدمات' : (language === 'de' ? 'Zurück zu Leistungen' : 'Back to Services')}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* المحتوى النصي */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {content.title}
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                {content.description}
              </p>
            </div>

            <div className="bg-emerald-dark/50 border border-white/5 rounded-2xl p-8">
              <h3 className="text-gold font-bold mb-6 uppercase tracking-wider text-sm">
                {language === 'ar' ? 'ماذا نقدم' : (language === 'de' ? 'Leistungsumfang' : 'Key Features')}
              </h3>
              <ul className="space-y-4">
                {content.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                    <span className="text-white/90">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gold text-emerald-950 px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                {language === 'ar' ? 'اطلب الخدمة الآن' : (language === 'de' ? 'Dienstleistung anfragen' : 'Request Service')}
              </Link>
            </div>
          </div>

          {/* الصورة الجانبية */}
          {/* FIX: Changed lg:aspect-[4/5] to lg:aspect-4/5 */}
          <div className="relative aspect-square lg:aspect-4/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={content.image}
              alt={content.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            {/* FIX: Changed bg-gradient-to-t to bg-linear-to-t */}
            <div className="absolute inset-0 bg-linear-to-t from-emerald-darker/80 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <p className="text-white/80 text-sm italic">
                  &quot;Alftian sets the benchmark for quality and precision.&quot;
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
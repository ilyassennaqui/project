import React, { useState } from "react";
import { QuoteParameters } from "../types";
import { IMAGES } from "../images";
import { Mail, PhoneCall, CheckCircle2, RefreshCw, User, MapPin, MessageSquare, Send, AlertCircle, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function TechnicalInquiry() {
  const { t, language } = useLanguage();

  // State for form fields
  const [params, setParams] = useState<QuoteParameters>({
    fullName: "",
    address: "",
    phone: "",
    messageText: ""
  });

  // State to track if fields are touched or blurred to avoid pre-mature red error messages
  const [touched, setTouched] = useState<Record<keyof QuoteParameters, boolean>>({
    fullName: false,
    address: false,
    phone: false,
    messageText: false
  });

  // Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [copied, setCopied] = useState(false);

  // Helper function to build email details
  const getEmailDetails = () => {
    const emailTo = "ikralum1@gmail.com";
    const subject = language === "ar"
      ? `[IKRALUM] طلب دراسة ومقاييس فني جديد - ${params.fullName}`
      : language === "en"
        ? `[IKRALUM] New Technical Quote Request - ${params.fullName}`
        : `[IKRALUM] Nouvelle Demande de Devis - ${params.fullName}`;

    const bodyContent = language === "ar" ? 
`أهلاً بك،

تم تقديم طلب دراسة فنية وعرض أسعار جديد على موقع إكرالوم.

بيانات العميل:
===========================================
الاسم الكامل : ${params.fullName}
العنوان      : ${params.address}
رقم الهاتف   : ${params.phone}

الرسالة والمواصفات:
===========================================
${params.messageText}

مع خالص التقدير،
نظام الدعم الفني لتعاونية إكرالوم`
: language === "en" ?
`Hello,

A new technical study & quote request has been submitted on the IKRALUM website.

PROSPECT DETAILS:
===========================================
Full Name : ${params.fullName}
Address   : ${params.address}
Phone     : ${params.phone}

MESSAGE & SPECIFICATIONS:
===========================================
${params.messageText}

Best regards,
Technical Contact System - IKRALUM Cooperative`
:
`Bonjour,

Une nouvelle demande d'étude et de devis a été soumise sur le site web IKRALUM.

DÉTAILS DU PROSPECT :
===========================================
Nom Complet : ${params.fullName}
Adresse     : ${params.address}
Téléphone   : ${params.phone}

MESSAGE & SPÉCIFICATIONS :
===========================================
${params.messageText}

Cordialement,
Le Système de Contact de la Coopérative IKRALUM`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(bodyContent);

    return {
      emailTo,
      subject,
      bodyContent,
      mailtoUrl: `mailto:${emailTo}?subject=${encodedSubject}&body=${encodedBody}`,
      gmailComposeUrl: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${encodedSubject}&body=${encodedBody}`
    };
  };

  // Validation rules
  const errors = {
    fullName: params.fullName.trim() === "" 
      ? (touched.fullName ? (language === "ar" ? "الاسم الكامل مطلوب." : language === "en" ? "Full name is required." : "Le nom complet est obligatoire.") : "")
      : params.fullName.trim().length < 3 
        ? (language === "ar" ? "يجب أن يتكون الاسم من 3 أحرف على الأقل." : language === "en" ? "Full name must be at least 3 characters." : "Le nom complet doit comporter au moins 3 caractères.") 
        : "",
    address: params.address.trim() === "" 
      ? (touched.address ? (language === "ar" ? "العنوان مطلوب." : language === "en" ? "Address is required." : "L'adresse est obligatoire.") : "")
      : params.address.trim().length < 5 
        ? (language === "ar" ? "يجب أن يتكون العنوان من 5 أحرف على الأقل." : language === "en" ? "Address must be at least 5 characters." : "L'adresse doit comporter au moins 5 caractères.") 
        : "",
    phone: (() => {
      const val = params.phone.trim();
      if (val === "") {
        return touched.phone ? (language === "ar" ? "رقم الهاتف مطلوب." : language === "en" ? "Phone number is required." : "Le numéro de téléphone est obligatoire.") : "";
      }
      
      // Check for invalid characters
      const allowedCharsRegex = /^[0-9\s.+\-()]+$/;
      if (!allowedCharsRegex.test(val)) {
        return language === "ar"
          ? "يحتوي الرقم على رموز غير صالحة. يسمح فقط بالأرقام وعلامة (+) والمسافات والشرطات والملحقات"
          : language === "en"
            ? "Invalid characters. Only digits, +, spaces, dashes, and parentheses are allowed."
            : "Caractères invalides. Seuls les chiffres, +, les espaces, tirets et parenthèses sont autorisés.";
      }
      
      // Count actual digits to prevent bypasses with spaces or dashes
      const digitsOnly = val.replace(/\D/g, "");
      if (digitsOnly.length < 9) {
        return language === "ar"
          ? `رقم الهاتف قصير جداً (دخلت ${digitsOnly.length} أرقام، المطلوب 9 على الأقل).`
          : language === "en"
            ? `Phone number is too short (entered ${digitsOnly.length} digits, minimum 9 required).`
            : `Numéro trop court (saisi ${digitsOnly.length} chiffres, minimum 9 requis).`;
      }
      
      if (digitsOnly.length > 15) {
        return language === "ar"
          ? `رقم الهاتف طويل جداً (دخلت ${digitsOnly.length} أرقام، الحد الأقصى 15).`
          : language === "en"
            ? `Phone number is too long (entered ${digitsOnly.length} digits, maximum 15 allowed).`
            : `Numéro trop long (saisi ${digitsOnly.length} chiffres, maximum 15 autorisés).`;
      }
      
      // Check country code positioning
      if (val.includes("+") && val.indexOf("+") !== 0) {
        return language === "ar"
          ? "رمز البلد يجب أن يبدأ بعلامة (+) فقط في البداية."
          : language === "en"
            ? "The country code indicator (+) must only be at the beginning of the number."
            : "L'indicateur de code pays (+) doit être uniquement au début du numéro.";
      }

      return "";
    })(),
    messageText: params.messageText.trim() === "" 
      ? (touched.messageText ? (language === "ar" ? "نص الرسالة مطلوب." : language === "en" ? "Message description is required." : "Le message de description est obligatoire.") : "")
      : params.messageText.trim().length < 10 
        ? (language === "ar" ? "يجب أن يتكون الوصف من 10 أحرف على الأقل." : language === "en" ? "Project description must be at least 10 characters." : "La description de votre projet doit faire au moins 10 caractères.") 
        : ""
  };

  const handleInputChange = (
    key: keyof QuoteParameters,
    value: string
  ) => {
    setParams((prev) => ({ ...prev, [key]: value }));
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const handleBlur = (key: keyof QuoteParameters) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const isPhoneValid = (() => {
    const val = params.phone.trim();
    if (val === "") return false;
    const allowedCharsRegex = /^[0-9\s.+\-()]+$/;
    if (!allowedCharsRegex.test(val)) return false;
    const digitsOnly = val.replace(/\D/g, "");
    if (digitsOnly.length < 9 || digitsOnly.length > 15) return false;
    if (val.includes("+") && val.indexOf("+") !== 0) return false;
    return true;
  })();

  const isFormValid = 
    params.fullName.trim().length >= 3 &&
    params.address.trim().length >= 5 &&
    isPhoneValid &&
    params.messageText.trim().length >= 10;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      fullName: true,
      address: true,
      phone: true,
      messageText: true
    });

    if (!isFormValid) return;

    setIsSubmitting(true);
    
    const { gmailComposeUrl } = getEmailDetails();

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      setTicketId(`IKRA-${Math.floor(Math.random() * 90000) + 10000}`);
      
      const link = document.createElement("a");
      link.href = gmailComposeUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <div className="w-full bg-[#f7f9ff] dark:bg-[#0a0f16] text-[#161c23] dark:text-[#f3f4f6] py-16 px-6 md:px-16 transition-colors duration-300" id="consultation-center">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Outer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries, Map location & Cooperative introduction */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#75777a] dark:text-[#8a929b] uppercase block mb-3">
                // {t("inquiryBadge")}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold font-hanken tracking-tight text-[#000101] dark:text-white uppercase font-sans">
                {t("inquiryTitle")}
              </h1>
              <p className="text-sm text-[#44474a] dark:text-slate-300 leading-relaxed mt-4 font-sans">
                {t("inquiryDesc")}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 font-mono">
              <div className="p-6 bg-white dark:bg-[#121820] border border-[#c5c6ca] dark:border-[#2a3543] flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#eef4fd] dark:bg-[#009df0]/10 text-[#ba1a1a] dark:text-[#009df0] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase text-[#000101] dark:text-white tracking-wider">
                    {language === "ar" ? "الخط الهاتفي المباشر للورشة" : language === "en" ? "Direct Atelier Line" : "Ligne Directe Atelier"}
                  </h3>
                  <p className="text-[11px] text-[#75777a] dark:text-slate-400 mt-1">
                    {language === "ar" ? "لطلب الاستشارات الفنية ومقاساتك الحالية" : language === "en" ? "To discuss specs, lengths, and widths directly." : "Pour échanger de vive voix sur vos dimensions."}
                  </p>
                  <a href="tel:+212607546332" className="text-sm font-bold text-[#ba1a1a] dark:text-[#009df0] block mt-2 hover:underline">
                    +212 607546332
                  </a>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-[#121820] border border-[#c5c6ca] dark:border-[#2a3543] flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#eef4fd] dark:bg-[#009df0]/10 text-[#ba1a1a] dark:text-[#009df0] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase text-[#000101] dark:text-white tracking-wider">
                    {language === "ar" ? "البريد الإلكتروني التقني" : language === "en" ? "Technical Specifications Email" : "Courriel Spécifications"}
                  </h3>
                  <p className="text-[11px] text-[#75777a] dark:text-slate-400 mt-1">
                    {language === "ar" ? "لإرسال ملفات الكاد للتصاميم ثنائية الأبعاد" : language === "en" ? "For sending architectural drawings, PDF/CAD layouts." : "Pour l'envoi de fichiers, de plans au format PDF/CAD."}
                  </p>
                  <a href="mailto:ikralum1@gmail.com" className="text-sm font-bold text-[#ba1a1a] dark:text-[#009df0] block mt-2 hover:underline">
                    ikralum1@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Zone industrielle Tassila Map Badge */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#75777a] dark:text-[#8a929b]">
                // {language === "ar" ? "موقع ورشة الإنتاج" : language === "en" ? "Atelier Production Location" : "LOCALISATION ATELIER DE PRODUCTION"}
              </h4>
              <div className="relative border border-[#c5c6ca] dark:border-[#2a3543] bg-[#1a1c1e] aspect-video overflow-hidden group select-none shadow-sm">
                <img 
                  src={IMAGES.industrialZoneMapAbstract.src} 
                  alt={IMAGES.industrialZoneMapAbstract.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60 grayscale filter contrast-125 transition-transform duration-1000 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-indigo-900/10 pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#1a1c1e]/90 text-white border border-[#75777a] dark:border-[#2a3543] px-3.5 py-2 font-mono text-[9px] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ba1a1a] dark:bg-[#009df0] rounded-full animate-ping" />
                  <span className="truncate">{language === "ar" ? "التعاونية المباشرة للمغرب — الدار البيضاء" : language === "en" ? "DIRECT COOPERATIVE MOROCCO — CASABLANCA" : "COOPÉRATIVE DIRECTE MAROC — CASABLANCA"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Container */}
          <div className="lg:col-span-7 bg-white dark:bg-[#121820] border border-[#c5c6ca] dark:border-[#2a3543] p-8 md:p-12 transition-colors duration-300 shadow-md">
            <AnimatePresence mode="wait">
              {!submissionSuccess ? (
                <motion.div
                  key="inquiry-form-active"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="border-b border-[#c5c6ca] dark:border-[#2a3543] pb-5">
                    <h2 className="text-2xl font-bold font-hanken tracking-tight uppercase text-[#000101] dark:text-white">
                      {t("formTitle")}
                    </h2>
                    <p className="text-[10px] font-mono uppercase text-[#75777a] dark:text-[#8a929b] tracking-wider mt-1.5">
                      {t("formDesc")}
                    </p>
                  </div>

                  {/* Clean Form Inputs strictly representing: fullName, address, phone, messageText */}
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    
                    {/* Nom Complet Input */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <label className="font-mono text-xs font-bold text-[#44474a] dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-[#ba1a1a] dark:text-[#009df0]" />
                          {t("lblFullName")}
                        </label>
                        {touched.fullName && (
                          <span className="font-mono text-[10px]">
                            {errors.fullName ? (
                              <span className="text-red-500 dark:text-red-400 flex items-center gap-1">
                                <AlertCircle className="w-3.5 h-3.5" /> {language === "ar" ? "غير صالح" : language === "en" ? "Invalid" : "Invalide"}
                              </span>
                            ) : (
                              <span className="text-green-600 dark:text-green-400 flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> {language === "ar" ? "صحيح" : language === "en" ? "Correct" : "Correct"}
                              </span>
                            )}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        required
                        placeholder={t("phFullName")}
                        value={params.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        onBlur={() => handleBlur("fullName")}
                        className={`bg-transparent border-0 border-b px-0 py-2.5 text-xs font-mono text-black dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-colors ${
                          touched.fullName && errors.fullName
                            ? "border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500"
                            : touched.fullName && !errors.fullName
                            ? "border-green-500 focus:border-green-500 dark:border-green-500 dark:focus:border-green-500"
                            : "border-[#c5c6ca] dark:border-slate-700 focus:border-[#ba1a1a] dark:focus:border-[#009df0] focus:ring-0"
                        }`}
                      />
                      {touched.fullName && errors.fullName && (
                        <p className="text-[11px] text-red-500 dark:text-red-400 font-sans mt-0.5">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Adresse Input */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <label className="font-mono text-xs font-bold text-[#44474a] dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#ba1a1a] dark:text-[#009df0]" />
                          {t("lblAddress")}
                        </label>
                        {touched.address && (
                          <span className="font-mono text-[10px]">
                            {errors.address ? (
                              <span className="text-red-500 dark:text-red-400 flex items-center gap-1">
                                <AlertCircle className="w-3.5 h-3.5" /> {language === "ar" ? "غير صالح" : language === "en" ? "Invalid" : "Invalide"}
                              </span>
                            ) : (
                              <span className="text-green-600 dark:text-green-400 flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> {language === "ar" ? "صحيح" : language === "en" ? "Correct" : "Correct"}
                              </span>
                            )}
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        required
                        placeholder={t("phAddress")}
                        value={params.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        onBlur={() => handleBlur("address")}
                        className={`bg-transparent border-0 border-b px-0 py-2.5 text-xs font-mono text-black dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-colors ${
                          touched.address && errors.address
                            ? "border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500"
                            : touched.address && !errors.address
                            ? "border-green-500 focus:border-green-500 dark:border-green-500 dark:focus:border-green-500"
                            : "border-[#c5c6ca] dark:border-slate-700 focus:border-[#ba1a1a] dark:focus:border-[#009df0] focus:ring-0"
                        }`}
                      />
                      {touched.address && errors.address && (
                        <p className="text-[11px] text-red-500 dark:text-red-400 font-sans mt-0.5">{errors.address}</p>
                      )}
                    </div>

                    {/* Téléphone Input */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <label className="font-mono text-xs font-bold text-[#44474a] dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
                          <PhoneCall className="w-3.5 h-3.5 text-[#ba1a1a] dark:text-[#009df0]" />
                          {t("lblPhone")}
                        </label>
                        {touched.phone && (
                          <span className="font-mono text-[10px]">
                            {errors.phone ? (
                              <span className="text-red-500 dark:text-red-400 flex items-center gap-1">
                                <AlertCircle className="w-3.5 h-3.5" /> {language === "ar" ? "غير صالح" : language === "en" ? "Invalid" : "Invalide"}
                              </span>
                            ) : (
                              <span className="text-green-600 dark:text-green-400 flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> {language === "ar" ? "صحيح" : language === "en" ? "Correct" : "Correct"}
                              </span>
                            )}
                          </span>
                        )}
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder={t("phPhone")}
                        value={params.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        className={`bg-transparent border-0 border-b px-0 py-2.5 text-xs font-mono text-black dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-colors ${
                          touched.phone && errors.phone
                            ? "border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500"
                            : touched.phone && !errors.phone
                            ? "border-green-500 focus:border-green-500 dark:border-green-500 dark:focus:border-green-500"
                            : "border-[#c5c6ca] dark:border-slate-700 focus:border-[#ba1a1a] dark:focus:border-[#009df0] focus:ring-0"
                        }`}
                      />
                      {touched.phone && errors.phone && (
                        <p className="text-[11px] text-red-500 dark:text-red-400 font-sans mt-0.5">{errors.phone}</p>
                      )}
                    </div>

                    {/* Messages (labeled Messages / message / messages) */}
                    <div className="flex flex-col gap-2.5 pt-2">
                      <div className="flex justify-between items-center">
                        <label className="font-mono text-xs font-bold text-[#44474a] dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
                          <MessageSquare className="w-3.5 h-3.5 text-[#ba1a1a] dark:text-[#009df0]" />
                          {t("lblMsg")}
                        </label>
                        {touched.messageText && (
                          <span className="font-mono text-[10px]">
                            {errors.messageText ? (
                              <span className="text-red-500 dark:text-red-400 flex items-center gap-1">
                                <AlertCircle className="w-3.5 h-3.5" /> {language === "ar" ? "غير صالح" : language === "en" ? "Invalid" : "Invalide"}
                              </span>
                            ) : (
                              <span className="text-green-600 dark:text-green-400 flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> {language === "ar" ? "صحيح" : language === "en" ? "Correct" : "Correct"}
                              </span>
                            )}
                          </span>
                        )}
                      </div>
                      <textarea
                        required
                        rows={5}
                        placeholder={t("phMsg")}
                        value={params.messageText}
                        onChange={(e) => handleInputChange("messageText", e.target.value)}
                        onBlur={() => handleBlur("messageText")}
                        className={`border bg-transparent text-black dark:text-white px-4 py-3.5 text-xs font-sans resize-none rounded-none outline-none transition-colors leading-relaxed ${
                          touched.messageText && errors.messageText
                            ? "border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500"
                            : touched.messageText && !errors.messageText
                            ? "border-green-500 focus:border-green-500 dark:border-green-500 dark:focus:border-green-500"
                            : "border-[#c5c6ca] dark:border-slate-700 focus:border-[#ba1a1a] dark:focus:border-[#009df0] focus:ring-0"
                        }`}
                      />
                      {touched.messageText && errors.messageText && (
                        <p className="text-[11px] text-red-500 dark:text-red-400 font-sans mt-0.5">{errors.messageText}</p>
                      )}
                    </div>

                    {/* Rnvoyer Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || (Object.values(touched).some(Boolean) && !isFormValid)}
                      className="w-full bg-[#161c23] dark:bg-[#009df0] hover:bg-[#ba1a1a] dark:hover:bg-[#008bd4] text-white py-4 text-xs uppercase font-mono font-bold tracking-widest hover:scale-[1.005] active:scale-[0.99] transition-all duration-300 disabled:opacity-40 flex items-center justify-center gap-2 rounded-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>{t("submitting")}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>{t("btnSubmit")}</span>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="submission-success-summary"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-12 px-2"
                >
                  <div className="w-16 h-16 bg-[#eef4fd] dark:bg-[#009df0]/10 text-[#ba1a1a] dark:text-[#009df0] rounded-none border border-[#c5c6ca] dark:border-[#2a3543] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 stroke-[1.5]" />
                  </div>

                  <h3 className="text-3xl font-extrabold font-hanken tracking-tight uppercase text-[#000101] dark:text-white">
                    {t("successTitle")}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    {t("successDesc")}
                  </p>

                  <div className="bg-[#1a1c1e] text-left p-6 font-mono text-xs max-w-md mx-auto space-y-3.5 text-white border border-[#2a3543]">
                    <p className="text-[#009df0] font-bold border-b border-[#75777a]/40 pb-2 flex justify-between uppercase">
                      <span>{t("ticketLabel") || "Ticket"}</span>
                      <span>{ticketId}</span>
                    </p>
                    <p>
                      <span className="text-[#838486]">{language === "ar" ? "المرسل إليه :" : language === "en" ? "Recipient:" : "Destinataire :"}</span> ikralum1@gmail.com
                    </p>
                    <p>
                      <span className="text-[#838486]">{language === "ar" ? "الاسم الكامل :" : language === "en" ? "Full name:" : "Nom Complet :"}</span> {params.fullName.toUpperCase()}
                    </p>
                    <p>
                      <span className="text-[#838486]">{language === "ar" ? "العنوان :" : language === "en" ? "Address:" : "Adresse :"}</span> {params.address}
                    </p>
                    <p>
                      <span className="text-[#838486]">{language === "ar" ? "الهاتف :" : language === "en" ? "Phone:" : "Téléphone :"}</span> {params.phone}
                    </p>
                    <p className="line-clamp-2">
                      <span className="text-[#838486]">{language === "ar" ? "الرسالة :" : language === "en" ? "Message:" : "Message :"}</span> {params.messageText}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto pt-4">
                    <a
                      href={getEmailDetails().gmailComposeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#ba1a1a] dark:bg-[#009df0] hover:bg-[#a21414] dark:hover:bg-[#008bd4] text-white py-3.5 px-4 text-xs uppercase font-mono font-bold tracking-widest transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{language === "ar" ? "إرسال البريد الإلكتروني" : language === "en" ? "Send Technical Email" : "Envoyer l'E-mail"}</span>
                    </a>

                    <button
                      onClick={() => {
                        const { bodyContent } = getEmailDetails();
                        navigator.clipboard.writeText(bodyContent);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2200);
                      }}
                      className="w-full border border-slate-700 dark:border-slate-500 hover:border-black dark:hover:border-white text-[#161c23] dark:text-slate-200 py-3.5 px-4 text-xs uppercase font-mono font-bold tracking-widest transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                          <span>{t("copiedLabel")}</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-3.5 h-3.5 opacity-30" />
                          <span>{t("copyBtn")}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmissionSuccess(false);
                        setParams({
                          fullName: "",
                          address: "",
                          phone: "",
                          messageText: ""
                        });
                      }}
                      className="border border-transparent hover:border-slate-400 dark:hover:border-slate-600 px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-[#75777a] dark:text-slate-400 hover:text-black dark:hover:text-white transition-all rounded-none cursor-pointer"
                    >
                      {t("resetBtn")}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}

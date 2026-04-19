import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Send, CheckCircle, User, Mail, Building, FileText, Sparkles } from "lucide-react";

const categories = [
  "Công nghệ & Đổi mới",
  "Khoa học & Nghiên cứu",
  "Nghệ thuật & Văn hóa",
  "Kinh doanh & Khởi nghiệp",
  "Giáo dục & Đào tạo",
  "Y tế & Sức khỏe",
  "Môi trường & Bền vững",
  "Cộng đồng & Nhân đạo",
];

export function NominationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nomineeNam: "",
    nomineeTitle: "",
    nomineOrg: "",
    category: "",
    achievement: "",
    nominatorName: "",
    nominatorEmail: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  return (
    <section id="nominate" ref={ref} className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #080f24 0%, #050d1f 100%)" }}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(212,168,83,0.15) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.25)" }}>
            <Sparkles className="w-4 h-4" style={{ color: "#D4A853" }} />
            <span className="text-xs font-medium" style={{ color: "#D4A853", letterSpacing: "0.15em" }}>ĐỀ CỬ TÀI NĂNG</span>
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Bạn biết ai xứng đáng được{" "}
            <span style={{ color: "#D4A853" }}>vinh danh?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Mỗi người đều có thể là một anh hùng thầm lặng. Hãy đề cử và giúp chúng tôi ghi nhận những đóng góp xứng đáng được tôn vinh.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="text-center py-20 rounded-3xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,168,83,0.3)" }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: 2 }}
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "linear-gradient(135deg, #D4A853, #c49540)" }}
              >
                <CheckCircle className="w-10 h-10 text-[#050d1f]" />
              </motion.div>
              <h3 className="text-white text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Cảm ơn bạn đã đề cử!
              </h3>
              <p className="mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                Chúng tôi đã nhận được thông tin và sẽ xem xét trong vòng 2-3 tuần.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ nomineeNam: "", nomineeTitle: "", nomineOrg: "", category: "", achievement: "", nominatorName: "", nominatorEmail: "" }); }}
                className="px-6 py-3 rounded-full text-sm border transition-all hover:scale-105"
                style={{ borderColor: "rgba(212,168,83,0.4)", color: "#D4A853", background: "rgba(212,168,83,0.05)" }}
              >
                Đề cử người khác →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl p-8 md:p-10" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
              {/* Nominee Info */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-5 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "linear-gradient(135deg, #D4A853, #c49540)", color: "#050d1f" }}>1</div>
                  <h3 className="text-white font-medium">Thông tin người được đề cử</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "nomineeNam", label: "Họ và tên", placeholder: "Nguyễn Văn A", icon: User },
                    { name: "nomineeTitle", label: "Chức danh / Nghề nghiệp", placeholder: "Giám đốc, Nhà khoa học...", icon: Building },
                  ].map(field => (
                    <div key={field.name}>
                      <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>{field.label}</label>
                      <div className="relative">
                        <field.icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(255,255,255,0.3)" }} />
                        <input
                          type="text"
                          name={field.name}
                          value={(form as any)[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.9)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Tổ chức / Đơn vị</label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(255,255,255,0.3)" }} />
                      <input
                        type="text"
                        name="nomineOrg"
                        value={form.nomineOrg}
                        onChange={handleChange}
                        placeholder="Tên công ty, trường học..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)" }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Lĩnh vực <span style={{ color: "#D4A853" }}>*</span></label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: form.category ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)" }}
                    >
                      <option value="" disabled>Chọn lĩnh vực...</option>
                      {categories.map(c => <option key={c} value={c} style={{ background: "#050d1f" }}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Mô tả thành tích xuất sắc <span style={{ color: "#D4A853" }}>*</span></label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-3.5 w-4 h-4" style={{ color: "rgba(255,255,255,0.3)" }} />
                    <textarea
                      name="achievement"
                      value={form.achievement}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Mô tả cụ thể những đóng góp, thành tích và tác động của người được đề cử..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none resize-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Nominator Info */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-5 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(99,102,241,0.3)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.4)" }}>2</div>
                  <h3 className="text-white font-medium">Thông tin người đề cử</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "nominatorName", label: "Họ và tên của bạn", placeholder: "Trần Thị B", icon: User },
                    { name: "nominatorEmail", label: "Email liên hệ", placeholder: "email@example.com", icon: Mail, type: "email" },
                  ].map(field => (
                    <div key={field.name}>
                      <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>{field.label} <span style={{ color: "#D4A853" }}>*</span></label>
                      <div className="relative">
                        <field.icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(255,255,255,0.3)" }} />
                        <input
                          type={field.type || "text"}
                          name={field.name}
                          value={(form as any)[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
                          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl text-sm font-semibold transition-all hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-70"
                style={{ background: "linear-gradient(135deg, #D4A853, #c49540)", color: "#050d1f", boxShadow: "0 10px 40px rgba(212,168,83,0.35)" }}
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 rounded-full border-2 border-[#050d1f] border-t-transparent"
                    />
                    Đang gửi đề cử...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Gửi đề cử ngay
                  </>
                )}
              </button>
              <p className="text-center text-xs mt-4" style={{ color: "rgba(255,255,255,0.35)" }}>
                Bằng cách gửi, bạn đồng ý với điều khoản sử dụng và chính sách bảo mật của chúng tôi.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
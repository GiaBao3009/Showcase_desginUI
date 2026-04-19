import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, Quote, ExternalLink, Star } from "lucide-react";

const FEATURED_IMG = "https://images.unsplash.com/photo-1762344348047-e481e6a6e830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNvbmZpZGVudCUyMHdvbWFuJTIwYXdhcmR8ZW58MXx8fHwxNzc2MzE2NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080";

const achievements = [
  { icon: "🏆", label: "Giải thưởng Đổi mới Quốc gia 2025" },
  { icon: "🎓", label: "Tiến sĩ ĐH Stanford, Hoa Kỳ" },
  { icon: "💡", label: "15 bằng sáng chế AI & Machine Learning" },
  { icon: "🌏", label: "Diễn giả tại 20+ hội nghị quốc tế" },
];

export function FeaturedHonoree() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="featured" ref={ref} className="relative py-28 overflow-hidden" style={{ background: "#050d1f" }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(212,168,83,0.07) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.25)" }}>
            <Star className="w-4 h-4" style={{ color: "#D4A853" }} />
            <span className="text-xs font-medium" style={{ color: "#D4A853", letterSpacing: "0.15em" }}>NHÂN VẬT NỔI BẬT</span>
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Gương mặt của năm <span style={{ color: "#D4A853" }}>2026</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 500, margin: "0 auto" }}>
            Người đã truyền cảm hứng và tạo ra những đột phá đáng kinh ngạc trong năm vừa qua.
          </p>
        </motion.div>

        {/* Featured Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img src={FEATURED_IMG} alt="Nguyễn Minh Anh" className="w-full h-full object-cover" />
              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,13,31,0.9) 0%, transparent 50%)" }} />

              {/* Award badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(5,13,31,0.8)", backdropFilter: "blur(10px)", border: "1px solid rgba(212,168,83,0.4)" }}>
                <Award className="w-4 h-4" style={{ color: "#D4A853" }} />
                <span className="text-xs font-medium" style={{ color: "#D4A853" }}>NGƯỜI DẪN ĐẦU</span>
              </div>

              {/* Stars */}
              <div className="absolute top-6 right-6 flex gap-1">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="w-4 h-4 fill-current" style={{ color: "#D4A853" }} />
                ))}
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-2xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Nguyễn Minh Anh</p>
                <p className="text-sm" style={{ color: "#D4A853" }}>CEO & Founder • TechViet AI Labs</p>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Hà Nội, Việt Nam</p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl flex flex-col items-center justify-center shadow-2xl"
              style={{ background: "linear-gradient(135deg, #D4A853, #c49540)", color: "#050d1f" }}
            >
              <span className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                #1
              </span>
              <span className="text-xs font-semibold text-center leading-tight">Top vinh<br />danh 2026</span>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Quote */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: "linear-gradient(to bottom, #D4A853, transparent)" }} />
              <Quote className="w-8 h-8 mb-3 opacity-40" style={{ color: "#D4A853" }} />
              <p className="text-xl italic leading-relaxed" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Playfair Display', serif" }}>
                "Thành công không phải là đích đến, mà là hành trình không ngừng học hỏi, đổi mới và tạo ra giá trị cho cộng đồng."
              </p>
              <p className="mt-4 text-sm" style={{ color: "#D4A853" }}>— Nguyễn Minh Anh</p>
            </div>

            {/* Bio */}
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
              Nguyễn Minh Anh là nhà sáng lập và CEO của TechViet AI Labs — startup AI hàng đầu Đông Nam Á với định giá hơn 500 triệu USD. Với hơn 10 năm nghiên cứu về trí tuệ nhân tạo, cô đã dẫn dắt đội ngũ 200+ kỹ sư phát triển các giải pháp AI ứng dụng trong y tế, giáo dục và nông nghiệp.
            </p>

            {/* Achievements */}
            <div className="space-y-3">
              <p className="text-sm font-semibold mb-4" style={{ color: "#D4A853", letterSpacing: "0.1em" }}>THÀNH TỰU NỔI BẬT</p>
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="text-lg">{a.icon}</span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{a.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 pt-2">
              <button
                className="flex-1 py-3 rounded-xl text-sm font-medium transition-all hover:scale-105 flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(135deg, #D4A853, #c49540)", color: "#050d1f" }}
              >
                <ExternalLink className="w-4 h-4" />
                Xem hồ sơ đầy đủ
              </button>
              <button
                className="px-6 py-3 rounded-xl text-sm font-medium border transition-all hover:scale-105"
                style={{ borderColor: "rgba(212,168,83,0.4)", color: "rgba(255,255,255,0.8)", background: "rgba(212,168,83,0.05)" }}
              >
                Chia sẻ
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
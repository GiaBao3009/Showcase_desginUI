import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Được Hall of Excellence công nhận là một trong những khoảnh khắc ý nghĩa nhất trong cuộc đời tôi. Giải thưởng này không chỉ là vinh dự cá nhân mà còn là nguồn động lực để tôi tiếp tục cống hiến.",
    name: "GS. Phạm Văn Học",
    role: "Nhà nghiên cứu Vật lý • ĐH Quốc gia Hà Nội",
    avatar: "PH",
    color: "#3B82F6",
  },
  {
    id: 2,
    quote: "Đây là nơi những người thầm lặng được nhìn nhận. Rất nhiều anh hùng trong cộng đồng chưa bao giờ được ghi nhận — Hall of Excellence đã thay đổi điều đó.",
    name: "Dr. Nguyễn Thị Bình",
    role: "Giám đốc Y tế • Tổ chức WHO Việt Nam",
    avatar: "NB",
    color: "#10B981",
  },
  {
    id: 3,
    quote: "Khi nhận giải, tôi nhận ra rằng những gì mình làm đã có ý nghĩa thực sự với nhiều người hơn tôi nghĩ. Cảm ơn vì đã tạo ra không gian vinh danh những giá trị tốt đẹp.",
    name: "TS. Lê Minh Tuấn",
    role: "Founder • EduTech Startup",
    avatar: "LT",
    color: "#8B5CF6",
  },
  {
    id: 4,
    quote: "Hall of Excellence đã kết nối tôi với những người tài năng khác trên khắp Việt Nam. Mạng lưới những người được vinh danh chính là tài sản vô giá nhất.",
    name: "Vũ Thị Lan Anh",
    role: "CEO • Creative Studios Vietnam",
    avatar: "VL",
    color: "#EC4899",
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  return (
    <section ref={ref} className="py-28 relative overflow-hidden" style={{ background: "#080f24" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.07) 0%, transparent 60%)" }} />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.25)" }}>
            <Quote className="w-4 h-4" style={{ color: "#D4A853" }} />
            <span className="text-xs font-medium" style={{ color: "#D4A853", letterSpacing: "0.15em" }}>CẢM NHẬN</span>
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Họ nói gì về <span style={{ color: "#D4A853" }}>Hall of Excellence</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="p-10 rounded-3xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* Quote mark */}
                <div className="mb-6">
                  <Quote className="w-12 h-12 opacity-20" style={{ color: "#D4A853" }} />
                </div>

                <p className="text-xl italic mb-8" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Playfair Display', serif", lineHeight: 1.8 }}>
                  "{testimonials[current].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: testimonials[current].color + "30", border: `2px solid ${testimonials[current].color}`, color: testimonials[current].color }}>
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <p className="text-white font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>{testimonials[current].name}</p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background: i === current ? "#D4A853" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:scale-110"
                style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.7)" }}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "linear-gradient(135deg, #D4A853, #c49540)", color: "#050d1f" }}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
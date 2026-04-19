import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Star, Award, Sparkles } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1650240852447-46505dba4726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMGNlcmVtb255JTIwZ2FsYSUyMGVsZWdhbnQlMjBnb2xkfGVufDF8fHx8MTc3NjMxNjU2OHww&ixlib=rb-4.1.0&q=80&w=1080";

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 4 + 3,
}));

function CountUpNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function HeroSection() {
  const handleScrollDown = () => {
    const el = document.querySelector("#featured");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="Award ceremony" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,13,31,0.7) 0%, rgba(5,13,31,0.85) 60%, rgba(5,13,31,1) 100%)" }} />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: "radial-gradient(circle, #F5D78E, #D4A853)",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center 30%, rgba(212,168,83,0.12) 0%, transparent 70%)" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
          style={{ borderColor: "rgba(212,168,83,0.4)", background: "rgba(212,168,83,0.08)", backdropFilter: "blur(10px)" }}
        >
          <Sparkles className="w-4 h-4" style={{ color: "#D4A853" }} />
          <span className="text-sm" style={{ color: "#D4A853", letterSpacing: "0.1em" }}>VINH DANH XUẤT SẮC 2026</span>
          <Sparkles className="w-4 h-4" style={{ color: "#D4A853" }} />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white mb-6"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.1 }}
        >
          Tôn vinh những{" "}
          <span style={{ background: "linear-gradient(135deg, #D4A853, #F5D78E, #D4A853)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            tài năng
          </span>
          <br />xuất sắc nhất
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-10"
          style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          Nơi chúng tôi ghi nhận và tôn vinh những cá nhân đã có đóng góp vượt bậc trong các lĩnh vực — từ công nghệ, khoa học, nghệ thuật đến kinh doanh và giáo dục.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => { const el = document.querySelector("#hall-of-fame"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, #D4A853, #c49540)", color: "#050d1f", boxShadow: "0 0 30px rgba(212,168,83,0.4)" }}
          >
            <Award className="w-4 h-4" />
            Khám phá danh sách
          </button>
          <button
            onClick={() => { const el = document.querySelector("#nominate"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-4 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-105 flex items-center gap-2"
            style={{ borderColor: "rgba(212,168,83,0.5)", color: "rgba(255,255,255,0.85)", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}
          >
            <Star className="w-4 h-4" style={{ color: "#D4A853" }} />
            Đề cử tài năng
          </button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: 250, suffix: "+", label: "Người được vinh danh" },
            { value: 12, suffix: "", label: "Năm hoạt động" },
            { value: 30, suffix: "+", label: "Lĩnh vực ghi nhận" },
            { value: 15, suffix: "", label: "Quốc gia tham gia" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(212,168,83,0.15)" }}>
              <div className="mb-1" style={{ color: "#D4A853", fontSize: "2rem", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                <CountUpNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        <span className="text-xs" style={{ letterSpacing: "0.15em" }}>CUỘN XUỐNG</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5 group-hover:text-amber-400 transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}
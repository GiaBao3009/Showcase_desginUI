import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, Users, Globe, Trophy } from "lucide-react";

const milestones = [
  {
    year: "2014",
    title: "Khởi đầu hành trình",
    description: "Hall of Excellence được thành lập với sứ mệnh ghi nhận và tôn vinh những cá nhân xuất sắc tại Việt Nam.",
    stat: "50 người vinh danh đầu tiên",
    icon: Trophy,
    color: "#D4A853",
  },
  {
    year: "2016",
    title: "Mở rộng lĩnh vực",
    description: "Chương trình mở rộng sang 10 lĩnh vực mới, bao gồm khoa học, y tế, nghệ thuật và môi trường.",
    stat: "10 lĩnh vực ghi nhận",
    icon: Globe,
    color: "#3B82F6",
  },
  {
    year: "2018",
    title: "Vươn tầm quốc tế",
    description: "Lần đầu tiên mời các chuyên gia quốc tế tham gia ban giám khảo và kết nối với các tổ chức toàn cầu.",
    stat: "8 quốc gia tham dự",
    icon: Globe,
    color: "#10B981",
  },
  {
    year: "2020",
    title: "Chuyển đổi số",
    description: "Tổ chức lễ trao giải trực tuyến lần đầu tiên, thu hút hơn 500,000 lượt theo dõi trên các nền tảng số.",
    stat: "500K lượt xem trực tuyến",
    icon: Users,
    color: "#8B5CF6",
  },
  {
    year: "2022",
    title: "Chương trình Thanh niên",
    description: "Ra mắt hạng mục vinh danh đặc biệt cho các tài năng dưới 30 tuổi, tạo cú hích cho thế hệ trẻ.",
    stat: "30 gương mặt trẻ xuất sắc",
    icon: Users,
    color: "#EC4899",
  },
  {
    year: "2026",
    title: "Hôm nay & Tương lai",
    description: "Với 250+ cá nhân được vinh danh từ 15 quốc gia, chúng tôi tiếp tục hành trình tôn vinh những giá trị con người.",
    stat: "250+ anh hùng thầm lặng",
    icon: Trophy,
    color: "#D4A853",
    isLatest: true,
  },
];

export function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" ref={ref} className="py-28 relative overflow-hidden" style={{ background: "#050d1f" }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(212,168,83,0.06) 0%, transparent 60%)" }} />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.25)" }}>
            <Calendar className="w-4 h-4" style={{ color: "#D4A853" }} />
            <span className="text-xs font-medium" style={{ color: "#D4A853", letterSpacing: "0.15em" }}>HÀNH TRÌNH PHÁT TRIỂN</span>
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            12 năm <span style={{ color: "#D4A853" }}>vinh danh</span> tài năng
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 480, margin: "0 auto" }}>
            Từ những bước đi đầu tiên đến một cộng đồng toàn cầu ghi nhận sự xuất sắc.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(212,168,83,0.4) 10%, rgba(212,168,83,0.4) 90%, transparent)" }} />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={`flex items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
                >
                  {/* Content */}
                  <div className="md:w-[calc(50%-2rem)] w-full">
                    <div
                      className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: m.isLatest
                          ? "linear-gradient(135deg, rgba(212,168,83,0.12), rgba(212,168,83,0.06))"
                          : "rgba(255,255,255,0.04)",
                        border: `1px solid ${m.isLatest ? "rgba(212,168,83,0.35)" : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span style={{ color: m.color, fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700 }}>
                          {m.year}
                        </span>
                        {m.isLatest && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: "linear-gradient(135deg, #D4A853, #c49540)", color: "#050d1f" }}>
                            Hiện tại
                          </span>
                        )}
                      </div>
                      <h3 className="text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{m.title}</h3>
                      <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{m.description}</p>
                      <div className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg w-fit"
                        style={{ background: m.color + "15", border: `1px solid ${m.color}30`, color: m.color }}>
                        ✦ {m.stat}
                      </div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative flex-shrink-0 hidden md:block">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center border-4"
                      style={{ background: "#050d1f", borderColor: m.color + "60", boxShadow: `0 0 20px ${m.color}30` }}>
                      <Icon className="w-5 h-5" style={{ color: m.color }} />
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="md:w-[calc(50%-2rem)] hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
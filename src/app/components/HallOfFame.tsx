import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Star, MapPin, ExternalLink, Award, ChevronRight } from "lucide-react";

const categories = [
  { id: "all", label: "Tất cả", emoji: "🌟" },
  { id: "tech", label: "Công nghệ", emoji: "💻" },
  { id: "science", label: "Khoa học", emoji: "🔬" },
  { id: "art", label: "Nghệ thuật", emoji: "🎨" },
  { id: "business", label: "Kinh doanh", emoji: "💼" },
  { id: "education", label: "Giáo dục", emoji: "📚" },
  { id: "health", label: "Y tế", emoji: "🏥" },
];

const honorees = [
  {
    id: 1,
    name: "Trần Văn Khoa",
    title: "CTO • FutureTech Vietnam",
    category: "tech",
    location: "TP. Hồ Chí Minh",
    year: 2026,
    rating: 5,
    award: "Giải Vàng Công nghệ",
    achievement: "Phát triển nền tảng blockchain đầu tiên tại Việt Nam phục vụ 2 triệu người dùng.",
    image: "https://images.unsplash.com/photo-1758599543128-8e7f12729948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMHN1aXQlMjBhY2hpZXZlbWVudHxlbnwxfHx8fDE3NzYzMTY1NjF8MA&ixlib=rb-4.1.0&q=80&w=400",
    tags: ["AI", "Blockchain", "Fintech"],
    rank: 2,
  },
  {
    id: 2,
    name: "Lê Thu Hương",
    title: "Nhà khoa học • Viện KHCN Quốc gia",
    category: "science",
    location: "Hà Nội",
    year: 2026,
    rating: 5,
    award: "Giải Nobel Vùng",
    achievement: "Nghiên cứu đột phá về vaccine thế hệ mới chống lại các bệnh nhiệt đới.",
    image: "https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjByZXNlYXJjaGVyJTIwcG9ydHJhaXQlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc3NjMxNjU2NXww&ixlib=rb-4.1.0&q=80&w=400",
    tags: ["Vaccine", "Y học", "Nghiên cứu"],
    rank: 3,
  },
  {
    id: 3,
    name: "Phạm Đức Minh",
    title: "CEO • GreenViet Corp",
    category: "business",
    location: "Đà Nẵng",
    year: 2025,
    rating: 5,
    award: "Doanh nhân xuất sắc",
    achievement: "Xây dựng chuỗi năng lượng xanh phục vụ 500,000 hộ gia đình trong 3 năm.",
    image: "https://images.unsplash.com/photo-1738566061505-556830f8b8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMG1hbiUyMGFzaWFuJTIwY29uZmlkZW50fGVufDF8fHx8MTc3NjMxNjU2OHww&ixlib=rb-4.1.0&q=80&w=400",
    tags: ["Năng lượng xanh", "ESG", "Startup"],
    rank: 4,
  },
  {
    id: 4,
    name: "Ngô Thị Lan",
    title: "Giám đốc Sáng tạo • ArtSpace VN",
    category: "art",
    location: "Hội An",
    year: 2025,
    rating: 5,
    award: "Nghệ sĩ của năm",
    achievement: "Tạo ra phong trào nghệ thuật số kết hợp truyền thống dân tộc với công nghệ AI.",
    image: "https://images.unsplash.com/photo-1736455298825-14f2b7e627b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpcmVjdG9yJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjMxNjU2NHww&ixlib=rb-4.1.0&q=80&w=400",
    tags: ["Digital Art", "Văn hóa", "NFT"],
    rank: 5,
  },
  {
    id: 5,
    name: "Đinh Thanh Tú",
    title: "Hiệu trưởng • Đại học Sáng tạo VN",
    category: "education",
    location: "Cần Thơ",
    year: 2025,
    rating: 4,
    award: "Nhà giáo Nhân dân",
    achievement: "Đưa 10,000 học sinh nông thôn tiếp cận giáo dục STEM chất lượng cao miễn phí.",
    image: "https://images.unsplash.com/photo-1770392988936-dc3d8581e0c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc2MjM0OTA4fDA&ixlib=rb-4.1.0&q=80&w=400",
    tags: ["STEM", "Giáo dục", "Cộng đồng"],
    rank: 6,
  },
  {
    id: 6,
    name: "Vũ Hoàng Nam",
    title: "Bác sĩ • BV Bạch Mai",
    category: "health",
    location: "Hà Nội",
    year: 2024,
    rating: 5,
    award: "Thầy thuốc Ưu tú",
    achievement: "Ứng dụng AI chẩn đoán ung thư giai đoạn sớm, cứu sống hơn 5,000 bệnh nhân.",
    image: "https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZW50cmVwcmVuZXVyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzYzMTY1NjV8MA&ixlib=rb-4.1.0&q=80&w=400",
    tags: ["AI Y tế", "Ung thư", "Chẩn đoán"],
    rank: 7,
  },
];

const categoryColors: Record<string, string> = {
  tech: "#3B82F6",
  science: "#10B981",
  art: "#EC4899",
  business: "#F59E0B",
  education: "#8B5CF6",
  health: "#EF4444",
};

function HonoreeCard({ honoree, index }: { honoree: typeof honorees[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const catColor = categoryColors[honoree.category] || "#D4A853";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? catColor + "60" : "rgba(255,255,255,0.08)"}`,
        transition: "border-color 0.3s ease",
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${catColor}20` : "none",
      }}
    >
      {/* Rank badge */}
      <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
        style={{ background: "rgba(5,13,31,0.8)", border: `1px solid ${catColor}60`, color: catColor }}>
        #{honoree.rank}
      </div>

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={honoree.image}
          alt={honoree.name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,13,31,1) 0%, rgba(5,13,31,0.3) 60%, transparent 100%)" }} />
        
        {/* Category tag */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
          style={{ background: catColor + "25", border: `1px solid ${catColor}60`, color: catColor, backdropFilter: "blur(10px)" }}>
          {categories.find(c => c.id === honoree.category)?.emoji} {categories.find(c => c.id === honoree.category)?.label}
        </div>

        {/* Award floating */}
        <motion.div
          animate={{ y: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
          style={{ background: "linear-gradient(135deg, #D4A853, #c49540)", color: "#050d1f", fontWeight: 600 }}>
          <Award className="w-3 h-3" />
          {honoree.award}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-white mb-0.5" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem" }}>{honoree.name}</h3>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{honoree.title}</p>
          </div>
          <div className="flex gap-0.5 mt-0.5">
            {Array.from({ length: honoree.rating }).map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" style={{ color: "#D4A853" }} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 mb-3">
          <MapPin className="w-3 h-3" style={{ color: "rgba(255,255,255,0.35)" }} />
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{honoree.location}</span>
          <span className="text-xs ml-auto px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>
            {honoree.year}
          </span>
        </div>

        <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
          {honoree.achievement}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {honoree.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-md text-xs"
              style={{ background: catColor + "15", color: catColor, border: `1px solid ${catColor}30` }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Action */}
        <motion.button
          animate={{ x: hovered ? 4 : 0 }}
          className="flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: hovered ? "#D4A853" : "rgba(255,255,255,0.5)" }}
        >
          Xem hồ sơ
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export function HallOfFame() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const filtered = honorees.filter(h => {
    const matchCat = activeCategory === "all" || h.category === activeCategory;
    const matchSearch = h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.achievement.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="hall-of-fame" ref={ref} className="py-28 relative" style={{ background: "linear-gradient(180deg, #050d1f 0%, #080f24 100%)" }}>
      {/* Decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 65%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "rgba(212,168,83,0.1)", border: "1px solid rgba(212,168,83,0.25)" }}>
            <Award className="w-4 h-4" style={{ color: "#D4A853" }} />
            <span className="text-xs font-medium" style={{ color: "#D4A853", letterSpacing: "0.15em" }}>SẢN LỄ VINH DANH</span>
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Đại sảnh <span style={{ color: "#D4A853" }}>Danh Vọng</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 500, margin: "0 auto" }}>
            Những cá nhân đã đạt thành tích xuất sắc và được cộng đồng bình chọn vinh danh.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Tìm kiếm tên, lĩnh vực, thành tích..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3.5 rounded-2xl text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.9)",
                caretColor: "#D4A853",
              }}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>⌘K</div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="relative px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: activeCategory === cat.id ? "linear-gradient(135deg, #D4A853, #c49540)" : "rgba(255,255,255,0.05)",
                color: activeCategory === cat.id ? "#050d1f" : "rgba(255,255,255,0.7)",
                border: activeCategory === cat.id ? "none" : "1px solid rgba(255,255,255,0.1)",
                fontWeight: activeCategory === cat.id ? 600 : 400,
                boxShadow: activeCategory === cat.id ? "0 4px 20px rgba(212,168,83,0.4)" : "none",
              }}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.length > 0 ? (
              filtered.map((h, i) => (
                <HonoreeCard key={h.id} honoree={h} index={i} />
              ))
            ) : (
              <div className="col-span-3 text-center py-20">
                <p className="text-4xl mb-4">🔍</p>
                <p style={{ color: "rgba(255,255,255,0.4)" }}>Không tìm thấy kết quả phù hợp</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Load more */}
        {filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <button
              className="px-8 py-3.5 rounded-full text-sm border transition-all hover:scale-105"
              style={{ borderColor: "rgba(212,168,83,0.4)", color: "#D4A853", background: "rgba(212,168,83,0.05)" }}
            >
              Xem thêm 200+ người được vinh danh →
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
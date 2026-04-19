import { Trophy, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const footerLinks = {
  "Về chúng tôi": ["Câu chuyện", "Sứ mệnh & Tầm nhìn", "Ban giám khảo", "Đối tác"],
  "Chương trình": ["Hạng mục giải thưởng", "Quy trình xét duyệt", "Lịch sử vinh danh", "Sự kiện"],
  "Tham gia": ["Đề cử tài năng", "Trở thành đối tác", "Tài trợ chương trình", "Tình nguyện viên"],
  "Hỗ trợ": ["FAQ", "Liên hệ", "Chính sách bảo mật", "Điều khoản sử dụng"],
};

const socials = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "#020810", borderTop: "1px solid rgba(212,168,83,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #D4A853, #c49540)" }}>
                <Trophy className="w-5 h-5 text-[#050d1f]" />
              </div>
              <div>
                <p className="text-white text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>HALL OF</p>
                <p style={{ color: "#D4A853", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>Excellence</p>
              </div>
            </div>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
              Tôn vinh những cá nhân xuất sắc, truyền cảm hứng cho thế hệ tương lai và xây dựng cộng đồng những người tạo ra thay đổi tích cực.
            </p>
            {/* Contact */}
            <div className="space-y-2">
              {[
                { Icon: Mail, text: "contact@hallofexcellence.vn" },
                { Icon: Phone, text: "+84 28 3456 7890" },
                { Icon: MapPin, text: "88 Lý Tự Trọng, Q.1, TP.HCM" },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#D4A853" }} />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold mb-4" style={{ color: "#D4A853", letterSpacing: "0.1em" }}>
                {section.toUpperCase()}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-xs transition-colors hover:underline" style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)"}
                      onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2026 Hall of Excellence. Bảo lưu mọi quyền.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#D4A853"; (e.currentTarget as HTMLAnchorElement).style.color = "#D4A853"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "linear-gradient(135deg, #D4A853, #c49540)", color: "#050d1f" }}
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
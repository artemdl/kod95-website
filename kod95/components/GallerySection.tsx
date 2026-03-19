import Image from "next/image";

const photos = [
  { src: "/students-3.webp", alt: "Курсанты с сертификатами" },
  { src: "/students-2.jpg", alt: "Теоретический класс" },
  { src: "/students-4.jpg", alt: "Группа у грузовика" },
  { src: "/students-5.jpg", alt: "Выпускники с документами" },
  { src: "/students-6.webp", alt: "Группа с документами" },
  { src: "/students-7.jpg", alt: "Учебная группа" },
  { src: "/students-8.jpg", alt: "Курсанты в классе" },
  { src: "/students-9.jpg", alt: "Практика в кабине" },
  { src: "/students-10.jpg", alt: "Большая группа на улице" },
  { src: "/students-11.webp", alt: "Учебные грузовики MAN" },
  { src: "/students-12.webp", alt: "Группа у автобуса" },
  { src: "/students-13.webp", alt: "Большая группа перед зданием" },
];

export default function GallerySection() {
  return (
    <section id="gallery" style={{ background: "#0a0a0a" }}>
      <div className="container" style={{ marginBottom: 48 }}>
        <div style={{ textAlign: "center" }}>
          <div className="orange-line fade-up" style={{ margin: "0 auto 16px" }} />
          <h2 className="font-display fade-up" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            НАШИ <span style={{ color: "#e85d04" }}>КУРСАНТЫ</span>
          </h2>
          <p className="fade-up" style={{ color: "#888", marginTop: 12, fontSize: "0.9rem" }}>
            Сотни водителей уже работают в Европе благодаря нашим курсам
          </p>
        </div>
      </div>

      {/* Uniform 4-column grid, all cells equal height */}
      <div className="fade-in" style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 6,
        padding: "0 24px",
        maxWidth: 1200,
        margin: "0 auto",
      }}>
        {photos.map((p, i) => (
          <div key={i} style={{
            position: "relative",
            overflow: "hidden",
            aspectRatio: "4/3",
            background: "#1a1a1a",
          }}>
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
              className="gallery-img"
            />
            <div className="overlay" />
          </div>
        ))}
      </div>

      <style>{`
        .gallery-img:hover { transform: scale(1.06); }
        .overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(232,93,4,0.5), transparent); opacity: 0; transition: opacity 0.3s; }
        div:hover > .overlay { opacity: 1; }
        @media (max-width: 768px) {
          #gallery .fade-in > div { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

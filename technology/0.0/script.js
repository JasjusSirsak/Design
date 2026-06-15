/* ═══════════════════════════════════
   DATA: Template CSS (pp- selectors)
   ═══════════════════════════════════ */
const templates = {
  cyberpunk: `/* ══ Cyberpunk Neon ══ */
.pp-page-background {
  background: #06060e !important;
  background-image:
    radial-gradient(ellipse at 12% 45%, rgba(0,255,255,.07) 0%, transparent 55%),
    radial-gradient(ellipse at 88% 15%, rgba(255,0,128,.05) 0%, transparent 50%) !important;
}

.pp-uc-background > div:first-child {
  background: linear-gradient(135deg, rgba(0,255,255,.12) 0%, rgba(255,0,128,.08) 50%, transparent 100%) !important;
}

.pp-uc-background > div:last-child {
  background: rgba(6,6,18,.88) !important;
  border: 1px solid rgba(0,255,255,.2) !important;
  border-radius: 14px !important;
  box-shadow: 0 0 50px rgba(0,255,255,.07), inset 0 1px 0 rgba(0,255,255,.1) !important;
}

.pp-uc-avatar-container img {
  border: 2px solid rgba(0,255,255,.5) !important;
  box-shadow: 0 0 22px rgba(0,255,255,.25) !important;
  border-radius: 50% !important;
}

.pp-uc-background h2 {
  color: #00ffff !important;
  text-shadow: 0 0 14px rgba(0,255,255,.5) !important;
  font-family: 'Courier New', monospace !important;
  letter-spacing: 2px !important;
}

.pp-uc-background h2 + div,
.pp-uc-background h2 + div + div {
  color: rgba(0,255,255,.45) !important;
}

.pp-uc-about-me p {
  color: rgba(190,210,240,.7) !important;
}

.pp-uc-background button {
  border-color: rgba(0,255,255,.3) !important;
  color: #00ffff !important;
  transition: all .3s !important;
}
.pp-uc-background button:hover {
  background: rgba(0,255,255,.1) !important;
  box-shadow: 0 0 16px rgba(0,255,255,.2) !important;
}

/* Tab section — cek pp- class di cssforjai.ju.mp */
.pp-uc-background ~ div > div:first-child {
  background: rgba(6,6,18,.88) !important;
  border: 1px solid rgba(0,255,255,.15) !important;
  border-radius: 14px !important;
}
.pp-uc-background ~ div button[role="tab"] {
  color: rgba(255,255,255,.35) !important;
  transition: all .3s !important;
}
.pp-uc-background ~ div button[role="tab"]:hover {
  color: #00ffff !important;
}
.pp-uc-background ~ div button[aria-selected="true"] {
  color: #00ffff !important;
  text-shadow: 0 0 10px rgba(0,255,255,.4) !important;
}`,

  gothic: `/* ══ Gothic Elegance ══ */
.pp-page-background {
  background: #0c0808 !important;
  background-image:
    radial-gradient(ellipse at 50% 0%, rgba(90,10,10,.35) 0%, transparent 55%),
    radial-gradient(ellipse at 80% 100%, rgba(50,20,0,.2) 0%, transparent 50%) !important;
}

.pp-uc-background > div:first-child {
  background: linear-gradient(180deg, rgba(60,10,10,.3) 0%, rgba(20,5,5,.9) 60%, rgba(40,15,0,.4) 100%) !important;
}

.pp-uc-background > div:last-child {
  background: rgba(18,8,8,.92) !important;
  border: 1px solid rgba(139,69,19,.35) !important;
  border-radius: 4px !important;
  box-shadow: 0 0 50px rgba(80,0,0,.15), 0 0 100px rgba(139,69,19,.06) !important;
  position: relative !important;
  overflow: visible !important;
}

.pp-uc-background > div:last-child::before {
  content: '\\2756' !important;
  position: absolute !important;
  top: -14px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  font-size: 22px !important;
  color: #8b4513 !important;
  text-shadow: 0 0 12px rgba(139,69,19,.5) !important;
  background: #0c0808 !important;
  padding: 0 10px !important;
}

.pp-uc-avatar-container img {
  border: 3px solid #8b4513 !important;
  box-shadow: 0 0 24px rgba(139,69,19,.35) !important;
  border-radius: 0 !important;
  filter: sepia(.25) contrast(1.1) !important;
}

.pp-uc-background h2 {
  color: #cd853f !important;
  font-family: Georgia, 'Times New Roman', serif !important;
  letter-spacing: 4px !important;
  text-transform: uppercase !important;
  text-shadow: 0 0 8px rgba(139,69,19,.3) !important;
}

.pp-uc-background h2 + div,
.pp-uc-background h2 + div + div {
  color: rgba(139,90,43,.5) !important;
}

.pp-uc-about-me p {
  color: rgba(180,140,100,.6) !important;
  font-family: Georgia, serif !important;
  font-style: italic !important;
}

.pp-uc-background button {
  border-color: rgba(139,69,19,.4) !important;
  color: #cd853f !important;
  text-transform: uppercase !important;
  letter-spacing: 2px !important;
  font-size: 10px !important;
}

.pp-uc-background ~ div > div:first-child {
  background: rgba(18,8,8,.92) !important;
  border: 1px solid rgba(139,69,19,.25) !important;
  border-radius: 4px !important;
}
.pp-uc-background ~ div button[role="tab"] {
  color: rgba(139,90,43,.4) !important;
  font-family: Georgia, serif !important;
  text-transform: uppercase !important;
  letter-spacing: 2px !important;
  font-size: 11px !important;
}
.pp-uc-background ~ div button[aria-selected="true"] {
  color: #cd853f !important;
}`,

  glass: `/* ══ Glassmorphism ══ */
.pp-page-background {
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%) !important;
}

.pp-uc-background > div:first-child {
  background: linear-gradient(160deg, rgba(120,80,255,.12) 0%, rgba(0,200,180,.08) 50%, rgba(255,100,150,.06) 100%) !important;
}

.pp-uc-background > div:last-child {
  background: rgba(255,255,255,.05) !important;
  backdrop-filter: blur(24px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
  border: 1px solid rgba(255,255,255,.1) !important;
  border-radius: 24px !important;
  box-shadow: 0 8px 40px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.08) !important;
}

.pp-uc-avatar-container img {
  border: 2px solid rgba(255,255,255,.2) !important;
  box-shadow: 0 4px 20px rgba(0,0,0,.3) !important;
  border-radius: 20px !important;
}

.pp-uc-background h2 {
  color: #fff !important;
  font-weight: 300 !important;
  letter-spacing: 1px !important;
}

.pp-uc-background h2 + div,
.pp-uc-background h2 + div + div {
  color: rgba(255,255,255,.4) !important;
}

.pp-uc-about-me p {
  color: rgba(255,255,255,.55) !important;
}

.pp-uc-background button {
  border-color: rgba(255,255,255,.15) !important;
  color: rgba(255,255,255,.6) !important;
  border-radius: 20px !important;
  backdrop-filter: blur(10px) !important;
  background: rgba(255,255,255,.05) !important;
}

.pp-uc-background ~ div > div:first-child {
  background: rgba(255,255,255,.05) !important;
  backdrop-filter: blur(24px) !important;
  -webkit-backdrop-filter: blur(24px) !important;
  border: 1px solid rgba(255,255,255,.1) !important;
  border-radius: 24px !important;
}
.pp-uc-background ~ div button[role="tab"] {
  color: rgba(255,255,255,.35) !important;
}
.pp-uc-background ~ div button[role="tab"]:hover {
  color: rgba(255,255,255,.7) !important;
}
.pp-uc-background ~ div button[aria-selected="true"] {
  color: #fff !important;
}`,

  terminal: `/* ══ Terminal Green ══ */
.pp-page-background {
  background: #0a0f0a !important;
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,.015) 2px, rgba(0,255,65,.015) 4px) !important;
}

.pp-uc-background > div:first-child {
  background: radial-gradient(ellipse at 50% 0%, rgba(0,255,65,.06) 0%, transparent 60%) !important;
}

.pp-uc-background > div:last-child {
  background: rgba(5,12,5,.95) !important;
  border: 1px solid rgba(0,255,65,.2) !important;
  border-radius: 0 !important;
  box-shadow: 0 0 30px rgba(0,255,65,.04), inset 0 0 60px rgba(0,255,65,.02) !important;
  overflow: visible !important;
}

.pp-uc-background > div:last-child::before {
  content: '> PROFILE_DATA loaded' !important;
  display: block !important;
  font-family: 'Courier New', monospace !important;
  font-size: 10px !important;
  color: rgba(0,255,65,.3) !important;
  margin-bottom: 12px !important;
  padding-bottom: 10px !important;
  border-bottom: 1px solid rgba(0,255,65,.1) !important;
}

.pp-uc-avatar-container img {
  border: 1px solid rgba(0,255,65,.4) !important;
  box-shadow: 0 0 15px rgba(0,255,65,.15) !important;
  border-radius: 0 !important;
  image-rendering: pixelated !important;
}

.pp-uc-background h2 {
  color: #00ff41 !important;
  font-family: 'Courier New', monospace !important;
  text-shadow: 0 0 8px rgba(0,255,65,.3) !important;
}

.pp-uc-background h2 + div,
.pp-uc-background h2 + div + div {
  color: rgba(0,255,65,.35) !important;
  font-family: 'Courier New', monospace !important;
  font-size: 11px !important;
}

.pp-uc-about-me p {
  color: rgba(0,255,65,.5) !important;
  font-family: 'Courier New', monospace !important;
}

.pp-uc-background button {
  border-color: rgba(0,255,65,.3) !important;
  color: #00ff41 !important;
  font-family: 'Courier New', monospace !important;
  text-transform: uppercase !important;
  font-size: 10px !important;
  letter-spacing: 1px !important;
  border-radius: 0 !important;
}

.pp-uc-background ~ div > div:first-child {
  background: rgba(5,12,5,.95) !important;
  border: 1px solid rgba(0,255,65,.2) !important;
  border-radius: 0 !important;
}
.pp-uc-background ~ div button[role="tab"] {
  color: rgba(0,255,65,.3) !important;
  font-family: 'Courier New', monospace !important;
  font-size: 12px !important;
  text-transform: uppercase !important;
}
.pp-uc-background ~ div button[aria-selected="true"] {
  color: #00ff41 !important;
}`,

  aurora: `/* ══ Aurora Borealis ══ */
.pp-page-background {
  background: #070b14 !important;
}

.pp-uc-background > div:first-child {
  background: linear-gradient(135deg,
    rgba(0,255,136,.08) 0%,
    rgba(0,180,255,.1) 25%,
    rgba(120,0,255,.08) 50%,
    rgba(255,0,150,.06) 75%,
    rgba(0,255,136,.08) 100%) !important;
  background-size: 400% 400% !important;
  animation: auroraShift 12s ease infinite !important;
}

@keyframes auroraShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.pp-uc-background > div:last-child {
  background: rgba(7,11,20,.85) !important;
  border: 1px solid rgba(0,255,136,.15) !important;
  border-radius: 20px !important;
  box-shadow: 0 0 60px rgba(0,180,255,.06), 0 0 120px rgba(120,0,255,.04) !important;
  backdrop-filter: blur(16px) !important;
}

.pp-uc-avatar-container img {
  border: 2px solid rgba(0,255,136,.35) !important;
  box-shadow: 0 0 25px rgba(0,180,255,.2) !important;
  border-radius: 50% !important;
}

.pp-uc-background h2 {
  background: linear-gradient(90deg, #00ff88, #00b4ff, #7800ff) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  font-weight: 700 !important;
  letter-spacing: 1px !important;
}

.pp-uc-background h2 + div,
.pp-uc-background h2 + div + div {
  color: rgba(0,180,255,.4) !important;
}

.pp-uc-about-me p {
  color: rgba(180,200,255,.55) !important;
}

.pp-uc-background button {
  border-color: rgba(0,255,136,.25) !important;
  color: #00ff88 !important;
  border-radius: 20px !important;
  transition: all .3s !important;
}
.pp-uc-background button:hover {
  background: rgba(0,255,136,.08) !important;
  box-shadow: 0 0 20px rgba(0,255,136,.15) !important;
}

.pp-uc-background ~ div > div:first-child {
  background: rgba(7,11,20,.85) !important;
  border: 1px solid rgba(0,255,136,.12) !important;
  border-radius: 20px !important;
  backdrop-filter: blur(16px) !important;
}
.pp-uc-background ~ div button[role="tab"] {
  color: rgba(255,255,255,.3) !important;
  transition: all .3s !important;
}
.pp-uc-background ~ div button[role="tab"]:hover {
  color: rgba(0,255,136,.7) !important;
}
.pp-uc-background ~ div button[aria-selected="true"] {
  color: #00ff88 !important;
}`
};

/* ═══════════════════════════════════
   DATA: Teknik Snippet (pp- selectors)
   ═══════════════════════════════════ */
const techniques = [
  {
    icon: 'fa-solid fa-image',
    color: 'var(--warm)',
    title: 'Background Foto',
    desc: 'Tambahkan foto sebagai latar via .pp-page-background. Overlay gelap agar teks terbaca.',
    snippet: `/* === BACKGROUND FOTO === */
.pp-page-background {
  background: url('https://picsum.photos/seed/darkforest/1920/1080') center/cover no-repeat fixed !important;
}
/* Overlay gelap pada gradient box */
.pp-uc-background > div:first-child {
  background: rgba(0,0,0,.5) !important;
}`
  },
  {
    icon: 'fa-solid fa-droplet',
    color: '#60a5fa',
    title: 'Glassmorphism',
    desc: 'Efek kaca buram pada kartu profil menggunakan backdrop-filter.',
    snippet: `/* === GLASSMORPHISM === */
.pp-uc-background > div:last-child {
  background: rgba(255,255,255,.05) !important;
  backdrop-filter: blur(24px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
  border: 1px solid rgba(255,255,255,.1) !important;
  border-radius: 24px !important;
  box-shadow: 0 8px 40px rgba(0,0,0,.3) !important;
}`
  },
  {
    icon: 'fa-solid fa-bolt',
    color: 'var(--accent)',
    title: 'Neon Glow',
    desc: 'Cahaya neon pada border dan teks via box-shadow dan text-shadow.',
    snippet: `/* === NEON GLOW === */
.pp-uc-background > div:last-child {
  border: 1px solid rgba(0,229,199,.3) !important;
  box-shadow: 0 0 30px rgba(0,229,199,.1), inset 0 0 30px rgba(0,229,199,.03) !important;
}
.pp-uc-avatar-container img {
  border: 2px solid rgba(0,229,199,.5) !important;
  box-shadow: 0 0 20px rgba(0,229,199,.25) !important;
}
.pp-uc-background h2 {
  color: #00e5c7 !important;
  text-shadow: 0 0 12px rgba(0,229,199,.5) !important;
}`
  },
  {
    icon: 'fa-solid fa-shapes',
    color: '#f472b6',
    title: 'Pseudo-Element Dekorasi',
    desc: 'Ornamen via ::before/::after pada kartu, tanpa ubah HTML.',
    snippet: `/* === PSEUDO-ELEMENT === */
.pp-uc-background > div:last-child {
  position: relative !important;
  overflow: visible !important;
}
/* Garis dekoratif atas */
.pp-uc-background > div:last-child::before {
  content: '' !important;
  position: absolute !important;
  top: -1px !important;
  left: 20% !important;
  right: 20% !important;
  height: 2px !important;
  background: linear-gradient(90deg, transparent, #f472b6, transparent) !important;
}
/* Simbol dekoratif */
.pp-uc-background > div:last-child::after {
  content: '\\25C6' !important;
  position: absolute !important;
  top: -10px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  color: #f472b6 !important;
  font-size: 14px !important;
  text-shadow: 0 0 8px rgba(244,114,182,.5) !important;
}`
  },
  {
    icon: 'fa-solid fa-play',
    color: '#a78bfa',
    title: 'Animasi CSS',
    desc: 'Gradient bergerak dengan @keyframes pada background box.',
    snippet: `/* === ANIMASI GRADIENT === */
.pp-uc-background > div:first-child {
  background: linear-gradient(135deg,
    rgba(120,0,255,.1), rgba(0,200,255,.1),
    rgba(255,0,150,.08), rgba(0,255,100,.1)) !important;
  background-size: 300% 300% !important;
  animation: gradMove 10s ease infinite !important;
}
@keyframes gradMove {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`
  },
  {
    icon: 'fa-solid fa-font',
    color: '#34d399',
    title: 'Font Eksternal via @import',
    desc: 'Muat Google Fonts lalu terapkan ke h2 di dalam .pp-uc-background.',
    snippet: `/* === FONT EKSTERNAL === */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.pp-uc-background h2 {
  font-family: 'Orbitron', sans-serif !important;
  letter-spacing: 3px !important;
  font-weight: 700 !important;
}`
  }
];

/* ═══════════════════════════════════
   DATA: Referensi Class pp-
   ═══════════════════════════════════ */
const classRefs = [
  ['.pp-main-container', 'Root wrapper seluruh halaman profil', 'STABIL', 'background, overflow'],
  ['.pp-page-background', 'Latar belakang penuh halaman (fixed)', 'STABIL', 'background, background-image, filter'],
  ['.pp-uc-background', 'Container area kartu profil + bg deco', 'STABIL', 'background, overflow, border-radius'],
  ['.pp-uc-background > div:first-child', 'Kotak gradient dekoratif (bg-box-1)', 'STRUKTUR', 'background, background-size, opacity'],
  ['.pp-uc-background > div:last-child', 'Kartu info utama (nama, avatar, bio)', 'STRUKTUR', 'background, border, border-radius, box-shadow, backdrop-filter'],
  ['.pp-uc-avatar-container img', 'Gambar avatar pengguna', 'STABIL', 'border, border-radius, box-shadow, filter, width, height'],
  ['.pp-uc-background h2', 'Nama pengguna (heading)', 'STABIL', 'color, text-shadow, font-family, letter-spacing'],
  ['.pp-uc-background h2 + div', 'Elemen stat pertama setelah nama', 'STRUKTUR', 'color, font-size'],
  ['.pp-uc-background h2 + div + div', 'Elemen stat kedua setelah nama', 'STRUKTUR', 'color, font-size'],
  ['.pp-uc-background button', 'Tombol di dalam profil (Edit)', 'STABIL', 'border-color, color, background, border-radius'],
  ['.pp-uc-about-me', 'Section About Me / Bio', 'STABIL', 'color, font-style, font-family, padding'],
  ['.pp-uc-about-me p', 'Teks bio', 'STABIL', 'color, font-family, line-height'],
  ['.pp-uc-background ~ div', 'Area di luar card (tab section)', 'STRUKTUR', '—'],
  ['.pp-uc-background ~ div > div:first-child', 'Container tab (Characters, dll)', 'STRUKTUR', 'background, border, border-radius, backdrop-filter'],
  ['.pp-uc-background ~ div button[role="tab"]', 'Setiap tombol tab', 'STRUKTUR', 'color, font-family, text-transform, font-size'],
  ['.pp-uc-background ~ div button[aria-selected="true"]', 'Tab yang sedang aktif', 'STRUKTUR', 'color, text-shadow'],
];

/* ═══════════════════════════════════
   HTML: Mock Profil (pp- structure)
   ═══════════════════════════════════ */
const mockProfileHTML = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#1a1a2e;color:#e0e0e0;min-height:100vh;overflow-x:hidden}
.pp-main-container{position:relative;min-height:100vh;max-width:860px;margin:0 auto;padding:20px}
.pp-page-background{position:fixed;inset:0;background:#1a1a2e;z-index:0}
.profile-page-flex{position:relative;z-index:1}
.pp-uc-background{position:relative;overflow:visible;border-radius:16px;margin-bottom:20px}
.profile-background-box-1{position:absolute;inset:0;background:linear-gradient(140deg,rgb(153,153,163) 0%,rgb(51,51,61) 20%,rgba(51,51,61,.9) 90%,rgb(153,153,163) 100%);z-index:0;border-radius:16px}
.profile-background-box-2,.profile-background-box-3{display:none}
.profile-info-wrapper-box{position:relative;z-index:1;background:rgba(20,20,35,.85);border-radius:12px;padding:24px;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.06);margin:16px;overflow:visible}
.chakra-stack{display:flex;flex-direction:column}
.profile-info-stack{display:flex;flex-direction:column;gap:16px}
.profile-info-hstack{display:flex;align-items:center;gap:16px}
.pp-uc-avatar-container{flex-shrink:0}
.profile-avatar{width:80px;height:80px;border-radius:12px;object-fit:cover;display:block}
.profile-info-stack-inner{display:flex;flex-direction:column;gap:4px}
.profile-title-heading{font-size:20px;font-weight:700;color:#fff;margin:0}
.profile-followers-count{font-size:13px;color:#999}
.profile-member-since-box{font-size:12px;color:#666}
.edit-profile-btn{display:inline-block;margin-top:6px;padding:4px 14px;border-radius:6px;border:1px solid #444;background:transparent;color:#ccc;font-size:12px;cursor:pointer}
.pp-uc-about-me{margin-top:4px}
.pp-uc-about-me p{font-size:14px;color:#bbb;line-height:1.5}
.profile-page-container-flex-box{position:relative;z-index:1}
.profile-tabs-chakra-tabs{background:rgba(20,20,35,.85);border-radius:12px;overflow:hidden;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.06)}
.profile-tabs-wrapper{display:flex;border-bottom:1px solid rgba(255,255,255,.08);padding:0 16px;position:relative}
.profile-tabs-button{padding:12px 20px;background:none;border:none;color:#888;font-size:14px;cursor:pointer;position:relative}
.profile-tabs-button[aria-selected="true"]{color:#fff}
.profile-tabs-indicator{position:absolute;bottom:-1px;left:16px;width:80px;height:2px;background:#00e5c7;border-radius:1px}
.profile-tabs-panels{padding:20px}
.cc-list-empty{color:#666;font-size:14px;text-align:center;padding:30px 0}
</style><style id="user-css"></style></head><body>
<div class="pp-main-container">
  <div class="pp-page-background"></div>
  <div class="profile-page-flex">
    <div class="pp-uc-background">
      <div class="profile-background-box-1"></div>
      <div class="profile-background-box-2"></div>
      <div class="profile-background-box-3"></div>
      <div class="profile-info-wrapper-box">
        <div class="chakra-stack profile-info-stack">
          <div class="profile-info-hstack">
            <div class="pp-uc-avatar-container">
              <img class="profile-avatar" src="https://picsum.photos/seed/janitorai42/200/200" alt="Avatar">
            </div>
            <div class="profile-info-stack-inner">
              <h2 class="profile-title-heading">@Isakjasjus</h2>
              <div class="profile-followers-count"><span>0 </span><span>followers</span></div>
              <div class="profile-member-since-box">Member Since Jan 5, 2025</div>
              <button class="edit-profile-btn">Edit profile</button>
            </div>
          </div>
          <div class="pp-uc-about-me">
            <p>Mental break dance</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="profile-page-container-flex-box">
    <div class="profile-tabs-chakra-tabs">
      <div class="profile-tabs-wrapper" role="tablist">
        <button class="profile-tabs-button" role="tab" aria-selected="true">Characters</button>
        <button class="profile-tabs-button" role="tab" aria-selected="false">Likes</button>
        <button class="profile-tabs-button" role="tab" aria-selected="false">Following</button>
        <div class="profile-tabs-indicator"></div>
      </div>
      <div class="profile-tabs-panels">
        <div class="profile-tab-panel" role="tabpanel">
          <p class="cc-list-empty">No characters</p>
        </div>
      </div>
    </div>
  </div>
</div>
</body></html>`;

/* ═══════════════════════════════════
   DEFAULT CSS EDITOR (pp- selectors)
   ═══════════════════════════════════ */
const defaultCSS = `/* ═══════════════════════════════════════
   Janitor AI Profile CSS
   Gunakan HANYA class pp- yang stabil!
   Jangan gunakan .css-XXXX (Chakra UI).
   ═══════════════════════════════════════ */

/* Latar belakang halaman */
.pp-page-background {
  background: #0d1117 !important;
}

/* Kotak gradient dekoratif */
.pp-uc-background > div:first-child {
  background: linear-gradient(140deg, #1a1a2e 0%, #0d1117 100%) !important;
}

/* Kartu info profil utama */
.pp-uc-background > div:last-child {
  background: rgba(13, 17, 23, 0.9) !important;
  border: 1px solid rgba(0, 229, 199, 0.2) !important;
  border-radius: 16px !important;
}

/* Avatar */
.pp-uc-avatar-container img {
  border: 2px solid #00e5c7 !important;
  box-shadow: 0 0 15px rgba(0, 229, 199, 0.3) !important;
  border-radius: 50% !important;
}

/* Username */
.pp-uc-background h2 {
  color: #00e5c7 !important;
}

/* Tambahkan lebih banyak CSS di bawah ini... */`;

/* ═══════════════════════════════════
   DOM & LOGIC
   ═══════════════════════════════════ */
const editor = document.getElementById('css-editor');
const previewFrame = document.getElementById('preview-frame');
const toastEl = document.getElementById('toast');
const toastMsg = document.getElementById('toast-msg');
let activeTemplate = null;
let toastTimer = null;

function initPreview() {
  previewFrame.srcdoc = mockProfileHTML;
  previewFrame.addEventListener('load', function() { updatePreview(); });
}

function updatePreview() {
  try {
    const doc = previewFrame.contentDocument;
    if (!doc || !doc.head) return;
    let styleEl = doc.getElementById('user-css');
    if (!styleEl) {
      styleEl = doc.createElement('style');
      styleEl.id = 'user-css';
      doc.head.appendChild(styleEl);
    }
    styleEl.textContent = editor.value;
  } catch(e) {}
}

function loadTemplate(name) {
  if (!templates[name]) return;
  editor.value = templates[name];
  updatePreview();
  document.querySelectorAll('.tpl-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`[data-tpl="${name}"]`);
  if (btn) btn.classList.add('active');
  activeTemplate = name;
  showToast('Template "' + name + '" dimuat');
}

function addSnippet(snippet) {
  const current = editor.value.trim();
  const separator = current ? '\n\n' : '';
  editor.value = current + separator + snippet;
  updatePreview();
  editor.scrollTop = editor.scrollHeight;
  document.querySelectorAll('.tpl-btn').forEach(b => b.classList.remove('active'));
  activeTemplate = null;
  showToast('Snippet ditambahkan ke editor');
}

function applyBackground(url) {
  if (!url.trim()) { showToast('Masukkan URL gambar terlebih dahulu'); return; }
  const bgCSS = `/* === BACKGROUND FOTO === */
.pp-page-background {
  background: url('${url.trim()}') center/cover no-repeat fixed !important;
}
/* Overlay agar teks terbaca */
.pp-uc-background > div:first-child {
  background: rgba(0,0,0,.5) !important;
}`;
  const regex = /\/\* === BACKGROUND FOTO === \*\/[\s\S]*?(?=\n\/\* ===|$)/;
  if (regex.test(editor.value)) {
    editor.value = editor.value.replace(regex, bgCSS);
  } else {
    editor.value = bgCSS + '\n\n' + editor.value;
  }
  updatePreview();
  document.querySelectorAll('.tpl-btn').forEach(b => b.classList.remove('active'));
  activeTemplate = null;
  showToast('Background foto diterapkan');
}

function copyCSS() {
  navigator.clipboard.writeText(editor.value).then(() => {
    showToast('CSS berhasil disalin ke clipboard');
  }).catch(() => {
    editor.select();
    document.execCommand('copy');
    showToast('CSS berhasil disalin');
  });
}

function resetEditor() {
  editor.value = defaultCSS;
  updatePreview();
  document.querySelectorAll('.tpl-btn').forEach(b => b.classList.remove('active'));
  activeTemplate = null;
  showToast('Editor direset ke default');
}

function showToast(msg) {
  toastMsg.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2500);
}

/* ═══════════════════════════════════
   RENDER: Teknik Cards
   ═══════════════════════════════════ */
function renderTechniques() {
  const grid = document.getElementById('tech-grid');
  grid.innerHTML = techniques.map((t, i) => `
    <div class="tech-card" data-idx="${i}" tabindex="0" role="button" aria-label="Tambahkan snippet ${t.title}">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <div style="width:32px;height:32px;border-radius:8px;background:${t.color}15;border:1px solid ${t.color}25;display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <i class="${t.icon}" style="font-size:13px;color:${t.color}"></i>
        </div>
        <h3 style="font-size:14px;font-weight:600">${t.title}</h3>
      </div>
      <p style="color:var(--muted);font-size:12.5px;line-height:1.6;margin-bottom:12px">${t.desc}</p>
      <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--accent);font-weight:500">
        <i class="fa-solid fa-plus" style="font-size:9px"></i> Tambahkan ke Editor
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.tech-card').forEach(card => {
    const handler = () => addSnippet(techniques[parseInt(card.dataset.idx)].snippet);
    card.addEventListener('click', handler);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); }});
  });
}

/* ═══════════════════════════════════
   RENDER: Tabel Referensi pp-
   ═══════════════════════════════════ */
function renderRefTable() {
  const tbody = document.getElementById('ref-table');
  tbody.innerHTML = classRefs.map((r, i) => {
    const stabClass = r[2] === 'STABIL' ? 'stab-ok' : 'stab-warn';
    const rowBg = i % 2 ? 'background:rgba(255,255,255,.01)' : '';
    return `<tr style="border-bottom:1px solid var(--border);${rowBg}">
      <td style="padding:10px 16px"><code class="code-inline" style="font-size:11px">${r[0]}</code></td>
      <td style="padding:10px 16px;color:var(--muted);font-size:12.5px">${r[1]}</td>
      <td style="padding:10px 16px"><span class="stab ${stabClass}">${r[2]}</span></td>
      <td style="padding:10px 16px;color:var(--muted);font-size:11.5px;font-family:'JetBrains Mono',monospace">${r[3]}</td>
    </tr>`;
  }).join('');
}

/* ═══════════════════════════════════
   EVENT LISTENERS
   ═══════════════════════════════════ */
let updateDebounce = null;
editor.addEventListener('input', function() {
  clearTimeout(updateDebounce);
  updateDebounce = setTimeout(updatePreview, 80);
  if (activeTemplate) {
    document.querySelectorAll('.tpl-btn').forEach(b => b.classList.remove('active'));
    activeTemplate = null;
  }
});

editor.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = this.selectionStart;
    const end = this.selectionEnd;
    this.value = this.value.substring(0, start) + '  ' + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 2;
    updatePreview();
  }
});

document.querySelectorAll('.tpl-btn').forEach(btn => {
  btn.addEventListener('click', () => loadTemplate(btn.dataset.tpl));
});

document.getElementById('btn-copy').addEventListener('click', copyCSS);
document.getElementById('btn-reset').addEventListener('click', resetEditor);
document.getElementById('btn-apply-bg').addEventListener('click', () => {
  applyBackground(document.getElementById('bg-url').value);
});
document.getElementById('bg-url').addEventListener('keydown', e => {
  if (e.key === 'Enter') applyBackground(e.target.value);
});

/* ═══════════════════════════════════
   INIT
   ═══════════════════════════════════ */
editor.value = defaultCSS;
renderTechniques();
renderRefTable();
initPreview();

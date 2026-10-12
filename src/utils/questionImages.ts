/**
 * Generator Ilustrasi Visual SVG Berwarna untuk Soal Matematika Kelas 6
 * Materi: Pengertian Rasio & Membandingkan Benda
 * Setiap soal memiliki gambar perbandingan benda/ukuran yang presisi sesuai angka pada soal.
 */

export type ObjectIconType =
  | 'broom'
  | 'duster'
  | 'bucket'
  | 'pot_terracotta'
  | 'basketball'
  | 'soccerball'
  | 'paintbrush'
  | 'paintcan'
  | 'guava_red'
  | 'guava_green'
  | 'leaf_green'
  | 'leaf_yellow'
  | 'seedling_mango'
  | 'seedling_guava'
  | 'apple_red'
  | 'orange_fruit'
  | 'flower_yellow'
  | 'flower_white'
  | 'butterfly'
  | 'bee'
  | 'pot_red'
  | 'pot_blue'
  | 'pot_yellow'
  | 'balloon_red'
  | 'balloon_blue'
  | 'bike_student'
  | 'bike_teacher'
  | 'pencil'
  | 'notebook'
  | 'eraser'
  | 'glass_orange'
  | 'glass_water'
  | 'desk'
  | 'chair'
  | 'book_story'
  | 'book_math';

function renderObjectIcon(type: ObjectIconType, x: number, y: number, size: number = 44): string {
  const half = size / 2;
  switch (type) {
    case 'broom':
      return `<g transform="translate(${x - half}, ${y - half})">
        <rect x="20" y="2" width="4" height="24" rx="2" fill="#8B5A2B" />
        <path d="M12 25 L32 25 L36 40 L8 40 Z" fill="#D97706" stroke="#92400E" stroke-width="1.5" />
        <rect x="13" y="24" width="18" height="4" rx="2" fill="#EF4444" />
        <line x1="15" y1="29" x2="13" y2="39" stroke="#92400E" stroke-width="1.2" />
        <line x1="22" y1="29" x2="22" y2="39" stroke="#92400E" stroke-width="1.2" />
        <line x1="29" y1="29" x2="31" y2="39" stroke="#92400E" stroke-width="1.2" />
      </g>`;

    case 'duster':
      return `<g transform="translate(${x - half}, ${y - half})">
        <rect x="20" y="26" width="4" height="15" rx="2" fill="#2563EB" />
        <ellipse cx="22" cy="19" rx="11" ry="8" fill="#10B981" />
        <ellipse cx="22" cy="14" rx="10" ry="7" fill="#F59E0B" />
        <ellipse cx="22" cy="9" rx="8" ry="6" fill="#EC4899" />
      </g>`;

    case 'bucket':
      return `<g transform="translate(${x - half}, ${y - half})">
        <path d="M11 16 A11 10 0 0 1 33 16" fill="none" stroke="#475569" stroke-width="2" />
        <polygon points="9,15 35,15 31,39 13,39" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5" />
        <rect x="8" y="13" width="28" height="4" rx="2" fill="#60A5FA" stroke="#1D4ED8" stroke-width="1" />
        <ellipse cx="22" cy="24" rx="6" ry="2" fill="#93C5FD" opacity="0.6" />
      </g>`;

    case 'pot_terracotta':
      return `<g transform="translate(${x - half}, ${y - half})">
        <path d="M22 14 C16 8, 12 12, 22 17 C32 12, 28 8, 22 14 Z" fill="#16A34A" />
        <polygon points="10,18 34,18 30,39 14,39" fill="#C2410C" stroke="#7C2D12" stroke-width="1.5" />
        <rect x="8" y="15" width="28" height="5" rx="2" fill="#EA580C" stroke="#7C2D12" stroke-width="1.2" />
      </g>`;

    case 'basketball':
      return `<g transform="translate(${x - half}, ${y - half})">
        <circle cx="22" cy="22" r="16" fill="#F97316" stroke="#9A3412" stroke-width="1.8" />
        <path d="M6 22 L38 22 M22 6 L22 38" stroke="#431407" stroke-width="1.5" />
        <path d="M11 11 Q22 22 11 33 M33 11 Q22 22 33 33" fill="none" stroke="#431407" stroke-width="1.5" />
      </g>`;

    case 'soccerball':
      return `<g transform="translate(${x - half}, ${y - half})">
        <circle cx="22" cy="22" r="16" fill="#FFFFFF" stroke="#1E293B" stroke-width="2" />
        <polygon points="22,15 28,19 26,26 18,26 16,19" fill="#1E293B" />
        <line x1="22" y1="15" x2="22" y2="6" stroke="#1E293B" stroke-width="1.5" />
        <line x1="28" y1="19" x2="36" y2="14" stroke="#1E293B" stroke-width="1.5" />
        <line x1="26" y1="26" x2="33" y2="34" stroke="#1E293B" stroke-width="1.5" />
        <line x1="18" y1="26" x2="11" y2="34" stroke="#1E293B" stroke-width="1.5" />
        <line x1="16" y1="19" x2="8" y2="14" stroke="#1E293B" stroke-width="1.5" />
      </g>`;

    case 'paintbrush':
      return `<g transform="translate(${x - half}, ${y - half})">
        <rect x="19" y="22" width="6" height="18" rx="3" fill="#D97706" stroke="#78350F" stroke-width="1.2" />
        <rect x="16" y="17" width="12" height="5" rx="1" fill="#94A3B8" stroke="#475569" stroke-width="1" />
        <path d="M16 17 L14 6 L30 6 L28 17 Z" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.2" />
        <path d="M14 6 L30 6 L29 11 L15 11 Z" fill="#EF4444" />
      </g>`;

    case 'paintcan':
      return `<g transform="translate(${x - half}, ${y - half})">
        <rect x="10" y="12" width="24" height="26" rx="3" fill="#E2E8F0" stroke="#475569" stroke-width="1.6" />
        <path d="M10 14 L34 14 L34 22 Q28 27 25 21 Q22 28 18 20 Q14 25 10 21 Z" fill="#10B981" />
        <ellipse cx="22" cy="12" rx="12" ry="3" fill="#34D399" stroke="#047857" stroke-width="1.2" />
      </g>`;

    case 'guava_red':
      return `<g transform="translate(${x - half}, ${y - half})">
        <path d="M22 10 Q28 5 31 9 Q26 13 22 10" fill="#16A34A" />
        <path d="M18 11 L26 11 L34 31 Q35 38 22 38 Q9 38 10 31 Z" fill="#E11D48" stroke="#9F1239" stroke-width="1.5" />
        <ellipse cx="18" cy="24" rx="2.5" ry="5" fill="#FDA4AF" opacity="0.6" />
      </g>`;

    case 'guava_green':
      return `<g transform="translate(${x - half}, ${y - half})">
        <path d="M22 9 Q29 4 32 9 Q26 13 22 9" fill="#15803D" />
        <circle cx="22" cy="24" r="14" fill="#84CC16" stroke="#3F6212" stroke-width="1.6" />
        <circle cx="17" cy="19" r="3" fill="#D9F99D" opacity="0.7" />
      </g>`;

    case 'leaf_green':
      return `<g transform="translate(${x - half}, ${y - half})">
        <path d="M22 6 C34 12, 36 28, 22 38 C8 28, 10 12, 22 6 Z" fill="#22C55E" stroke="#15803D" stroke-width="1.5" />
        <line x1="22" y1="8" x2="22" y2="40" stroke="#14532D" stroke-width="1.5" />
        <line x1="22" y1="18" x2="29" y2="14" stroke="#14532D" stroke-width="1.2" />
        <line x1="22" y1="24" x2="15" y2="20" stroke="#14532D" stroke-width="1.2" />
        <line x1="22" y1="29" x2="28" y2="25" stroke="#14532D" stroke-width="1.2" />
      </g>`;

    case 'leaf_yellow':
      return `<g transform="translate(${x - half}, ${y - half})">
        <path d="M22 6 C34 12, 36 28, 22 38 C8 28, 10 12, 22 6 Z" fill="#FACC15" stroke="#A16207" stroke-width="1.5" />
        <line x1="22" y1="8" x2="22" y2="40" stroke="#854D0E" stroke-width="1.5" />
        <line x1="22" y1="18" x2="29" y2="14" stroke="#854D0E" stroke-width="1.2" />
        <line x1="22" y1="24" x2="15" y2="20" stroke="#854D0E" stroke-width="1.2" />
      </g>`;

    case 'seedling_mango':
      return `<g transform="translate(${x - half}, ${y - half})">
        <line x1="22" y1="10" x2="22" y2="24" stroke="#15803D" stroke-width="2" />
        <ellipse cx="16" cy="12" rx="6" ry="3.5" fill="#22C55E" transform="rotate(-20 16 12)" />
        <ellipse cx="28" cy="12" rx="6" ry="3.5" fill="#16A34A" transform="rotate(20 28 12)" />
        <polygon points="12,22 32,22 30,39 14,39" fill="#334155" stroke="#0F172A" stroke-width="1.4" />
        <text x="22" y="34" font-size="9" font-weight="bold" fill="#FDE047" text-anchor="middle" font-family="sans-serif">M</text>
      </g>`;

    case 'seedling_guava':
      return `<g transform="translate(${x - half}, ${y - half})">
        <line x1="22" y1="10" x2="22" y2="24" stroke="#15803D" stroke-width="2" />
        <ellipse cx="16" cy="12" rx="6" ry="3.5" fill="#84CC16" transform="rotate(-20 16 12)" />
        <ellipse cx="28" cy="12" rx="6" ry="3.5" fill="#65A30D" transform="rotate(20 28 12)" />
        <polygon points="12,22 32,22 30,39 14,39" fill="#475569" stroke="#0F172A" stroke-width="1.4" />
        <text x="22" y="34" font-size="9" font-weight="bold" fill="#86EFAC" text-anchor="middle" font-family="sans-serif">J</text>
      </g>`;

    case 'apple_red':
      return `<g transform="translate(${x - half}, ${y - half})">
        <path d="M22 11 Q24 5 28 7" fill="none" stroke="#78350F" stroke-width="2" />
        <ellipse cx="26" cy="9" rx="5" ry="2.5" fill="#22C55E" />
        <circle cx="22" cy="24" r="13" fill="#EF4444" stroke="#991B1B" stroke-width="1.5" />
        <circle cx="17" cy="19" r="2.5" fill="#FECACA" opacity="0.7" />
      </g>`;

    case 'orange_fruit':
      return `<g transform="translate(${x - half}, ${y - half})">
        <ellipse cx="25" cy="9" rx="4.5" ry="2.5" fill="#16A34A" />
        <circle cx="22" cy="24" r="13" fill="#F97316" stroke="#C2410C" stroke-width="1.5" />
        <circle cx="17" cy="19" r="2" fill="#FFEDD5" opacity="0.8" />
        <circle cx="26" cy="27" r="1" fill="#C2410C" />
        <circle cx="23" cy="30" r="1" fill="#C2410C" />
      </g>`;

    case 'flower_yellow':
      return `<g transform="translate(${x - half}, ${y - half})">
        <ellipse cx="22" cy="10" rx="4" ry="8" fill="#FACC15" stroke="#CA8A04" stroke-width="1" />
        <ellipse cx="22" cy="34" rx="4" ry="8" fill="#FACC15" stroke="#CA8A04" stroke-width="1" />
        <ellipse cx="10" cy="22" rx="8" ry="4" fill="#FACC15" stroke="#CA8A04" stroke-width="1" />
        <ellipse cx="34" cy="22" rx="8" ry="4" fill="#FACC15" stroke="#CA8A04" stroke-width="1" />
        <circle cx="22" cy="22" r="5" fill="#D97706" />
      </g>`;

    case 'flower_white':
      return `<g transform="translate(${x - half}, ${y - half})">
        <ellipse cx="22" cy="10" rx="4" ry="8" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.2" />
        <ellipse cx="22" cy="34" rx="4" ry="8" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.2" />
        <ellipse cx="10" cy="22" rx="8" ry="4" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.2" />
        <ellipse cx="34" cy="22" rx="8" ry="4" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.2" />
        <circle cx="22" cy="22" r="5" fill="#F59E0B" />
      </g>`;

    case 'butterfly':
      return `<g transform="translate(${x - half}, ${y - half})">
        <ellipse cx="14" cy="16" rx="8" ry="6" fill="#EC4899" stroke="#9D174D" stroke-width="1.2" />
        <ellipse cx="30" cy="16" rx="8" ry="6" fill="#EC4899" stroke="#9D174D" stroke-width="1.2" />
        <ellipse cx="15" cy="27" rx="6" ry="5" fill="#F472B6" stroke="#9D174D" stroke-width="1.2" />
        <ellipse cx="29" cy="27" rx="6" ry="5" fill="#F472B6" stroke="#9D174D" stroke-width="1.2" />
        <rect x="20.5" y="11" width="3" height="20" rx="1.5" fill="#1E293B" />
      </g>`;

    case 'bee':
      return `<g transform="translate(${x - half}, ${y - half})">
        <ellipse cx="18" cy="13" rx="6" ry="4" fill="#E0F2FE" stroke="#38BDF8" stroke-width="1" />
        <ellipse cx="26" cy="13" rx="6" ry="4" fill="#E0F2FE" stroke="#38BDF8" stroke-width="1" />
        <ellipse cx="22" cy="24" rx="12" ry="8" fill="#FACC15" stroke="#854D0E" stroke-width="1.5" />
        <line x1="18" y1="17" x2="18" y2="31" stroke="#1E293B" stroke-width="2.5" />
        <line x1="25" y1="17" x2="25" y2="31" stroke="#1E293B" stroke-width="2.5" />
      </g>`;

    case 'pot_red':
      return `<g transform="translate(${x - half}, ${y - half})">
        <circle cx="22" cy="11" r="5" fill="#FACC15" />
        <polygon points="10,18 34,18 30,39 14,39" fill="#EF4444" stroke="#991B1B" stroke-width="1.5" />
        <rect x="8" y="15" width="28" height="4" rx="1.5" fill="#DC2626" stroke="#991B1B" stroke-width="1.2" />
      </g>`;

    case 'pot_blue':
      return `<g transform="translate(${x - half}, ${y - half})">
        <circle cx="22" cy="11" r="5" fill="#F472B6" />
        <polygon points="10,18 34,18 30,39 14,39" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.5" />
        <rect x="8" y="15" width="28" height="4" rx="1.5" fill="#2563EB" stroke="#1E40AF" stroke-width="1.2" />
      </g>`;

    case 'pot_yellow':
      return `<g transform="translate(${x - half}, ${y - half})">
        <circle cx="22" cy="11" r="5" fill="#FB7185" />
        <polygon points="10,18 34,18 30,39 14,39" fill="#FACC15" stroke="#A16207" stroke-width="1.5" />
        <rect x="8" y="15" width="28" height="4" rx="1.5" fill="#EAB308" stroke="#A16207" stroke-width="1.2" />
      </g>`;

    case 'balloon_red':
      return `<g transform="translate(${x - half}, ${y - half})">
        <path d="M22 30 Q20 35 23 40" fill="none" stroke="#64748B" stroke-width="1.5" />
        <ellipse cx="22" cy="18" rx="11" ry="13" fill="#EF4444" stroke="#991B1B" stroke-width="1.5" />
        <ellipse cx="18" cy="13" rx="2.5" ry="4" fill="#FECACA" opacity="0.7" />
      </g>`;

    case 'balloon_blue':
      return `<g transform="translate(${x - half}, ${y - half})">
        <path d="M22 30 Q20 35 23 40" fill="none" stroke="#64748B" stroke-width="1.5" />
        <ellipse cx="22" cy="18" rx="11" ry="13" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5" />
        <ellipse cx="18" cy="13" rx="2.5" ry="4" fill="#BFDBFE" opacity="0.7" />
      </g>`;

    case 'bike_student':
      return `<g transform="translate(${x - half}, ${y - half})">
        <circle cx="12" cy="29" r="7" fill="none" stroke="#1E293B" stroke-width="2.2" />
        <circle cx="32" cy="29" r="7" fill="none" stroke="#1E293B" stroke-width="2.2" />
        <path d="M12 29 L20 18 L30 18 L22 29 Z" fill="none" stroke="#2563EB" stroke-width="2.2" />
        <line x1="30" y1="18" x2="32" y2="29" stroke="#2563EB" stroke-width="2.2" />
        <line x1="28" y1="14" x2="33" y2="14" stroke="#1E293B" stroke-width="2.2" />
        <line x1="18" y1="15" x2="23" y2="15" stroke="#1E293B" stroke-width="2.5" />
      </g>`;

    case 'bike_teacher':
      return `<g transform="translate(${x - half}, ${y - half})">
        <circle cx="12" cy="29" r="7" fill="none" stroke="#1E293B" stroke-width="2.2" />
        <circle cx="32" cy="29" r="7" fill="none" stroke="#1E293B" stroke-width="2.2" />
        <path d="M12 29 L20 18 L30 18 L22 29 Z" fill="none" stroke="#DC2626" stroke-width="2.4" />
        <line x1="30" y1="18" x2="32" y2="29" stroke="#DC2626" stroke-width="2.4" />
        <rect x="31" y="15" width="6" height="5" rx="1" fill="#F59E0B" stroke="#92400E" stroke-width="1" />
      </g>`;

    case 'pencil':
      return `<g transform="translate(${x - half}, ${y - half})">
        <rect x="18" y="6" width="8" height="6" rx="1.5" fill="#F43F5E" stroke="#9F1239" stroke-width="1.2" />
        <rect x="18" y="12" width="8" height="19" fill="#FACC15" stroke="#A16207" stroke-width="1.2" />
        <polygon points="18,31 26,31 22,40" fill="#FDE68A" stroke="#78350F" stroke-width="1.2" />
        <polygon points="20.5,36 23.5,36 22,40" fill="#1E293B" />
      </g>`;

    case 'notebook':
      return `<g transform="translate(${x - half}, ${y - half})">
        <rect x="10" y="7" width="24" height="30" rx="2.5" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5" />
        <rect x="10" y="7" width="4" height="30" fill="#1E3A8A" />
        <rect x="17" y="13" width="13" height="8" rx="1" fill="#FFFFFF" />
        <line x1="19" y1="16" x2="28" y2="16" stroke="#64748B" stroke-width="1.2" />
        <line x1="19" y1="19" x2="26" y2="19" stroke="#64748B" stroke-width="1.2" />
      </g>`;

    case 'eraser':
      return `<g transform="translate(${x - half}, ${y - half})">
        <rect x="9" y="15" width="16" height="14" rx="2" fill="#FFFFFF" stroke="#64748B" stroke-width="1.5" />
        <rect x="25" y="15" width="10" height="14" rx="2" fill="#3B82F6" stroke="#1D4ED8" stroke-width="1.5" />
      </g>`;

    case 'glass_orange':
      return `<g transform="translate(${x - half}, ${y - half})">
        <polygon points="12,9 32,9 29,38 15,38" fill="#FFFFFF" stroke="#64748B" stroke-width="1.5" />
        <polygon points="13.5,16 30.5,16 28.5,37 15.5,37" fill="#FB923C" />
        <circle cx="31" cy="10" r="4" fill="#FACC15" stroke="#CA8A04" stroke-width="1" />
      </g>`;

    case 'glass_water':
      return `<g transform="translate(${x - half}, ${y - half})">
        <polygon points="12,9 32,9 29,38 15,38" fill="#FFFFFF" stroke="#64748B" stroke-width="1.5" />
        <polygon points="13.5,16 30.5,16 28.5,37 15.5,37" fill="#38BDF8" opacity="0.75" />
      </g>`;

    case 'desk':
      return `<g transform="translate(${x - half}, ${y - half})">
        <rect x="6" y="14" width="32" height="6" rx="2" fill="#D97706" stroke="#78350F" stroke-width="1.5" />
        <rect x="9" y="20" width="26" height="6" fill="#B45309" stroke="#78350F" stroke-width="1.2" />
        <rect x="10" y="26" width="4" height="13" fill="#78350F" />
        <rect x="30" y="26" width="4" height="13" fill="#78350F" />
      </g>`;

    case 'chair':
      return `<g transform="translate(${x - half}, ${y - half})">
        <rect x="13" y="8" width="18" height="12" rx="2" fill="#F59E0B" stroke="#78350F" stroke-width="1.5" />
        <rect x="11" y="22" width="22" height="5" rx="1.5" fill="#D97706" stroke="#78350F" stroke-width="1.5" />
        <rect x="13" y="27" width="3.5" height="12" fill="#78350F" />
        <rect x="27.5" y="27" width="3.5" height="12" fill="#78350F" />
      </g>`;

    case 'book_story':
      return `<g transform="translate(${x - half}, ${y - half})">
        <rect x="10" y="7" width="24" height="30" rx="2.5" fill="#E11D48" stroke="#881337" stroke-width="1.5" />
        <rect x="10" y="7" width="4" height="30" fill="#9F1239" />
        <circle cx="24" cy="19" r="5" fill="#FDE047" />
        <text x="24" y="32" font-size="6.5" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">CERITA</text>
      </g>`;

    case 'book_math':
      return `<g transform="translate(${x - half}, ${y - half})">
        <rect x="10" y="7" width="24" height="30" rx="2.5" fill="#10B981" stroke="#065F46" stroke-width="1.5" />
        <rect x="10" y="7" width="4" height="30" fill="#047857" />
        <text x="24" y="22" font-size="9" font-weight="bold" fill="#FEF08A" text-anchor="middle" font-family="sans-serif">A : B</text>
        <text x="24" y="32" font-size="6.5" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">MAT 6</text>
      </g>`;
  }
}

interface GroupSpec {
  title: string;
  count: number;
  unitLabel: string;
  icon: ObjectIconType;
  bgHeader: string;
  borderColor: string;
  bgCard: string;
}

/**
 * Membuat gambar SVG perbandingan 2 atau 3 kelompok benda secara visual dan presisi
 */
export function createObjectComparisonSvg(config: {
  posBadge: string;
  headerTitle: string;
  subtitle: string;
  groups: GroupSpec[];
  footerNote: string;
}): string {
  const { posBadge, headerTitle, subtitle, groups, footerNote } = config;
  const isThreeGroups = groups.length === 3;

  const groupCardsSvg = groups
    .map((g, idx) => {
      const cardWidth = isThreeGroups ? 236 : 350;
      const startX = isThreeGroups ? 26 + idx * 256 : idx === 0 ? 32 : 418;
      const cardY = 84;
      const cardHeight = 266;

      // Arrange items in neat grid inside the card
      const cols = isThreeGroups
        ? Math.min(3, Math.max(2, g.count))
        : g.count <= 4
        ? 2
        : g.count <= 9
        ? 3
        : g.count <= 12
        ? 4
        : 5;
      const rows = Math.ceil(g.count / cols);
      const gridAreaWidth = cardWidth - 28;
      const gridAreaHeight = 165;
      const cellW = gridAreaWidth / cols;
      const cellH = gridAreaHeight / Math.max(1, rows);
      const iconSize = g.count > 12 ? 34 : 42;

      let itemsSvg = '';
      for (let i = 0; i < g.count; i++) {
        const r = Math.floor(i / cols);
        const c = i % cols;
        const cx = startX + 14 + c * cellW + cellW / 2;
        const cy = cardY + 52 + r * cellH + cellH / 2 - 4;

        itemsSvg += `
          <g>
            <circle cx="${cx}" cy="${cy}" r="${iconSize * 0.56}" fill="#FFFFFF" stroke="${g.borderColor}" stroke-width="1.2" opacity="0.9" />
            ${renderObjectIcon(g.icon, cx, cy, iconSize)}
            <circle cx="${cx + iconSize * 0.38}" cy="${cy - iconSize * 0.38}" r="8.5" fill="${g.bgHeader}" />
            <text x="${cx + iconSize * 0.38}" y="${cy - iconSize * 0.38 + 3.5}" font-size="9.5" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">${i + 1}</text>
          </g>
        `;
      }

      return `
        <g>
          <rect x="${startX}" y="${cardY}" width="${cardWidth}" height="${cardHeight}" rx="18" fill="${g.bgCard}" stroke="${g.borderColor}" stroke-width="3" />
          <rect x="${startX}" y="${cardY}" width="${cardWidth}" height="38" rx="15" fill="${g.bgHeader}" />
          <text x="${startX + cardWidth / 2}" y="${cardY + 24}" font-size="${isThreeGroups ? '12.5' : '14'}" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">${g.title}</text>
          ${itemsSvg}
          <rect x="${startX + 16}" y="${cardY + cardHeight - 40}" width="${cardWidth - 32}" height="28" rx="10" fill="#FFFFFF" stroke="${g.borderColor}" stroke-width="2" />
          <text x="${startX + cardWidth / 2}" y="${cardY + cardHeight - 21}" font-size="13.5" font-weight="bold" fill="#0F172A" text-anchor="middle" font-family="sans-serif">Jumlah = ${g.count} ${g.unitLabel}</text>
        </g>
      `;
    })
    .join('');

  const dividerBadge = !isThreeGroups
    ? `
      <circle cx="400" cy="217" r="21" fill="#F59E0B" stroke="#FFFFFF" stroke-width="3" />
      <text x="400" y="224" font-size="22" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">:</text>
    `
    : '';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 410" width="800" height="410">
    <defs>
      <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFBEB" />
        <stop offset="100%" stop-color="#FEF3C7" />
      </linearGradient>
      <linearGradient id="topBar" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#B45309" />
        <stop offset="50%" stop-color="#D97706" />
        <stop offset="100%" stop-color="#B45309" />
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect x="0" y="0" width="800" height="410" rx="22" fill="url(#bgGrad)" stroke="#F59E0B" stroke-width="4" />

    <!-- Top Header Banner -->
    <rect x="14" y="12" width="772" height="58" rx="14" fill="url(#topBar)" />
    <rect x="26" y="22" width="110" height="22" rx="11" fill="#FDE047" />
    <text x="81" y="37" font-size="11" font-weight="bold" fill="#78350F" text-anchor="middle" font-family="sans-serif">${posBadge}</text>
    <text x="415" y="36" font-size="17" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">${headerTitle}</text>
    <text x="415" y="56" font-size="12" font-weight="bold" fill="#FEF08A" text-anchor="middle" font-family="sans-serif">${subtitle}</text>

    <!-- Comparison Cards -->
    ${groupCardsSvg}
    ${dividerBadge}

    <!-- Footer Callout -->
    <rect x="26" y="360" width="748" height="36" rx="12" fill="#78350F" />
    <text x="400" y="383" font-size="13" font-weight="bold" fill="#FEF08A" text-anchor="middle" font-family="sans-serif">${footerNote}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Membuat gambar SVG khusus untuk soal perbandingan ukuran & satuan (Pos 4: Panjang Pita, Berat Pupuk, Volume Botol)
 */
export function createMeasurementComparisonSvg(
  type: 'ribbon_length' | 'compost_weight' | 'bottle_volume'
): string {
  if (type === 'ribbon_length') {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 410" width="800" height="410">
      <rect x="0" y="0" width="800" height="410" rx="22" fill="#FFFBEB" stroke="#F59E0B" stroke-width="4" />
      <rect x="14" y="12" width="772" height="58" rx="14" fill="#B45309" />
      <rect x="26" y="22" width="110" height="22" rx="11" fill="#FDE047" />
      <text x="81" y="37" font-size="11" font-weight="bold" fill="#78350F" text-anchor="middle" font-family="sans-serif">POS 4 • UKURAN</text>
      <text x="415" y="36" font-size="17" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">MEMBANDINGKAN PANJANG DUA Pita PEMBATAS PARKIR</text>
      <text x="415" y="56" font-size="12" font-weight="bold" fill="#FEF08A" text-anchor="middle" font-family="sans-serif">Samakan satuan panjang terlebih dahulu (1 meter = 100 cm)</text>

      <!-- Main Comparison Box -->
      <rect x="30" y="84" width="740" height="264" rx="18" fill="#FFFFFF" stroke="#F59E0B" stroke-width="3" />

      <!-- Pita Merah (60 cm) -->
      <text x="55" y="125" font-size="15" font-weight="bold" fill="#991B1B" font-family="sans-serif">1. Pita Merah = 60 cm</text>
      <rect x="55" y="136" width="280" height="36" rx="8" fill="#EF4444" stroke="#991B1B" stroke-width="2.5" />
      <text x="195" y="160" font-size="15" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">Panjang = 60 cm</text>

      <!-- Pita Biru (1,2 meter = 120 cm) -->
      <text x="55" y="208" font-size="15" font-weight="bold" fill="#1E40AF" font-family="sans-serif">2. Pita Biru = 1,2 meter (1,2 m × 100 = 120 cm)</text>
      <rect x="55" y="218" width="560" height="36" rx="8" fill="#3B82F6" stroke="#1E3A8A" stroke-width="2.5" />
      <line x1="335" y1="218" x2="335" y2="254" stroke="#FEF08A" stroke-width="3" stroke-dasharray="5,4" />
      <text x="335" y="242" font-size="15" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">Panjang = 1,2 meter = 120 cm</text>

      <!-- Penggaris Skala di Bawah -->
      <rect x="55" y="278" width="600" height="44" rx="6" fill="#FEF08A" stroke="#CA8A04" stroke-width="2" />
      <line x1="55" y1="278" x2="55" y2="296" stroke="#78350F" stroke-width="2.5" />
      <text x="65" y="312" font-size="12" font-weight="bold" fill="#78350F" font-family="sans-serif">0 cm</text>
      <line x1="335" y1="278" x2="335" y2="296" stroke="#78350F" stroke-width="2.5" />
      <text x="335" y="312" font-size="12" font-weight="bold" fill="#991B1B" text-anchor="middle" font-family="sans-serif">60 cm</text>
      <line x1="615" y1="278" x2="615" y2="296" stroke="#78350F" stroke-width="2.5" />
      <text x="605" y="312" font-size="12" font-weight="bold" fill="#1E40AF" text-anchor="end" font-family="sans-serif">120 cm (1,2 m)</text>

      <!-- Footer -->
      <rect x="26" y="360" width="748" height="36" rx="12" fill="#78350F" />
      <text x="400" y="383" font-size="13" font-weight="bold" fill="#FEF08A" text-anchor="middle" font-family="sans-serif">🎯 Bandingkan setelah satuannya sama: Pita Merah (60 cm) : Pita Biru (120 cm)</text>
    </svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  if (type === 'compost_weight') {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 410" width="800" height="410">
      <rect x="0" y="0" width="800" height="410" rx="22" fill="#FFFBEB" stroke="#F59E0B" stroke-width="4" />
      <rect x="14" y="12" width="772" height="58" rx="14" fill="#B45309" />
      <rect x="26" y="22" width="110" height="22" rx="11" fill="#FDE047" />
      <text x="81" y="37" font-size="11" font-weight="bold" fill="#78350F" text-anchor="middle" font-family="sans-serif">POS 4 • BERAT</text>
      <text x="415" y="36" font-size="17" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">MEMBANDINGKAN BERAT DUA KANTONG PUPUK KOMPOS</text>
      <text x="415" y="56" font-size="12" font-weight="bold" fill="#FEF08A" text-anchor="middle" font-family="sans-serif">Ingat konversi satuan berat: 1 kg = 1.000 gram</text>

      <!-- Card Kiri: Kantong A (500 gram) -->
      <rect x="32" y="84" width="350" height="264" rx="18" fill="#ECFDF5" stroke="#10B981" stroke-width="3" />
      <rect x="32" y="84" width="350" height="38" rx="15" fill="#059669" />
      <text x="207" y="108" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">KANTONG PUPUK A (KECIL)</text>
      <rect x="157" y="148" width="100" height="115" rx="16" fill="#D97706" stroke="#78350F" stroke-width="3" />
      <rect x="172" y="136" width="70" height="14" rx="5" fill="#B45309" stroke="#78350F" stroke-width="2" />
      <text x="207" y="196" font-size="15" font-weight="bold" fill="#FEF08A" text-anchor="middle" font-family="sans-serif">KOMPOS A</text>
      <text x="207" y="222" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">500 gram</text>
      <rect x="52" y="306" width="310" height="30" rx="10" fill="#FFFFFF" stroke="#10B981" stroke-width="2" />
      <text x="207" y="326" font-size="13.5" font-weight="bold" fill="#065F46" text-anchor="middle" font-family="sans-serif">Berat Kantong A = 500 gram</text>

      <!-- Divider -->
      <circle cx="400" cy="217" r="21" fill="#F59E0B" stroke="#FFFFFF" stroke-width="3" />
      <text x="400" y="224" font-size="22" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">:</text>

      <!-- Card Kanan: Kantong B (2 kg = 2.000 gram) -->
      <rect x="418" y="84" width="350" height="264" rx="18" fill="#EFF6FF" stroke="#3B82F6" stroke-width="3" />
      <rect x="418" y="84" width="350" height="38" rx="15" fill="#2563EB" />
      <text x="593" y="108" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">KANTONG PUPUK B (BESAR)</text>
      <rect x="518" y="132" width="150" height="145" rx="22" fill="#92400E" stroke="#451A03" stroke-width="3" />
      <rect x="543" y="118" width="100" height="16" rx="6" fill="#78350F" stroke="#451A03" stroke-width="2" />
      <text x="593" y="185" font-size="16" font-weight="bold" fill="#FEF08A" text-anchor="middle" font-family="sans-serif">KOMPOS B</text>
      <text x="593" y="215" font-size="22" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">2 kg</text>
      <text x="593" y="242" font-size="14" font-weight="bold" fill="#FDE047" text-anchor="middle" font-family="sans-serif">(= 2.000 gram)</text>
      <rect x="438" y="306" width="310" height="30" rx="10" fill="#FFFFFF" stroke="#3B82F6" stroke-width="2" />
      <text x="593" y="326" font-size="13.5" font-weight="bold" fill="#1E3A8A" text-anchor="middle" font-family="sans-serif">Berat Kantong B = 2 kg = 2.000 gram</text>

      <!-- Footer -->
      <rect x="26" y="360" width="748" height="36" rx="12" fill="#78350F" />
      <text x="400" y="383" font-size="13" font-weight="bold" fill="#FEF08A" text-anchor="middle" font-family="sans-serif">🎯 Samakan satuan ke gram: 500 gram : 2.000 gram, lalu sederhanakan!</text>
    </svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  // bottle_volume
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 410" width="800" height="410">
    <rect x="0" y="0" width="800" height="410" rx="22" fill="#FFFBEB" stroke="#F59E0B" stroke-width="4" />
    <rect x="14" y="12" width="772" height="58" rx="14" fill="#B45309" />
    <rect x="26" y="22" width="110" height="22" rx="11" fill="#FDE047" />
    <text x="81" y="37" font-size="11" font-weight="bold" fill="#78350F" text-anchor="middle" font-family="sans-serif">POS 4 • VOLUME</text>
    <text x="415" y="36" font-size="17" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">MEMBANDINGKAN VOLUME DUA BOTOL MINUM</text>
    <text x="415" y="56" font-size="12" font-weight="bold" fill="#FEF08A" text-anchor="middle" font-family="sans-serif">Perhatikan urutan botol yang ditanyakan pada soal (Botol Besar terhadap Botol Kecil)</text>

    <!-- Card Kiri: Botol Kecil 300 ml -->
    <rect x="32" y="84" width="350" height="264" rx="18" fill="#F0F9FF" stroke="#0284C7" stroke-width="3" />
    <rect x="32" y="84" width="350" height="38" rx="15" fill="#0284C7" />
    <text x="207" y="108" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">BOTOL MINUM KECIL</text>
    <rect x="187" y="155" width="40" height="14" rx="4" fill="#0369A1" />
    <rect x="167" y="169" width="80" height="115" rx="14" fill="#FFFFFF" stroke="#0284C7" stroke-width="3" />
    <rect x="170" y="225" width="74" height="56" rx="10" fill="#38BDF8" />
    <text x="207" y="258" font-size="16" font-weight="bold" fill="#0C4A6E" text-anchor="middle" font-family="sans-serif">300 ml</text>
    <rect x="52" y="306" width="310" height="30" rx="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="2" />
    <text x="207" y="326" font-size="13.5" font-weight="bold" fill="#0C4A6E" text-anchor="middle" font-family="sans-serif">Volume Botol Kecil = 300 ml</text>

    <!-- Divider -->
    <circle cx="400" cy="217" r="21" fill="#F59E0B" stroke="#FFFFFF" stroke-width="3" />
    <text x="400" y="224" font-size="22" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">:</text>

    <!-- Card Kanan: Botol Besar 900 ml -->
    <rect x="418" y="84" width="350" height="264" rx="18" fill="#ECFDF5" stroke="#059669" stroke-width="3" />
    <rect x="418" y="84" width="350" height="38" rx="15" fill="#059669" />
    <text x="593" y="108" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">BOTOL MINUM BESAR</text>
    <rect x="568" y="128" width="50" height="14" rx="4" fill="#047857" />
    <rect x="538" y="142" width="110" height="146" rx="18" fill="#FFFFFF" stroke="#059669" stroke-width="3" />
    <rect x="541" y="158" width="104" height="127" rx="14" fill="#34D399" />
    <text x="593" y="228" font-size="20" font-weight="bold" fill="#064E3B" text-anchor="middle" font-family="sans-serif">900 ml</text>
    <rect x="438" y="306" width="310" height="30" rx="10" fill="#FFFFFF" stroke="#059669" stroke-width="2" />
    <text x="593" y="326" font-size="13.5" font-weight="bold" fill="#064E3B" text-anchor="middle" font-family="sans-serif">Volume Botol Besar = 900 ml</text>

    <!-- Footer -->
    <rect x="26" y="360" width="748" height="36" rx="12" fill="#78350F" />
    <text x="400" y="383" font-size="13" font-weight="bold" fill="#FEF08A" text-anchor="middle" font-family="sans-serif">🎯 Perhatikan urutan yang ditanya: Volume BOTOL BESAR (900 ml) : BOTOL KECIL (300 ml)</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Kumpulan Gambar Soal untuk Seluruh 20 Soal Matematika Kelas 6 (Pos 1 s/d Pos 5)
 */
export const QUESTION_IMAGES: Record<string, { imageUrl: string; imageCaption: string }> = {
  // --- POS 1 ---
  q_pos_1_1: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 1 • SOAL 1',
      headerTitle: 'PERBANDINGAN ALAT KEBERSIHAN DI GUDANG SEKOLAH',
      subtitle: 'Hitunglah banyak sapu ijuk dan kemoceng pada gambar di bawah ini!',
      groups: [
        {
          title: 'KELOMPOK A: SAPU IJUK',
          count: 4,
          unitLabel: 'Buah Sapu',
          icon: 'broom',
          bgHeader: '#D97706',
          borderColor: '#F59E0B',
          bgCard: '#FFFBEB',
        },
        {
          title: 'KELOMPOK B: KEMOCENG',
          count: 7,
          unitLabel: 'Buah Kemoceng',
          icon: 'duster',
          bgHeader: '#2563EB',
          borderColor: '#60A5FA',
          bgCard: '#EFF6FF',
        },
      ],
      footerNote: '📌 Ditanyakan: Rasio banyak SAPU IJUK (4) terhadap banyak KEMOCENG (7)',
    }),
    imageCaption: 'Ilustrasi Soal 1 Pos 1: Terdapat 4 buah sapu ijuk di kotak kiri dan 7 buah kemoceng di kotak kanan.',
  },

  q_pos_1_2: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 1 • SOAL 2',
      headerTitle: 'MEMAHAMI PENGERTIAN RASIO PERALATAN BERKEBUN',
      subtitle: 'Perbandingan banyak ember biru terhadap pot tanaman adalah 3 : 5',
      groups: [
        {
          title: 'EMBER AIR BIRU',
          count: 3,
          unitLabel: 'Buah Ember',
          icon: 'bucket',
          bgHeader: '#0284C7',
          borderColor: '#38BDF8',
          bgCard: '#F0F9FF',
        },
        {
          title: 'POT TANAMAN TERAKOTA',
          count: 5,
          unitLabel: 'Buah Pot',
          icon: 'pot_terracotta',
          bgHeader: '#C2410C',
          borderColor: '#FB923C',
          bgCard: '#FFF7ED',
        },
      ],
      footerNote: '📌 Rasio Ember Biru : Pot Tanaman = 3 : 5 (Urutan tidak boleh terbalik menjadi 5 : 3)',
    }),
    imageCaption: 'Ilustrasi Soal 2 Pos 1: Terdapat 3 buah ember biru dan 5 buah pot tanaman terakota (Rasio 3 : 5).',
  },

  q_pos_1_3: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 1 • SOAL 3',
      headerTitle: 'TIGA CARA MENYATAKAN RASIO BOLA OLAHRAGA',
      subtitle: 'Bandingkan banyak bola basket terhadap banyak bola sepak di gudang!',
      groups: [
        {
          title: 'BOLA BASKET',
          count: 5,
          unitLabel: 'Bola Basket',
          icon: 'basketball',
          bgHeader: '#EA580C',
          borderColor: '#FB923C',
          bgCard: '#FFF7ED',
        },
        {
          title: 'BOLA SEPAK',
          count: 8,
          unitLabel: 'Bola Sepak',
          icon: 'soccerball',
          bgHeader: '#1E293B',
          borderColor: '#64748B',
          bgCard: '#F8FAFC',
        },
      ],
      footerNote: '📌 Banyak Bola Basket = 5 buah | Banyak Bola Sepak = 8 buah',
    }),
    imageCaption: 'Ilustrasi Soal 3 Pos 1: Terdapat 5 buah bola basket dan 8 buah bola sepak di rak olahraga.',
  },

  q_pos_1_4: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 1 • SOAL 4',
      headerTitle: 'PERHATIKAN URUTAN BENDA YANG DITANYAKAN!',
      subtitle: 'Amati jumlah kuas cat di kiri dan jumlah kaleng cat di kanan',
      groups: [
        {
          title: 'GAMBAR KIRI: KUAS CAT',
          count: 6,
          unitLabel: 'Buah Kuas',
          icon: 'paintbrush',
          bgHeader: '#B45309',
          borderColor: '#F59E0B',
          bgCard: '#FFFBEB',
        },
        {
          title: 'GAMBAR KANAN: KALENG CAT',
          count: 5,
          unitLabel: 'Kaleng Cat',
          icon: 'paintcan',
          bgHeader: '#059669',
          borderColor: '#34D399',
          bgCard: '#ECFDF5',
        },
      ],
      footerNote: '⚠️ Hati-hati urutan soal: Berapakah rasio banyak KALENG CAT terhadap banyak KUAS CAT?',
    }),
    imageCaption: 'Ilustrasi Soal 4 Pos 1: Terdapat 6 buah kuas cat dan 5 buah kaleng cat.',
  },

  // --- POS 2 ---
  q_pos_2_1: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 2 • SOAL 1',
      headerTitle: 'MENYEDERHANAKAN RASIO BUAH JAMBU',
      subtitle: '6 Jambu Air Merah dan 9 Jambu Biji Hijau (Masing-masing dapat dibagi 3)',
      groups: [
        {
          title: 'JAMBU AIR MERAH',
          count: 6,
          unitLabel: 'Buah Jambu Merah',
          icon: 'guava_red',
          bgHeader: '#E11D48',
          borderColor: '#FB7185',
          bgCard: '#FFF1F2',
        },
        {
          title: 'JAMBU BIJI HIJAU',
          count: 9,
          unitLabel: 'Buah Jambu Hijau',
          icon: 'guava_green',
          bgHeader: '#4D7C0F',
          borderColor: '#84CC16',
          bgCard: '#F7FEE7',
        },
      ],
      footerNote: '📌 Sederhanakan rasio 6 : 9 dengan membagi kedua bilangan menggunakan FPB = 3',
    }),
    imageCaption: 'Ilustrasi Soal 1 Pos 2: Terdapat 6 buah jambu air merah dan 9 buah jambu biji hijau.',
  },

  q_pos_2_2: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 2 • SOAL 2',
      headerTitle: 'MEMBANDINGKAN DAUN SEGAR DAN DAUN GUGUR',
      subtitle: 'Hitung dan sederhanakan perbandingan 8 daun hijau terhadap 12 daun kuning',
      groups: [
        {
          title: 'DAUN JAMBU HIJAU SEGAR',
          count: 8,
          unitLabel: 'Helai Daun Hijau',
          icon: 'leaf_green',
          bgHeader: '#15803D',
          borderColor: '#4ADE80',
          bgCard: '#F0FDF4',
        },
        {
          title: 'DAUN JAMBU KUNING GUGUR',
          count: 12,
          unitLabel: 'Helai Daun Kuning',
          icon: 'leaf_yellow',
          bgHeader: '#CA8A04',
          borderColor: '#FACC15',
          bgCard: '#FEFCE8',
        },
      ],
      footerNote: '📌 Rasio awal = 8 : 12 • Bagilah kedua bilangan dengan FPB dari 8 dan 12 (yaitu 4)!',
    }),
    imageCaption: 'Ilustrasi Soal 2 Pos 2: Terdapat 8 helai daun hijau segar dan 12 helai daun kuning gugur.',
  },

  q_pos_2_3: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 2 • SOAL 3',
      headerTitle: 'PERBANDINGAN POLIBAG BIBIT TANAMAN SEKOLAH',
      subtitle: 'Amati 10 bibit mangga (M) dan 15 bibit jambu (J) di bawah pohon rindang',
      groups: [
        {
          title: 'BIBIT POHON MANGGA (M)',
          count: 10,
          unitLabel: 'Polibag Mangga',
          icon: 'seedling_mango',
          bgHeader: '#047857',
          borderColor: '#34D399',
          bgCard: '#ECFDF5',
        },
        {
          title: 'BIBIT POHON JAMBU (J)',
          count: 15,
          unitLabel: 'Polibag Jambu',
          icon: 'seedling_guava',
          bgHeader: '#4D7C0F',
          borderColor: '#A3E635',
          bgCard: '#F7FEE7',
        },
      ],
      footerNote: '⚠️ Perhatikan urutan soal: Rasio paling sederhana BIBIT JAMBU (15) terhadap BIBIT MANGGA (10)',
    }),
    imageCaption: 'Ilustrasi Soal 3 Pos 2: Terdapat 10 polibag bibit mangga dan 15 polibag bibit jambu.',
  },

  q_pos_2_4: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 2 • SOAL 4',
      headerTitle: 'MAKNA RASIO PALING SEDERHANA (4 APEL : 12 JERUK)',
      subtitle: 'Setiap 1 buah apel merah berpasangan dengan 3 buah jeruk manis',
      groups: [
        {
          title: 'BUAH APEL MERAH',
          count: 4,
          unitLabel: 'Buah Apel',
          icon: 'apple_red',
          bgHeader: '#DC2626',
          borderColor: '#F87171',
          bgCard: '#FEF2F2',
        },
        {
          title: 'BUAH JERUK MANIS',
          count: 12,
          unitLabel: 'Buah Jeruk',
          icon: 'orange_fruit',
          bgHeader: '#EA580C',
          borderColor: '#FB923C',
          bgCard: '#FFF7ED',
        },
      ],
      footerNote: '📌 4 Apel : 12 Jeruk disederhanakan (dibagi 4) menjadi 1 : 3',
    }),
    imageCaption: 'Ilustrasi Soal 4 Pos 2: Terdapat 4 buah apel merah dan 12 buah jeruk manis (rasio paling sederhana 1 : 3).',
  },

  // --- POS 3 ---
  q_pos_3_1: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 3 • SOAL 1',
      headerTitle: 'RASIO BAGIAN TERHADAP KESELURUHAN BUNGA CEMPAKA',
      subtitle: 'Total seluruh bunga di nampan = 5 Bunga Kuning + 7 Bunga Putih = 12 Kuntum Bunga',
      groups: [
        {
          title: 'CEMPAKA KUNING',
          count: 5,
          unitLabel: 'Kuntum Kuning',
          icon: 'flower_yellow',
          bgHeader: '#CA8A04',
          borderColor: '#FACC15',
          bgCard: '#FEFCE8',
        },
        {
          title: 'CEMPAKA PUTIH',
          count: 7,
          unitLabel: 'Kuntum Putih',
          icon: 'flower_white',
          bgHeader: '#475569',
          borderColor: '#94A3B8',
          bgCard: '#F8FAFC',
        },
      ],
      footerNote: '📌 Ditanyakan: Rasio Bunga Cempaka Kuning (5) terhadap SELURUH BUNGA (5 + 7 = 12)',
    }),
    imageCaption: 'Ilustrasi Soal 1 Pos 3: Terdapat 5 kuntum bunga cempaka kuning dan 7 kuntum bunga cempaka putih (Total = 12 bunga).',
  },

  q_pos_3_2: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 3 • SOAL 2',
      headerTitle: 'PERBANDINGAN SERANGGA DI TAMAN CEMPAKA',
      subtitle: '6 Ekor Kupu-Kupu dan 4 Ekor Lebah Madu (Total Seluruh Serangga = 10 Ekor)',
      groups: [
        {
          title: 'KUPU-KUPU TAMAN',
          count: 6,
          unitLabel: 'Ekor Kupu-Kupu',
          icon: 'butterfly',
          bgHeader: '#DB2777',
          borderColor: '#F472B6',
          bgCard: '#FDF2F8',
        },
        {
          title: 'LEBAH MADU',
          count: 4,
          unitLabel: 'Ekor Lebah',
          icon: 'bee',
          bgHeader: '#D97706',
          borderColor: '#FBBF24',
          bgCard: '#FFFBEB',
        },
      ],
      footerNote: '📌 Ditanyakan: Rasio paling sederhana LEBAH MADU (4) terhadap SELURUH SERANGGA (10)',
    }),
    imageCaption: 'Ilustrasi Soal 2 Pos 3: Terdapat 6 ekor kupu-kupu dan 4 ekor lebah madu (Total = 10 ekor serangga).',
  },

  q_pos_3_3: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 3 • SOAL 3',
      headerTitle: 'MEMBANDINGKAN 3 KELOMPOK WARNA POT BUNGA',
      subtitle: '3 Pot Merah + 5 Pot Biru + 4 Pot Kuning (Total Seluruh Pot = 12 Buah)',
      groups: [
        {
          title: 'POT MERAH',
          count: 3,
          unitLabel: 'Pot Merah',
          icon: 'pot_red',
          bgHeader: '#DC2626',
          borderColor: '#F87171',
          bgCard: '#FEF2F2',
        },
        {
          title: 'POT BIRU',
          count: 5,
          unitLabel: 'Pot Biru',
          icon: 'pot_blue',
          bgHeader: '#2563EB',
          borderColor: '#60A5FA',
          bgCard: '#EFF6FF',
        },
        {
          title: 'POT KUNING',
          count: 4,
          unitLabel: 'Pot Kuning',
          icon: 'pot_yellow',
          bgHeader: '#CA8A04',
          borderColor: '#FACC15',
          bgCard: '#FEFCE8',
        },
      ],
      footerNote: '📌 Ditanyakan: Rasio paling sederhana POT MERAH (3) terhadap SELURUH POT (3 + 5 + 4 = 12)',
    }),
    imageCaption: 'Ilustrasi Soal 3 Pos 3: Terdapat 3 pot bunga merah, 5 pot bunga biru, dan 4 pot bunga kuning (Total = 12 pot).',
  },

  q_pos_3_4: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 3 • SOAL 4',
      headerTitle: 'RASIO BAGIAN-KE-BAGIAN & BAGIAN-KE-KESELURUHAN',
      subtitle: 'Terdapat 6 Balon Merah dan 8 Balon Biru (Total Seluruh Balon = 14 Balon)',
      groups: [
        {
          title: 'BALON HIAS MERAH',
          count: 6,
          unitLabel: 'Balon Merah',
          icon: 'balloon_red',
          bgHeader: '#E11D48',
          borderColor: '#FB7185',
          bgCard: '#FFF1F2',
        },
        {
          title: 'BALON HIAS BIRU',
          count: 8,
          unitLabel: 'Balon Biru',
          icon: 'balloon_blue',
          bgHeader: '#2563EB',
          borderColor: '#60A5FA',
          bgCard: '#EFF6FF',
        },
      ],
      footerNote: '📌 Merah : Biru = 6 : 8 (3 : 4) • Biru : Seluruh Balon = 8 : 14 (4 : 7)',
    }),
    imageCaption: 'Ilustrasi Soal 4 Pos 3: Terdapat 6 balon merah dan 8 balon biru (Total keseluruhan = 14 balon).',
  },

  // --- POS 4 ---
  q_pos_4_1: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 4 • SOAL 1',
      headerTitle: 'PERBANDINGAN BANYAK SEPEDA DI LORONG PARKIR',
      subtitle: '12 Unit Sepeda Siswa dan 4 Unit Sepeda Guru berbaris rapi',
      groups: [
        {
          title: 'SEPEDA SISWA (BIRU)',
          count: 12,
          unitLabel: 'Sepeda Siswa',
          icon: 'bike_student',
          bgHeader: '#2563EB',
          borderColor: '#60A5FA',
          bgCard: '#EFF6FF',
        },
        {
          title: 'SEPEDA GURU (MERAH)',
          count: 4,
          unitLabel: 'Sepeda Guru',
          icon: 'bike_teacher',
          bgHeader: '#DC2626',
          borderColor: '#F87171',
          bgCard: '#FEF2F2',
        },
      ],
      footerNote: '📌 Ditanyakan: Rasio paling sederhana SEPEDA SISWA (12) terhadap SEPEDA GURU (4)',
    }),
    imageCaption: 'Ilustrasi Soal 1 Pos 4: Terdapat 12 unit sepeda siswa dan 4 unit sepeda guru di lorong parkir.',
  },

  q_pos_4_2: {
    imageUrl: createMeasurementComparisonSvg('ribbon_length'),
    imageCaption: 'Ilustrasi Soal 2 Pos 4: Perbandingan panjang Pita Merah (60 cm) dan Pita Biru (1,2 meter = 120 cm).',
  },

  q_pos_4_3: {
    imageUrl: createMeasurementComparisonSvg('compost_weight'),
    imageCaption: 'Ilustrasi Soal 3 Pos 4: Perbandingan berat Kantong Pupuk Kompos A (500 gram) dan Kantong Pupuk Kompos B (2 kg = 2.000 gram).',
  },

  q_pos_4_4: {
    imageUrl: createMeasurementComparisonSvg('bottle_volume'),
    imageCaption: 'Ilustrasi Soal 4 Pos 4: Perbandingan volume Botol Minum Kecil (300 ml) dan Botol Minum Besar (900 ml).',
  },

  // --- POS 5 ---
  q_pos_5_1: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 5 • SOAL 1',
      headerTitle: 'MEMBANDINGKAN ALAT TULIS DI MEJA BELAJAR KELAS 6',
      subtitle: '6 Batang Pensil, 9 Buku Tulis, dan 3 Penghapus',
      groups: [
        {
          title: 'PENSIL',
          count: 6,
          unitLabel: 'Pensil',
          icon: 'pencil',
          bgHeader: '#D97706',
          borderColor: '#FBBF24',
          bgCard: '#FFFBEB',
        },
        {
          title: 'BUKU TULIS',
          count: 9,
          unitLabel: 'Buku Tulis',
          icon: 'notebook',
          bgHeader: '#2563EB',
          borderColor: '#60A5FA',
          bgCard: '#EFF6FF',
        },
        {
          title: 'PENGHAPUS',
          count: 3,
          unitLabel: 'Penghapus',
          icon: 'eraser',
          bgHeader: '#475569',
          borderColor: '#94A3B8',
          bgCard: '#F8FAFC',
        },
      ],
      footerNote: '📌 Ditanyakan: Bentuk rasio paling sederhana banyak PENSIL (6) terhadap BUKU TULIS (9)',
    }),
    imageCaption: 'Ilustrasi Soal 1 Pos 5: Terdapat 6 batang pensil, 9 buku tulis, dan 3 penghapus di meja belajar.',
  },

  q_pos_5_2: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 5 • SOAL 2',
      headerTitle: 'TAKAPAN RESEP MINUMAN SEHAT KELAS (RASIO 2 : 5)',
      subtitle: 'Setiap 2 Gelas Sari Jeruk dicampur dengan 5 Gelas Air Putih',
      groups: [
        {
          title: 'SARI JERUK MURNI',
          count: 2,
          unitLabel: 'Gelas Jeruk',
          icon: 'glass_orange',
          bgHeader: '#EA580C',
          borderColor: '#FB923C',
          bgCard: '#FFF7ED',
        },
        {
          title: 'AIR PUTIH MATANG',
          count: 5,
          unitLabel: 'Gelas Air Putih',
          icon: 'glass_water',
          bgHeader: '#0284C7',
          borderColor: '#38BDF8',
          bgCard: '#F0F9FF',
        },
      ],
      footerNote: '📌 Rasio 2 : 5 • Jika memakai 6 gelas sari jeruk (2 × 3), berapa gelas air putih (5 × 3) yang diperlukan?',
    }),
    imageCaption: 'Ilustrasi Soal 2 Pos 5: Takaran dasar minuman sehat menggunakan 2 gelas sari jeruk berbanding 5 gelas air putih.',
  },

  q_pos_5_3: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 5 • SOAL 3',
      headerTitle: 'PERBANDINGAN MEJA DAN KURSI DI RUANG KELAS 6',
      subtitle: 'Setiap 1 Meja Belajar dipasangkan dengan 2 Kursi Siswa (Rasio 1 : 2)',
      groups: [
        {
          title: 'MEJA BELAJAR',
          count: 4,
          unitLabel: 'Meja Belajar',
          icon: 'desk',
          bgHeader: '#92400E',
          borderColor: '#D97706',
          bgCard: '#FFFBEB',
        },
        {
          title: 'KURSI SISWA',
          count: 8,
          unitLabel: 'Kursi Siswa',
          icon: 'chair',
          bgHeader: '#B45309',
          borderColor: '#F59E0B',
          bgCard: '#FEF3C7',
        },
      ],
      footerNote: '📌 Rasio Meja : Kursi = 4 : 8 = 1 : 2 • Jika ada 14 Meja Belajar, berapa banyak Kursi Siswa?',
    }),
    imageCaption: 'Ilustrasi Soal 3 Pos 5: Tampak 4 meja belajar berpasangan dengan 8 kursi siswa (rasio 1 : 2).',
  },

  q_pos_5_4: {
    imageUrl: createObjectComparisonSvg({
      posBadge: 'POS 5 • SOAL 4',
      headerTitle: 'KOLEKSI BUKU DI POJOK BACA KELAS 6',
      subtitle: '12 Buku Cerita dan 16 Buku Matematika (Total Seluruh Buku = 28 Buku)',
      groups: [
        {
          title: 'BUKU CERITA ANAK',
          count: 12,
          unitLabel: 'Buku Cerita',
          icon: 'book_story',
          bgHeader: '#E11D48',
          borderColor: '#FB7185',
          bgCard: '#FFF1F2',
        },
        {
          title: 'BUKU MATEMATIKA KELAS 6',
          count: 16,
          unitLabel: 'Buku Matematika',
          icon: 'book_math',
          bgHeader: '#059669',
          borderColor: '#34D399',
          bgCard: '#ECFDF5',
        },
      ],
      footerNote: '📌 Buku Cerita (12) : Buku Matematika (16) : Total Seluruh Buku (28)',
    }),
    imageCaption: 'Ilustrasi Soal 4 Pos 5: Terdapat 12 buku cerita dan 16 buku matematika di pojok baca kelas (Total = 28 buku).',
  },
};

/**
 * Fallback generator untuk soal tambahan yang dibuat baru oleh Guru di Panel Admin
 */
export function getFallbackQuestionImage(questionId: string, locationId: string): {
  imageUrl: string;
  imageCaption: string;
} {
  if (QUESTION_IMAGES[questionId]) {
    return QUESTION_IMAGES[questionId];
  }
  const defaultByLocation: Record<string, string> = {
    pos_1: 'q_pos_1_1',
    pos_2: 'q_pos_2_1',
    pos_3: 'q_pos_3_1',
    pos_4: 'q_pos_4_1',
    pos_5: 'q_pos_5_1',
  };
  const key = defaultByLocation[locationId] || 'q_pos_1_1';
  return QUESTION_IMAGES[key];
}

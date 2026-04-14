"use client"

import { useState } from "react";

const teams = [
    {
        id: 199,
        name: "테스트",
        leader: "@cjy11230",
        members: 1,
        squads: 1,
        minTier: { label: "Gold I", color: "#f59e0b", bg: "#fef3c7", text: "#92400e", icon: "🥇" },
        maxTier: { label: "Platinum IV", color: "#38bdf8", bg: "#e0f2fe", text: "#075985", icon: "🔷" },
    },
    {
        id: 196,
        name: "🌞 Haedal 🌊",
        leader: "@hjtn01",
        members: 1,
        squads: 1,
        minTier: null,
        maxTier: null,
    },
    {
        id: 195,
        name: "알고리즘 테스트",
        leader: "@wuwu4277",
        members: 3,
        squads: 1,
        minTier: { label: "Bronze I", color: "#d97706", bg: "#fef3c7", text: "#78350f", icon: "🥉" },
        maxTier: { label: "Silver III", color: "#94a3b8", bg: "#f1f5f9", text: "#334155", icon: "🔵" },
    },
    {
        id: 185,
        name: "FBI",
        leader: "@wschoi789",
        members: 2,
        squads: 1,
        minTier: null,
        maxTier: null,
    },
    {
        id: 180,
        name: "코딩 마스터즈",
        leader: "@devking99",
        members: 5,
        squads: 2,
        minTier: { label: "Silver I", color: "#94a3b8", bg: "#f1f5f9", text: "#334155", icon: "🔵" },
        maxTier: { label: "Gold III", color: "#f59e0b", bg: "#fef3c7", text: "#92400e", icon: "🥇" },
    },
    {
        id: 174,
        name: "알고 스터디 🔥",
        leader: "@algo_queen",
        members: 4,
        squads: 1,
        minTier: { label: "Bronze III", color: "#d97706", bg: "#fef3c7", text: "#78350f", icon: "🥉" },
        maxTier: { label: "Silver II", color: "#94a3b8", bg: "#f1f5f9", text: "#334155", icon: "🔵" },
    },
];

export default function TeamFind() {
    const [query, setQuery] = useState("");
    const [activeMenu, setActiveMenu] = useState("find");
    const [hoveredCard, setHoveredCard] = useState(null);

    const navItems = [
        {
            key: "study", label: "내 학습",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                </svg>
            ),
        },
        {
            key: "find", label: "팀 찾기",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="17" cy="7" r="3" />
                    <path d="M11 21v-1a7 7 0 0114 0v1" />
                    <circle cx="7" cy="11" r="4" />
                    <path d="M1 21v-1a7 7 0 0112 0" />
                </svg>
            ),
        },
        {
            key: "myteam", label: "내 팀",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="17" cy="7" r="3" />
                    <path d="M11 21v-1a7 7 0 0114 0v1" />
                    <circle cx="7" cy="11" r="4" />
                    <path d="M1 21v-1a7 7 0 0112 0" />
                </svg>
            ),
        },
    ];

    const filtered = teams.filter(t =>
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        t.leader.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}>
            <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button:focus { outline: none; }
        input:focus { outline: none; }
      `}</style>

            {/* Navbar */}
            <nav style={{
                position: "sticky", top: 0, zIndex: 50,
                background: "#fff",
                borderBottom: "1.5px solid #d1fae5",
                display: "flex", alignItems: "center",
                padding: "0 2rem", height: "56px",
                gap: "0",
            }}>
                {/* Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginRight: "2.5rem", cursor: "pointer" }}>
                    <div style={{
                        width: "32px", height: "32px", borderRadius: "8px",
                        background: "linear-gradient(135deg, #10b981, #059669)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                        </svg>
                    </div>
                    <span style={{ fontWeight: 700, fontSize: "16px", color: "#064e3b", letterSpacing: "-0.3px" }}>CodeMate</span>
                </div>

                {/* Nav items */}
                <div style={{ display: "flex", alignItems: "center", gap: "2px", flex: 1 }}>
                    {navItems.map(item => (
                        <button key={item.key} onClick={() => setActiveMenu(item.key)} style={{
                            display: "flex", alignItems: "center", gap: "6px",
                            padding: "6px 14px", borderRadius: "8px", border: "none", cursor: "pointer",
                            fontSize: "14px", fontWeight: activeMenu === item.key ? 600 : 400,
                            color: activeMenu === item.key ? "#059669" : "#6b7280",
                            background: activeMenu === item.key ? "#f0fdf4" : "transparent",
                            transition: "all 0.15s",
                        }}>
                            <span style={{ color: activeMenu === item.key ? "#10b981" : "#9ca3af" }}>{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Right actions */}
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <button style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", borderRadius: "8px", color: "#6b7280", display: "flex" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8">
                            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 01-3.46 0" />
                        </svg>
                    </button>
                    <button style={{
                        display: "flex", alignItems: "center", gap: "6px",
                        background: "none", border: "none", cursor: "pointer",
                        padding: "6px 10px", borderRadius: "8px",
                        fontSize: "14px", color: "#6b7280",
                        transition: "background 0.12s",
                    }}>
                        <span style={{ color: "#10b981" }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <circle cx="12" cy="8" r="4" />
                                <path d="M4 20v-1a8 8 0 0116 0v1" />
                            </svg>
                        </span>
                        chcl77
                    </button>
                    <button style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", borderRadius: "8px", color: "#6b7280", display: "flex" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                    </button>
                    <button style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", borderRadius: "8px", display: "flex" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8">
                            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                        </svg>
                    </button>
                </div>
            </nav>

            <main style={{ maxWidth: "860px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
                {/* Header */}
                <div style={{ marginBottom: "1.75rem" }}>
                    <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#064e3b", marginBottom: "6px", letterSpacing: "-0.4px" }}>
                        팀 찾기
                    </h1>
                    <p style={{ fontSize: "14px", color: "#059669" }}>다양한 공개 스터디 팀을 탐색하고 참여하세요</p>
                </div>

                {/* Search */}
                <div style={{ position: "relative", marginBottom: "10px" }}>
                    <span style={{
                        position: "absolute", left: "13px", top: "50%", transform: "translateY(-50%)",
                        display: "flex", alignItems: "center",
                    }}>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#10b981" strokeWidth="2">
                            <circle cx="9" cy="9" r="6" />
                            <path d="M15 15l-3.5-3.5" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="팀 이름으로 검색..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        style={{
                            width: "100%", maxWidth: "420px",
                            padding: "10px 14px 10px 40px",
                            border: "1.5px solid #6ee7b7", borderRadius: "10px",
                            fontSize: "14px", color: "#064e3b", background: "#fff",
                            transition: "border-color 0.15s",
                        }}
                        onFocus={e => e.target.style.borderColor = "#10b981"}
                        onBlur={e => e.target.style.borderColor = "#6ee7b7"}
                    />
                </div>
                <p style={{ fontSize: "13px", color: "#059669", marginBottom: "1.25rem" }}>
                    전체 {filtered.length}개 팀
                </p>

                {/* Card list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {filtered.length > 0 ? (
                        filtered.map((team, i) => (
                            <div
                                key={team.id}
                                onMouseEnter={() => setHoveredCard(team.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    animationDelay: `${i * 0.06}s`,
                                    background: "#fff",
                                    border: `1.5px solid ${hoveredCard === team.id ? "#10b981" : "#d1fae5"}`,
                                    borderRadius: "14px",
                                    padding: "1.1rem 1.25rem",
                                    cursor: "pointer",
                                    transition: "border-color 0.15s, box-shadow 0.15s",
                                    boxShadow: hoveredCard === team.id ? "0 4px 16px rgba(16,185,129,0.10)" : "none",
                                    animation: "fadeSlideIn 0.3s ease both",
                                }}
                            >
                                {/* Top row */}
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                                    <div style={{
                                        width: "44px", height: "44px", borderRadius: "10px",
                                        background: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                                    }}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8">
                                            <circle cx="9" cy="7" r="3" />
                                            <path d="M3 21v-2a4 4 0 014-4h4" />
                                            <circle cx="17" cy="17" r="3" />
                                            <path d="M14 17h6M17 14v6" />
                                        </svg>
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                                            <span style={{ fontSize: "15px", fontWeight: 600, color: "#064e3b" }}>{team.name}</span>
                                            <span style={{ fontSize: "13px", color: "#6ee7b7" }}>#{team.id}</span>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#059669" }}>
                                            <svg width="14" height="14" viewBox="0 0 20 20" fill="#f59e0b">
                                                <path d="M2 14l2-7 4 4 2-6 2 6 4-4 2 7H2z" />
                                            </svg>
                                            <span>{team.leader}</span>
                                            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#6ee7b7", display: "inline-block" }} />
                                            <span>{team.members}명</span>
                                            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#6ee7b7", display: "inline-block" }} />
                                            <span>스쿼드 {team.squads}개</span>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px" }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a7f3d0" strokeWidth="2">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                        <span style={{ fontSize: "11px", color: "#a7f3d0" }}>클릭 시 이동</span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div style={{ borderTop: "1px solid #d1fae5", margin: "10px 0" }} />

                                {/* Bottom row */}
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                        <span style={{ fontSize: "12px", color: "#6ee7b7", marginRight: "2px" }}>난이도 범위</span>
                                        {team.minTier && team.maxTier ? (
                                            <>
                                                <span style={{
                                                    display: "inline-flex", alignItems: "center", gap: "4px",
                                                    padding: "3px 10px", borderRadius: "20px",
                                                    background: team.minTier.bg, color: team.minTier.text, fontSize: "12px", fontWeight: 500,
                                                }}>
                                                    {team.minTier.icon} {team.minTier.label}
                                                </span>
                                                <span style={{ color: "#a7f3d0", fontSize: "13px" }}>~</span>
                                                <span style={{
                                                    display: "inline-flex", alignItems: "center", gap: "4px",
                                                    padding: "3px 10px", borderRadius: "20px",
                                                    background: team.maxTier.bg, color: team.maxTier.text, fontSize: "12px", fontWeight: 500,
                                                }}>
                                                    {team.maxTier.icon} {team.maxTier.label}
                                                </span>
                                            </>
                                        ) : (
                                            <span style={{ fontSize: "12px", color: "#a7f3d0" }}>설정 없음</span>
                                        )}
                                    </div>

                                    <button style={{
                                        fontSize: "12px", color: "#059669",
                                        background: "#f0fdf4", border: "1px solid #6ee7b7",
                                        borderRadius: "8px", padding: "5px 12px",
                                        cursor: "pointer", whiteSpace: "nowrap",
                                        transition: "background 0.12s",
                                        fontWeight: 500,
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.background = "#d1fae5"}
                                        onMouseLeave={e => e.currentTarget.style.background = "#f0fdf4"}
                                    >
                                        추천 설정 상세 보기 ›
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{
                            textAlign: "center", padding: "3rem 0",
                            color: "#a7f3d0", fontSize: "15px",
                        }}>
                            검색 결과가 없습니다
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
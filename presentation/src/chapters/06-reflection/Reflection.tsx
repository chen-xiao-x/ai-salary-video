import { useEffect, useState } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./Reflection.css";

/** Chapter 6: reflection · 7 steps (0..6). CSS prefix: .rf- */
export default function Reflection({ step }: ChapterStepProps) {
  return (
    <div className="rf-scene scene-enter">
      <div className="chapter-bg rf" />
      {/* Background decorations */}
      <div className="deco-grid" />
      <div className="deco-side-bar" />
      <div className="deco-bracket top-right" />
      <div className="deco-bracket bottom-left" />
      <div className="deco-watermark" style={{ left: "-50px", top: "80px" }}>∞</div>
      {/* Step 0: R² = 0.31 limitation */}
      {step === 0 && (
        <>
          <div className="rf-title">模型的局限</div>
          <div className="rf-pie-wrap">
            <R2Pie />
            <R delay={600}><div className="rf-pie-label">最优模型 R²=0.31，还有 69% 解释不了</div></R>
          </div>
          <R delay={900}><div className="rf-sub">谈判能力、股权激励、公司经营状况、个人独特价值，这些模型都看不到</div></R>
        </>
      )}
      {/* Step 1: Positioning */}
      {step === 1 && (
        <R delay={0}><div className="rf-big">辅助决策工具<br />不是决策<em>替代品</em></div></R>
      )}
      {/* Step 2: Data bias risk */}
      {step === 2 && (
        <>
          <div className="rf-title">风险提示</div>
          <div className="rf-risks">
            <R delay={200}><div className="rf-risk"><span className="rf-risk-icon">01</span><span className="rf-risk-text">数据偏见：87.5% 样本来自美国，直接套用到中国企业会有偏差</span></div></R>
          </div>
        </>
      )}
      {/* Step 3: Over-reliance + privacy */}
      {step === 3 && (
        <>
          <div className="rf-title">风险提示</div>
          <div className="rf-risks">
            <div className="rf-risk" style={{ opacity: 0.3 }}><span className="rf-risk-icon">01</span><span className="rf-risk-text">数据偏见</span></div>
            <R delay={200}><div className="rf-risk"><span className="rf-risk-icon">02</span><span className="rf-risk-text">过度依赖：把模型预测当"标准答案"，从辅助工具变成决策替代品</span></div></R>
            <R delay={400}><div className="rf-risk"><span className="rf-risk-icon">03</span><span className="rf-risk-text">隐私伦理：薪酬数据敏感，脱敏、匿名化、访问控制必须先搭好</span></div></R>
          </div>
        </>
      )}
      {/* Step 4: Data awareness */}
      {step === 4 && (
        <>
          <div className="rf-title">落地三要素</div>
          <div className="rf-pillars">
            <R delay={200}><div className="rf-pillar"><span className="rf-pillar-num">01</span><span className="rf-pillar-title">数据意识</span><span className="rf-pillar-desc">决策时问自己：支撑这个判断的数据是什么？数据质量怎么样？</span></div></R>
            <div className="rf-pillar" style={{ opacity: 0.3 }}><span className="rf-pillar-num">02</span><span className="rf-pillar-title">承认局限</span></div>
            <div className="rf-pillar" style={{ opacity: 0.3 }}><span className="rf-pillar-num">03</span><span className="rf-pillar-title">组织配套</span></div>
          </div>
        </>
      )}
      {/* Step 5: Limitation + org support */}
      {step === 5 && (
        <>
          <div className="rf-title">落地三要素</div>
          <div className="rf-pillars">
            <div className="rf-pillar" style={{ opacity: 0.3 }}><span className="rf-pillar-num">01</span><span className="rf-pillar-title">数据意识</span></div>
            <R delay={200}><div className="rf-pillar"><span className="rf-pillar-num">02</span><span className="rf-pillar-title">承认局限</span><span className="rf-pillar-desc">模型告诉你哪些因素重要，但不知道个体的独特情况</span></div></R>
            <R delay={400}><div className="rf-pillar"><span className="rf-pillar-num">03</span><span className="rf-pillar-title">组织配套</span><span className="rf-pillar-desc">技术：数据基础设施。流程：嵌入关键节点。人才：桥梁型人才。</span></div></R>
          </div>
        </>
      )}
      {/* Step 6: Future */}
      {step === 6 && (
        <>
          <div className="rf-big">让数据照亮盲区<br />有素养的人做出<em>更聪明的判断</em></div>
          <R delay={500}><div className="rf-sub">更大规模数据融合 · 个性化动态策略 · 行业级数据共享联盟</div></R>
        </>
      )}
    </div>
  );
}

function R({ delay, children }: { delay: number; children: React.ReactNode }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(16px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}>{children}</div>;
}

function R2Pie() {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), 200); return () => clearTimeout(t); }, []);
  const r = 110;
  const cx = 140, cy = 140;
  const circumference = 2 * Math.PI * r;
  const explained = 0.31;
  const offset = circumference - explained * circumference;
  return (
    <svg viewBox="0 0 280 280" style={{ width: 280, height: 280 }}>
      {/* Background ring */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--surface-3)" strokeWidth="16" />
      {/* Explained ring */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--accent)" strokeWidth="16"
        strokeLinecap="round" strokeDasharray={circumference}
        strokeDashoffset={v ? offset : circumference}
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: "stroke-dashoffset 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} />
      {/* Unexplained ring */}
      <circle cx={cx} cy={cy} r={r - 24} fill="none" stroke="var(--text-faint)" strokeWidth="8" opacity="0.3" />
      {/* Center text */}
      <text x={cx} y={cy - 8} textAnchor="middle" fill="var(--accent)" fontSize="52"
        fontFamily="var(--font-display-en)" fontStyle="italic" fontWeight="500"
        opacity={v ? 1 : 0} style={{ transition: "opacity 0.5s ease 1s" }}>31%</text>
      <text x={cx} y={cy + 24} textAnchor="middle" fill="var(--text-mute)" fontSize="16"
        fontFamily="var(--font-body)"
        opacity={v ? 1 : 0} style={{ transition: "opacity 0.5s ease 1.2s" }}>已解释</text>
      <text x={cx} y={cy + 48} textAnchor="middle" fill="var(--text-faint)" fontSize="13"
        fontFamily="var(--font-body)"
        opacity={v ? 1 : 0} style={{ transition: "opacity 0.5s ease 1.4s" }}>69% 无法解释</text>
    </svg>
  );
}

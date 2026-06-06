import { useEffect, useState } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./DataModel.css";

/**
 * Chapter 2: data-model — 清洗数据，选两种模型
 *
 * 10 steps (0..9). CSS prefix: .dm-
 * Theme: indigo-porcelain
 */
export default function DataModel({ step }: ChapterStepProps) {
  return (
    <div className="dm-scene scene-enter">
      {/* Step 0: Data cleaning intro */}
      {step === 0 && (
        <div className="dm-clean-intro">
          <Reveal delay={100}>
            <div className="dm-clean-hero">16,534</div>
          </Reveal>
          <Reveal delay={400}>
            <div className="dm-clean-sub">原始数据，11 个字段</div>
          </Reveal>
          <div className="dm-clean-detail">
            <Reveal delay={700}>
              <span className="dm-clean-tag">去重 6,421 条</span>
            </Reveal>
          </div>
        </div>
      )}

      {/* Step 1: Funnel — 150+ → 14 → 9,909 */}
      {step === 1 && (
        <div className="dm-funnel-scene">
          <div className="dm-funnel-title">数据清洗</div>
          <div className="dm-funnel">
            <FunnelStep number="150+" label="职位名称" delay={200} />
            <FunnelArrow delay={500} />
            <FunnelStep number="14" label="标准大类" delay={700} />
            <FunnelArrow delay={1000} />
            <FunnelStep number="9,909" label="有效样本" delay={1200} />
          </div>
          <Reveal delay={1600}>
            <div className="dm-clean-sub">百分位数法 (1%–99%) 过滤异常值 · 统一为美元</div>
          </Reveal>
        </div>
      )}

      {/* Step 2: Job categories */}
      {step === 2 && (
        <div className="dm-jobs-scene">
          <div className="dm-jobs-title">十几种细分岗位</div>
          <div className="dm-jobs-grid">
            {[
              "数据工程师", "数据科学家", "数据分析师",
              "机器学习工程师", "AI 工程师", "数据架构师",
              "BI 分析师", "算法工程师", "NLP 工程师",
              "计算机视觉工程师", "数据产品经理",
            ].map((name, i) => (
              <Reveal key={name} delay={150 + i * 120}>
                <span className={`dm-job-tag ${i < 3 ? "highlight" : ""}`}>
                  {name}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Linear regression intro */}
      {step === 3 && (
        <div className="dm-model-scene">
          <div className="dm-model-title">两种回归模型</div>
          <div className="dm-models-row">
            <Reveal delay={200}>
              <div className="dm-model-card">
                <span className="dm-model-name">多元线性回归</span>
                <div className="dm-model-formula">
                  Y = β₀ + β₁X₁ + β₂X₂ + ... + βₚXₚ + ε
                </div>
                <span className="dm-model-desc">
                  系数有经济含义，管理者一看就懂。每个系数表示该因素对薪资的边际影响。
                </span>
                <div className="dm-model-tags">
                  <span className="dm-model-tag">方法成熟</span>
                  <span className="dm-model-tag">计算效率高</span>
                  <span className="dm-model-tag">适合 HR 系统部署</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      )}

      {/* Step 4: Linear limitation */}
      {step === 4 && (
        <div className="dm-model-scene">
          <div className="dm-model-title">但有个问题</div>
          <div className="dm-models-row">
            <Reveal delay={200}>
              <div className="dm-model-card">
                <span className="dm-model-name">线性回归的局限</span>
                <span className="dm-model-desc">
                  它假设变量之间是线性关系。
                </span>
                <LinearLimitationSVG />
                <span className="dm-model-desc" style={{ color: "var(--accent)" }}>
                  现实中的薪资往往不是这样。
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      )}

      {/* Step 5: Random forest intro */}
      {step === 5 && (
        <div className="dm-model-scene">
          <div className="dm-model-title">另一种选择</div>
          <div className="dm-models-row">
            <Reveal delay={200}>
              <div className="dm-model-card">
                <span className="dm-model-name">随机森林</span>
                <RandomForestSVG />
                <span className="dm-model-desc">
                  能自动捕捉非线性关系和交互效应。通过多树平均降低过拟合风险。
                </span>
                <div className="dm-model-tags">
                  <span className="dm-model-tag">非线性</span>
                  <span className="dm-model-tag">多树平均</span>
                  <span className="dm-model-tag">特征重要性排序</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      )}

      {/* Step 6: Validation */}
      {step === 6 && (
        <div className="dm-valid-scene">
          <div className="dm-valid-title">验证方法</div>
          <div className="dm-valid-row">
            <Reveal delay={200}>
              <div className="dm-valid-item">
                <span className="dm-valid-number">80:20</span>
                <span className="dm-valid-label">训练集 : 测试集</span>
              </div>
            </Reveal>
            <div className="dm-valid-divider" />
            <Reveal delay={500}>
              <div className="dm-valid-item">
                <span className="dm-valid-number">5</span>
                <span className="dm-valid-label">折交叉验证</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={800}>
            <div className="dm-clean-sub">薪资是连续型变量，天然适合做回归目标</div>
          </Reveal>
        </div>
      )}

      {/* Step 7: R² — linear regression */}
      {step === 7 && (
        <div className="dm-r2-scene">
          <div className="dm-r2-title">模型结果对比</div>
          <div className="dm-r2-bars">
            <R2Bar
              label="线性回归"
              value="0.146"
              fillPercent={29}
              accent={false}
              delay={200}
              dimmed={false}
            />
            <R2Bar
              label="随机森林"
              value="0.310"
              fillPercent={62}
              accent
              delay={200}
              dimmed
            />
          </div>
          <Reveal delay={800}>
            <div className="dm-clean-sub">
              平均误差 4.7 万美元 · 均方根误差 5.9 万
            </div>
          </Reveal>
        </div>
      )}

      {/* Step 8: R² — random forest highlight */}
      {step === 8 && (
        <div className="dm-r2-scene">
          <div className="dm-r2-title">模型结果对比</div>
          <div className="dm-r2-bars">
            <R2Bar
              label="线性回归"
              value="0.146"
              fillPercent={29}
              accent={false}
              delay={0}
              dimmed
            />
            <R2Bar
              label="随机森林"
              value="0.310"
              fillPercent={62}
              accent
              delay={300}
              dimmed={false}
            />
          </div>
          <Reveal delay={900}>
            <div className="dm-clean-sub">
              交叉验证 R² 均值 0.329 · 标准差 ±0.018 · 模型很稳定
            </div>
          </Reveal>
        </div>
      )}

      {/* Step 9: Conclusion */}
      {step === 9 && (
        <div className="dm-conclusion-scene">
          <div className="dm-conclusion-text">
            薪资的决定机制是<em>非线性</em>的
          </div>
          <Reveal delay={500}>
            <div className="dm-conclusion-sub">
              各种因素之间有复杂交互，随机森林比线性回归好了整整一倍
            </div>
          </Reveal>
        </div>
      )}
    </div>
  );
}

/* ── Helper components ── */

function Reveal({
  delay,
  children,
}: {
  delay: number;
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={visible ? "visible" : ""}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {children}
    </div>
  );
}

function FunnelStep({
  number,
  label,
  delay,
}: {
  number: string;
  label: string;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className={`dm-funnel-step ${visible ? "visible" : ""}`}>
      <span className="dm-funnel-number">{number}</span>
      <span className="dm-funnel-label">{label}</span>
    </div>
  );
}

function FunnelArrow({ delay }: { delay: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return <span className={`dm-funnel-arrow ${visible ? "visible" : ""}`}>→</span>;
}

function LinearLimitationSVG() {
  return (
    <svg
      viewBox="0 0 300 160"
      style={{ width: "100%", maxWidth: 360, height: "auto" }}
    >
      {/* Axes */}
      <line x1="40" y1="140" x2="280" y2="140" stroke="var(--rule)" strokeWidth="1" />
      <line x1="40" y1="140" x2="40" y2="20" stroke="var(--rule)" strokeWidth="1" />
      {/* Scatter points — curved pattern */}
      {[
        [60, 120], [80, 105], [100, 88], [120, 72],
        [140, 58], [160, 48], [180, 42], [200, 40],
        [220, 42], [240, 50], [260, 62],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="4"
          fill="var(--accent)"
          opacity="0.5"
          style={{
            opacity: 0,
            animation: `fadeIn 0.3s ease ${0.1 + i * 0.08}s forwards`,
          }}
        />
      ))}
      {/* Linear fit line */}
      <line
        x1="50"
        y1="130"
        x2="270"
        y2="50"
        stroke="var(--text-faint)"
        strokeWidth="2"
        strokeDasharray="6 4"
        style={{
          strokeDashoffset: 300,
          animation: "drawLine 0.8s ease 0.5s forwards",
        }}
      />
      {/* Label */}
      <text x="150" y="18" textAnchor="middle" fill="var(--text-mute)" fontSize="12" fontFamily="var(--font-body)">
        线性拟合抓不住曲线关系
      </text>
      <style>{`
        @keyframes fadeIn { to { opacity: 0.5; } }
        @keyframes drawLine { to { stroke-dashoffset: 0; } }
      `}</style>
    </svg>
  );
}

function RandomForestSVG() {
  return (
    <svg
      viewBox="0 0 360 160"
      style={{ width: "100%", maxWidth: 420, height: "auto" }}
    >
      {/* Root node */}
      <rect x="145" y="8" width="70" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1" />
      <text x="180" y="27" textAnchor="middle" fill="var(--accent)" fontSize="12" fontFamily="var(--font-mono)">全部数据</text>
      {/* Bootstrap arrows */}
      {[90, 180, 270].map((x, i) => (
        <line key={i} x1="180" y1="36" x2={x} y2="60" stroke="var(--rule)" strokeWidth="1"
          style={{ strokeDasharray: 60, strokeDashoffset: 60, animation: `drawLine 0.4s ease ${0.2 + i * 0.15}s forwards` }}
        />
      ))}
      {/* Tree nodes */}
      {[90, 180, 270].map((x, i) => (
        <g key={i}>
          <rect x={x - 30} y="60" width="60" height="24" rx="3" fill="var(--surface-3)" stroke="var(--rule)" strokeWidth="1"
            style={{ opacity: 0, animation: `fadeIn 0.3s ease ${0.5 + i * 0.15}s forwards` }}
          />
          <text x={x} y="76" textAnchor="middle" fill="var(--text-2)" fontSize="11" fontFamily="var(--font-mono)">
            树 {i + 1}
          </text>
          {/* Leaf nodes */}
          {[x - 18, x + 18].map((lx, j) => (
            <g key={j}>
              <line x1={x} y1="84" x2={lx} y2="100" stroke="var(--rule)" strokeWidth="1"
                style={{ strokeDasharray: 20, strokeDashoffset: 20, animation: `drawLine 0.3s ease ${0.8 + i * 0.1 + j * 0.05}s forwards` }}
              />
              <rect x={lx - 12} y="100" width="24" height="18" rx="2" fill="var(--surface-2)" stroke="var(--rule)" strokeWidth="1"
                style={{ opacity: 0, animation: `fadeIn 0.3s ease ${0.9 + i * 0.1 + j * 0.05}s forwards` }}
              />
              <text x={lx} y="113" textAnchor="middle" fill="var(--text-faint)" fontSize="9" fontFamily="var(--font-mono)">
                ŷ{i + 1}
              </text>
            </g>
          ))}
        </g>
      ))}
      {/* Average arrow */}
      <line x1="180" y1="120" x2="180" y2="138" stroke="var(--accent)" strokeWidth="1.5"
        style={{ strokeDasharray: 20, strokeDashoffset: 20, animation: "drawLine 0.4s ease 1.3s forwards" }}
      />
      <rect x="145" y="138" width="70" height="22" rx="4" fill="var(--accent)" style={{ opacity: 0, animation: "fadeIn 0.4s ease 1.5s forwards" }} />
      <text x="180" y="153" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="var(--font-mono)" fontWeight="600">
        取平均
      </text>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes drawLine { to { stroke-dashoffset: 0; } }
      `}</style>
    </svg>
  );
}

function R2Bar({
  label,
  value,
  fillPercent,
  accent,
  delay,
  dimmed,
}: {
  label: string;
  value: string;
  fillPercent: number;
  accent: boolean;
  delay: number;
  dimmed: boolean;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className={`dm-r2-bar-row ${dimmed ? "dimmed" : ""} ${visible ? "visible" : ""}`}>
      <span className="dm-r2-bar-label">{label}</span>
      <div className="dm-r2-bar-track">
        <div
          className={`dm-r2-bar-fill ${accent ? "accent" : "muted"} ${visible ? "visible" : ""}`}
          style={{ "--fill-width": `${fillPercent}%` } as React.CSSProperties}
        />
      </div>
      <span className={`dm-r2-bar-value ${accent ? "accent" : ""} ${visible ? "visible" : ""}`}>
        R²={value}
      </span>
    </div>
  );
}

import { useEffect, useState } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./DataModel.css";

/**
 * Chapter 2: data-model — 清洗数据，选两种模型
 * 10 steps (0..9). CSS prefix: .dm-
 */
export default function DataModel({ step }: ChapterStepProps) {
  return (
    <div className="dm-scene scene-enter">
      <div className="deco-grid" />
      <div className="deco-side-bar" />
      <div className="deco-bracket top-right" />
      <div className="deco-bracket bottom-left" />
      <div className="deco-watermark" style={{ left: "-60px", bottom: "40px" }}>RF</div>

      {/* Step 0: Big number with animated counter */}
      {step === 0 && (
        <div className="dm-clean-intro">
          <Reveal delay={100}>
            <div className="dm-clean-hero glow-pulse">16,534</div>
          </Reveal>
          <Reveal delay={400}>
            <div className="dm-clean-sub">条原始薪资记录，11 个字段</div>
          </Reveal>
          <Reveal delay={700}>
            <div className="dm-clean-tag">去重 6,421 条</div>
          </Reveal>
        </div>
      )}

      {/* Step 1: SVG Funnel */}
      {step === 1 && (
        <div className="dm-funnel-scene">
          <div className="dm-funnel-title">数据清洗流程</div>
          <FunnelSVG />
          <Reveal delay={1800}>
            <div className="dm-clean-sub">百分位数法 (1%–99%) 过滤异常值 · 统一为美元</div>
          </Reveal>
        </div>
      )}

      {/* Step 2: Job categories — icon grid */}
      {step === 2 && (
        <div className="dm-jobs-scene">
          <div className="dm-jobs-title">十几种细分岗位</div>
          <div className="dm-jobs-grid">
            {[
              { name: "数据工程师", icon: "⚙" },
              { name: "数据科学家", icon: "🔬" },
              { name: "数据分析师", icon: "📊" },
              { name: "机器学习工程师", icon: "🧠" },
              { name: "AI 工程师", icon: "🤖" },
              { name: "数据架构师", icon: "🏗" },
              { name: "BI 分析师", icon: "📈" },
              { name: "算法工程师", icon: "⚡" },
              { name: "NLP 工程师", icon: "💬" },
              { name: "计算机视觉", icon: "👁" },
              { name: "数据产品经理", icon: "🎯" },
            ].map((j, i) => (
              <Reveal key={j.name} delay={150 + i * 100}>
                <span className={`dm-job-tag ${i < 3 ? "highlight" : ""}`}>
                  <span className="dm-job-icon">{j.icon}</span>
                  {j.name}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Linear regression card with formula */}
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

      {/* Step 4: Linear limitation — scatter plot SVG */}
      {step === 4 && (
        <div className="dm-model-scene">
          <div className="dm-model-title">但有个问题</div>
          <div className="dm-models-row">
            <Reveal delay={200}>
              <div className="dm-model-card">
                <span className="dm-model-name">线性回归的局限</span>
                <ScatterPlotLinearSVG />
                <span className="dm-model-desc" style={{ color: "var(--accent)" }}>
                  它假设变量之间是线性关系。现实中的薪资往往不是这样。
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      )}

      {/* Step 5: Random forest — tree SVG */}
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
                <span className="dm-valid-number glow-pulse">80:20</span>
                <span className="dm-valid-label">训练集 : 测试集</span>
              </div>
            </Reveal>
            <div className="dm-valid-divider" />
            <Reveal delay={500}>
              <div className="dm-valid-item">
                <span className="dm-valid-number glow-pulse">5</span>
                <span className="dm-valid-label">折交叉验证</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={800}>
            <div className="dm-clean-sub">薪资是连续型变量，天然适合做回归目标</div>
          </Reveal>
        </div>
      )}

      {/* Step 7: R² — linear regression highlight */}
      {step === 7 && (
        <div className="dm-r2-scene">
          <div className="dm-r2-title">模型结果对比</div>
          <div className="dm-r2-bars">
            <R2Bar label="线性回归" value="0.146" fillPercent={29} accent={false} delay={200} dimmed={false} />
            <R2Bar label="随机森林" value="0.310" fillPercent={62} accent delay={200} dimmed />
          </div>
          <Reveal delay={800}>
            <div className="dm-clean-sub">平均误差 4.7 万美元 · 均方根误差 5.9 万</div>
          </Reveal>
        </div>
      )}

      {/* Step 8: R² — random forest highlight */}
      {step === 8 && (
        <div className="dm-r2-scene">
          <div className="dm-r2-title">模型结果对比</div>
          <div className="dm-r2-bars">
            <R2Bar label="线性回归" value="0.146" fillPercent={29} accent={false} delay={0} dimmed />
            <R2Bar label="随机森林" value="0.310" fillPercent={62} accent delay={300} dimmed={false} />
          </div>
          <Reveal delay={900}>
            <div className="dm-clean-sub">交叉验证 R² 均值 0.329 · 标准差 ±0.018 · 模型很稳定</div>
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

function Reveal({ delay, children }: { delay: number; children: React.ReactNode }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(16px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}>{children}</div>;
}

/* ── SVG: Data Cleaning Funnel ── */
function FunnelSVG() {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), 100); return () => clearTimeout(t); }, []);
  return (
    <svg viewBox="0 0 700 280" style={{ width: 700, height: 280 }}>
      {/* Stage 1: 16,534 */}
      <g style={{ opacity: v ? 1 : 0, transition: "opacity 0.5s ease 0.2s" }}>
        <rect x="50" y="20" width="600" height="60" rx="6" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="350" y="45" textAnchor="middle" fill="var(--accent)" fontSize="22" fontFamily="var(--font-display-en)" fontStyle="italic" fontWeight="500">16,534</text>
        <text x="350" y="65" textAnchor="middle" fill="var(--text-mute)" fontSize="13" fontFamily="var(--font-body)">原始记录</text>
      </g>
      {/* Arrow 1 */}
      <g style={{ opacity: v ? 1 : 0, transition: "opacity 0.3s ease 0.6s" }}>
        <line x1="350" y1="80" x2="350" y2="105" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <text x="390" y="97" fill="var(--text-faint)" fontSize="11" fontFamily="var(--font-mono)">−6,421 重复</text>
      </g>
      {/* Stage 2: 10,113 */}
      <g style={{ opacity: v ? 1 : 0, transition: "opacity 0.5s ease 0.8s" }}>
        <rect x="100" y="108" width="500" height="52" rx="5" fill="var(--surface-2)" stroke="var(--rule)" strokeWidth="1" />
        <text x="350" y="132" textAnchor="middle" fill="var(--text-2)" fontSize="20" fontFamily="var(--font-display-en)" fontStyle="italic" fontWeight="500">10,113</text>
        <text x="350" y="150" textAnchor="middle" fill="var(--text-mute)" fontSize="12" fontFamily="var(--font-body)">去重后</text>
      </g>
      {/* Arrow 2 */}
      <g style={{ opacity: v ? 1 : 0, transition: "opacity 0.3s ease 1.1s" }}>
        <line x1="350" y1="160" x2="350" y2="185" stroke="var(--rule)" strokeWidth="1" markerEnd="url(#arrow)" />
        <text x="390" y="177" fill="var(--text-faint)" fontSize="11" fontFamily="var(--font-mono)">150+ → 14 类</text>
      </g>
      {/* Stage 3: 9,909 */}
      <g style={{ opacity: v ? 1 : 0, transition: "opacity 0.5s ease 1.3s" }}>
        <rect x="150" y="188" width="400" height="52" rx="5" fill="var(--surface-2)" stroke="var(--rule)" strokeWidth="1" />
        <text x="350" y="212" textAnchor="middle" fill="var(--text-2)" fontSize="20" fontFamily="var(--font-display-en)" fontStyle="italic" fontWeight="500">9,909</text>
        <text x="350" y="230" textAnchor="middle" fill="var(--text-mute)" fontSize="12" fontFamily="var(--font-body)">过滤异常值后</text>
      </g>
      {/* Arrow 3 */}
      <g style={{ opacity: v ? 1 : 0, transition: "opacity 0.3s ease 1.6s" }}>
        <line x1="350" y1="240" x2="350" y2="258" stroke="var(--rule)" strokeWidth="1" markerEnd="url(#arrow)" />
        <text x="390" y="254" fill="var(--text-faint)" fontSize="11" fontFamily="var(--font-mono)">1%–99% 分位数</text>
      </g>
      {/* Final badge */}
      <g style={{ opacity: v ? 1 : 0, transition: "opacity 0.5s ease 1.8s" }}>
        <rect x="250" y="258" width="200" height="24" rx="12" fill="var(--accent)" />
        <text x="350" y="274" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="var(--font-body)" fontWeight="600">有效样本 · 统一美元</text>
      </g>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
        </marker>
      </defs>
    </svg>
  );
}

/* ── SVG: Linear Regression Scatter Plot ── */
function ScatterPlotLinearSVG() {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), 200); return () => clearTimeout(t); }, []);
  // Curved data points
  const points = [
    [60, 130], [80, 115], [100, 98], [120, 80], [140, 65],
    [160, 52], [180, 43], [200, 38], [220, 36], [240, 38],
    [260, 44], [280, 54],
  ];
  return (
    <svg viewBox="0 0 340 160" style={{ width: "100%", maxWidth: 380, height: "auto" }}>
      <line x1="40" y1="145" x2="310" y2="145" stroke="var(--rule)" strokeWidth="1" />
      <line x1="40" y1="145" x2="40" y2="15" stroke="var(--rule)" strokeWidth="1" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="var(--accent)" opacity="0"
          style={{ animation: `fadeIn 0.3s ease ${0.1 + i * 0.06}s forwards` }} />
      ))}
      {/* Linear fit line — clearly wrong */}
      <line x1="50" y1="135" x2="295" y2="45" stroke="var(--text-faint)" strokeWidth="2" strokeDasharray="8 5"
        style={{ strokeDashoffset: 300, animation: "drawLine 1s ease 0.5s forwards" }} />
      <text x="175" y="15" textAnchor="middle" fill="var(--text-mute)" fontSize="11" fontFamily="var(--font-body)">
        直线拟合，明显偏差大
      </text>
      <style>{`@keyframes fadeIn{to{opacity:0.6}}@keyframes drawLine{to{stroke-dashoffset:0}}`}</style>
    </svg>
  );
}

/* ── SVG: Random Forest Tree ── */
function RandomForestSVG() {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), 200); return () => clearTimeout(t); }, []);
  return (
    <svg viewBox="0 0 380 170" style={{ width: "100%", maxWidth: 420, height: "auto" }}>
      <rect x="155" y="5" width="70" height="26" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1" />
      <text x="190" y="23" textAnchor="middle" fill="var(--accent)" fontSize="11" fontFamily="var(--font-mono)">全部数据</text>
      {[100, 190, 280].map((x, i) => (
        <g key={i}>
          <line x1="190" y1="31" x2={x} y2="55" stroke="var(--rule)" strokeWidth="1"
            style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: `drawLine 0.3s ease ${0.3 + i * 0.12}s forwards` }} />
          <rect x={x - 28} y="55" width="56" height="22" rx="3" fill="var(--surface-3)" stroke="var(--rule)" strokeWidth="1"
            style={{ opacity: 0, animation: `fadeIn 0.3s ease ${0.5 + i * 0.12}s forwards` }} />
          <text x={x} y="70" textAnchor="middle" fill="var(--text-2)" fontSize="10" fontFamily="var(--font-mono)">树 {i + 1}</text>
          {[x - 16, x + 16].map((lx, j) => (
            <g key={j}>
              <line x1={x} y1="77" x2={lx} y2="95" stroke="var(--rule)" strokeWidth="1"
                style={{ strokeDasharray: 20, strokeDashoffset: 20, animation: `drawLine 0.2s ease ${0.7 + i * 0.1 + j * 0.05}s forwards` }} />
              <rect x={lx - 10} y="95" width="20" height="16" rx="2" fill="var(--surface-2)" stroke="var(--rule)" strokeWidth="0.8"
                style={{ opacity: 0, animation: `fadeIn 0.2s ease ${0.8 + i * 0.1 + j * 0.05}s forwards` }} />
              <text x={lx} y="106" textAnchor="middle" fill="var(--text-faint)" fontSize="8" fontFamily="var(--font-mono)">ŷ{i + 1}</text>
            </g>
          ))}
        </g>
      ))}
      <line x1="190" y1="115" x2="190" y2="132" stroke="var(--accent)" strokeWidth="1.5"
        style={{ strokeDasharray: 20, strokeDashoffset: 20, animation: "drawLine 0.3s ease 1.2s forwards" }} />
      <rect x="155" y="132" width="70" height="22" rx="4" fill="var(--accent)"
        style={{ opacity: 0, animation: "fadeIn 0.4s ease 1.4s forwards" }} />
      <text x="190" y="147" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="var(--font-mono)" fontWeight="600">取平均</text>
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes drawLine{to{stroke-dashoffset:0}}`}</style>
    </svg>
  );
}

/* ── R² Bar ── */
function R2Bar({ label, value, fillPercent, accent, delay, dimmed }: {
  label: string; value: string; fillPercent: number; accent: boolean; delay: number; dimmed: boolean;
}) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div className={`dm-r2-bar-row ${dimmed ? "dimmed" : ""} ${v ? "visible" : ""}`}>
      <span className="dm-r2-bar-label">{label}</span>
      <div className="dm-r2-bar-track">
        <div className={`dm-r2-bar-fill ${accent ? "accent" : "muted"} ${v ? "visible" : ""}`}
          style={{ "--fill-width": `${fillPercent}%` } as React.CSSProperties} />
      </div>
      <span className={`dm-r2-bar-value ${accent ? "accent" : ""} ${v ? "visible" : ""}`}>R²={value}</span>
    </div>
  );
}

import { useEffect, useState } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./Findings.css";

/**
 * Chapter 3: findings — 三大因素决定薪资
 * 10 steps (0..9). CSS prefix: .fn-
 */
export default function Findings({ step }: ChapterStepProps) {
  return (
    <div className="fn-scene scene-enter">
      {/* Background decorations */}
      <div className="deco-grid" />
      <div className="deco-side-bar" />
      <div className="deco-bracket top-left" />
      <div className="deco-bracket bottom-right" />
      <div className="deco-watermark" style={{ right: "-20px", top: "60px" }}>88%</div>
      {/* Step 0: Linear regression R² */}
      {step === 0 && (
        <div className="fn-r2-scene">
          <div className="fn-title">模型结果</div>
          <div className="fn-r2-bars">
            <R2Row label="线性回归" value="0.146" pct={29} accent delay={200} dimmed={false} />
          </div>
          <div className="fn-stats-row">
            <Reveal delay={600}>
              <span className="fn-stat">MAE <strong>$47,133</strong></span>
            </Reveal>
            <Reveal delay={800}>
              <span className="fn-stat">RMSE <strong>$59,217</strong></span>
            </Reveal>
          </div>
          <Reveal delay={1000}>
            <div className="fn-sub">只能解释 15% 的薪资差异</div>
          </Reveal>
        </div>
      )}

      {/* Step 1: Random forest R² */}
      {step === 1 && (
        <div className="fn-r2-scene">
          <div className="fn-title">模型结果</div>
          <div className="fn-r2-bars">
            <R2Row label="线性回归" value="0.146" pct={29} accent={false} delay={0} dimmed />
            <R2Row label="随机森林" value="0.310" pct={60} accent delay={300} dimmed={false} />
          </div>
          <div className="fn-stats-row">
            <Reveal delay={700}>
              <span className="fn-stat">MAE <strong>$41,930</strong></span>
            </Reveal>
            <Reveal delay={900}>
              <span className="fn-stat">RMSE <strong>$53,242</strong></span>
            </Reveal>
            <Reveal delay={1100}>
              <span className="fn-stat">CV R² <strong>0.329 ±0.018</strong></span>
            </Reveal>
          </div>
        </div>
      )}

      {/* Step 2: Decision tree comparison */}
      {step === 2 && (
        <div className="fn-r2-scene">
          <div className="fn-title">三种模型对比</div>
          <div className="fn-r2-bars">
            <R2Row label="线性回归" value="0.146" pct={29} accent={false} delay={0} dimmed />
            <R2Row label="决策树" value="0.293" pct={57} accent={false} delay={200} dimmed />
            <R2Row label="随机森林" value="0.310" pct={60} accent delay={400} dimmed={false} />
          </div>
          <Reveal delay={800}>
            <div className="fn-sub">随机森林 = 多棵决策树的平均，效果更好，过拟合风险更低</div>
          </Reveal>
        </div>
      )}

      {/* Step 3: Conclusion */}
      {step === 3 && (
        <div className="fn-conclusion-scene">
          <div className="fn-conclusion-big">
            薪资的决定机制
            <br />
            是<em>非线性</em>的
          </div>
          <Reveal delay={500}>
            <div className="fn-sub">
              各种因素之间有复杂交互，线性模型根本抓不住
            </div>
          </Reveal>
        </div>
      )}

      {/* Step 4: Feature importance — top 3 */}
      {step === 4 && (
        <div className="fn-feature-scene">
          <div className="fn-title">哪些因素最重要？</div>
          <div className="fn-feature-bars">
            <FeatureRow label="公司所在地" pct="30.9%" w={77} delay={200} dimmed={false} />
            <FeatureRow label="经验等级" pct="30.6%" w={76} delay={500} dimmed={false} />
            <FeatureRow label="职位类别" pct="26.6%" w={66} delay={800} dimmed={false} />
          </div>
        </div>
      )}

      {/* Step 5: 88% total */}
      {step === 5 && (
        <div className="fn-feature-scene">
          <div className="fn-title">三者合计贡献</div>
          <Reveal delay={200}>
            <div className="fn-88-badge glow-pulse">88%</div>
          </Reveal>
          <div className="fn-feature-bars">
            <FeatureRow label="雇佣类型" pct="0.4%" w={1} delay={600} dimmed />
            <FeatureRow label="公司规模" pct="2.9%" w={7} delay={800} dimmed />
          </div>
        </div>
      )}

      {/* Step 6: Linear regression coefficients — positive */}
      {step === 6 && (
        <div className="fn-coef-scene">
          <div className="fn-title">线性回归系数验证</div>
          <div className="fn-coef-bars">
            <CoefRow label="经验等级" value="+17,367" w={85} positive delay={200} dimmed={false} />
            <CoefRow label="公司所在地" value="+15,268" w={75} positive delay={400} dimmed={false} />
            <CoefRow label="远程办公比例" value="−695" w={8} positive={false} delay={600} dimmed />
            <CoefRow label="公司规模" value="−464" w={5} positive={false} delay={600} dimmed />
          </div>
        </div>
      )}

      {/* Step 7: Negative coefficients */}
      {step === 7 && (
        <div className="fn-coef-scene">
          <div className="fn-title">微弱负效应</div>
          <div className="fn-coef-bars">
            <CoefRow label="经验等级" value="+17,367" w={85} positive delay={0} dimmed />
            <CoefRow label="公司所在地" value="+15,268" w={75} positive delay={0} dimmed />
            <CoefRow label="远程办公比例" value="−695" w={20} positive={false} delay={200} dimmed={false} />
            <CoefRow label="公司规模" value="−464" w={14} positive={false} delay={400} dimmed={false} />
          </div>
          <Reveal delay={700}>
            <div className="fn-sub">远程办公和公司规模对薪资影响很小</div>
          </Reveal>
        </div>
      )}

      {/* Step 8: Salary gap by job */}
      {step === 8 && (
        <div className="fn-gap-scene">
          <div className="fn-title">岗位薪资差距</div>
          <div className="fn-gap-pair">
            <Reveal delay={200}>
              <div className="fn-gap-item">
                <span className="fn-gap-label">数据工程师</span>
                <span className="fn-gap-number">14.5<span className="fn-gap-unit">万</span></span>
              </div>
            </Reveal>
            <span className="fn-gap-vs">vs</span>
            <Reveal delay={500}>
              <div className="fn-gap-item">
                <span className="fn-gap-label">数据分析师</span>
                <span className="fn-gap-number">10.2<span className="fn-gap-unit">万</span></span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={800}>
            <div className="fn-gap-diff">差 4.3 万</div>
          </Reveal>
        </div>
      )}

      {/* Step 9: Salary gap by experience */}
      {step === 9 && (
        <div className="fn-gap-scene">
          <div className="fn-title">经验等级薪资差距</div>
          <div className="fn-gap-pair">
            <Reveal delay={200}>
              <div className="fn-gap-item">
                <span className="fn-gap-label">入门级</span>
                <span className="fn-gap-number">9.4<span className="fn-gap-unit">万</span></span>
              </div>
            </Reveal>
            <span className="fn-gap-vs">vs</span>
            <Reveal delay={500}>
              <div className="fn-gap-item">
                <span className="fn-gap-label">高管级</span>
                <span className="fn-gap-number">19<span className="fn-gap-unit">万</span></span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={800}>
            <div className="fn-gap-diff">整整 2 倍</div>
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

function R2Row({ label, value, pct, accent, delay, dimmed }: { label: string; value: string; pct: number; accent: boolean; delay: number; dimmed: boolean }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div className={`fn-r2-row ${v ? "visible" : ""} ${dimmed ? "dimmed" : ""} ${accent ? "highlight" : ""}`}>
      <span className="fn-r2-label">{label}</span>
      <div className="fn-r2-track">
        <div className={`fn-r2-fill ${v ? "visible" : ""} ${accent ? "bar-shimmer" : ""}`} style={{ "--w": `${pct}%`, position: "relative" } as React.CSSProperties} />
      </div>
      <span className={`fn-r2-val ${v ? "visible" : ""} ${accent ? "accent" : ""}`}>R²={value}</span>
    </div>
  );
}

function FeatureRow({ label, pct, w, delay, dimmed }: { label: string; pct: string; w: number; delay: number; dimmed: boolean }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div className={`fn-feature-row ${v ? "visible" : ""} ${dimmed ? "dimmed" : ""}`}>
      <span className="fn-feature-label">{label}</span>
      <div className="fn-feature-track">
        <div className={`fn-feature-fill ${v ? "visible" : ""}`} style={{ "--w": `${w}%` } as React.CSSProperties} />
      </div>
      <span className={`fn-feature-pct ${v ? "visible" : ""}`}>{pct}</span>
    </div>
  );
}

function CoefRow({ label, value, w, positive, delay, dimmed }: { label: string; value: string; w: number; positive: boolean; delay: number; dimmed: boolean }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div className={`fn-coef-row ${v ? "visible" : ""} ${dimmed ? "dimmed" : ""}`}>
      <span className="fn-coef-label">{label}</span>
      <div className={`fn-coef-bar ${positive ? "positive" : "negative"} ${v ? "visible" : ""}`} style={{ "--w": `${w}%` } as React.CSSProperties} />
      <span className={`fn-coef-val ${v ? "visible" : ""}`}>{value}</span>
    </div>
  );
}

import { useEffect, useState } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./Hook.css";

/**
 * Chapter 1: hook — 薪资差一倍，到底差在哪
 *
 * 7 steps (0..6), driven by global step counter.
 * Uses indigo-porcelain tokens. CSS prefix: .hk-
 */
export default function Hook({ step }: ChapterStepProps) {
  // Force re-render for CSS transitions when step changes
  const [, setTick] = useState(0);
  useEffect(() => {
    setTick((t) => t + 1);
  }, [step]);

  return (
    <div className="hk-scene scene-enter">
      {/* Background image */}
      <div className="bg-image" style={{ backgroundImage: "url(/images/bg-city.jpg)" }} />
      {/* Background decorations */}
      <div className="deco-grid" />
      <div className="deco-side-bar" />
      <div className="deco-bracket top-left" />
      <div className="deco-bracket bottom-right" />
      <div className="deco-watermark" style={{ right: "-40px", top: "80px" }}>2×</div>

      {/* Step 0: Salary hero — entry vs executive */}
      {step === 0 && (
        <div className="hk-salary-hero">
          <div className="hk-salary-row">
            <div className="hk-salary-item">
              <span className="hk-salary-label">入门级</span>
              <span className="hk-salary-number glow-pulse">
                9.4<span className="hk-salary-unit">万</span>
              </span>
            </div>
            <span className="hk-vs">vs</span>
            <div className="hk-salary-item">
              <span className="hk-salary-label">高管级</span>
              <span className="hk-salary-number glow-pulse">
                19<span className="hk-salary-unit">万</span>
              </span>
            </div>
          </div>
          <Multiplier delay={600} />
        </div>
      )}

      {/* Step 1: Suspense question */}
      {step === 1 && (
        <div className="hk-question-scene">
          <div className="hk-question">
            你以为决定薪资的
            <br />
            就是<em>"经验多不多"</em>？
          </div>
          <DelayedReveal delay={800}>
            <div className="hk-answer">没那么简单。</div>
          </DelayedReveal>
        </div>
      )}

      {/* Step 2: Dataset stats */}
      {step === 2 && (
        <div className="hk-stats-scene">
          <div className="hk-stats-title">我手上有一份数据集</div>
          <div className="hk-stats-grid">
            <StatCard number="16,534" label="条薪资记录" delay={200} />
            <StatCard number="82" label="个国家" delay={500} />
            <StatCard number="5" label="年跨度 (2020–2024)" delay={800} />
          </div>
        </div>
      )}

      {/* Step 3: Activity bar — 88% recent */}
      {step === 3 && (
        <div className="hk-activity-scene">
          <div className="hk-activity-title">最近两年的记录占比</div>
          <div className="hk-activity-bar-wrap">
            <div className="hk-activity-bar-label">
              <span>2020–2022</span>
              <span>2023–2024</span>
            </div>
            <div className="hk-activity-bar-track">
              <ActivityFill />
            </div>
          </div>
          <ActivityPercent />
        </div>
      )}

      {/* Step 4: Pain point 1 */}
      {step === 4 && (
        <div className="hk-pain-scene">
          <div className="hk-pain-title">传统定薪的问题</div>
          <div className="hk-pain-cards">
            <PainCard
              icon="01"
              text="经验判断太主观。同一个岗位，不同管理者给的预期可能差很远。"
              delay={200}
              active
            />
            <PainCard
              icon="02"
              text="行业报告更新慢，市场变化快，等报告出来数据早过时了。"
              delay={200}
              active={false}
            />
            <PainCard
              icon="03"
              text="远程办公、地域差异、公司规模，传统方法根本顾不过来。"
              delay={200}
              active={false}
            />
          </div>
        </div>
      )}

      {/* Step 5: Pain points 2+3 light up */}
      {step === 5 && (
        <div className="hk-pain-scene">
          <div className="hk-pain-title">传统定薪的问题</div>
          <div className="hk-pain-cards">
            <PainCard
              icon="01"
              text="经验判断太主观。同一个岗位，不同管理者给的预期可能差很远。"
              delay={0}
              active={false}
            />
            <PainCard
              icon="02"
              text="行业报告更新慢，市场变化快，等报告出来数据早过时了。"
              delay={200}
              active
            />
            <PainCard
              icon="03"
              text="远程办公、地域差异、公司规模，传统方法根本顾不过来。"
              delay={400}
              active
            />
          </div>
        </div>
      )}

      {/* Step 6: Transition — data-driven */}
      {step === 6 && (
        <div className="hk-transition-scene">
          <div className="hk-transition-text">
            用数据替代直觉
            <br />
            用模型辅助决策
          </div>
          <DelayedReveal delay={600}>
            <div className="hk-transition-sub">
              系统收集行业薪资数据，用回归模型量化每个因素的影响
            </div>
          </DelayedReveal>
        </div>
      )}
    </div>
  );
}

/* ── Helper components ── */

function Multiplier({ delay }: { delay: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className={`hk-multiplier ${visible ? "visible" : ""}`}>2×</div>
  );
}

function DelayedReveal({
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
    <div className={visible ? "visible" : ""} style={{ transition: "all 0.6s ease" }}>
      {children}
    </div>
  );
}

function StatCard({
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
    <div className={`hk-stat-card ${visible ? "visible" : ""}`}>
      <span className="hk-stat-number">{number}</span>
      <span className="hk-stat-label">{label}</span>
    </div>
  );
}

function ActivityFill() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`hk-activity-bar-fill ${visible ? "visible" : ""}`} />
  );
}

function ActivityPercent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`hk-activity-percent ${visible ? "visible" : ""}`}>
      88%+
    </div>
  );
}

function PainCard({
  icon,
  text,
  delay,
  active,
}: {
  icon: string;
  text: string;
  delay: number;
  active: boolean;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={`hk-pain-card ${visible ? "visible" : ""} ${!active ? "dimmed" : ""}`}
    >
      <span className="hk-pain-icon">{icon}</span>
      <span className="hk-pain-text">{text}</span>
    </div>
  );
}

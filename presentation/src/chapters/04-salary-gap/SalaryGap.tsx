import { useEffect, useState } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./SalaryGap.css";

/** Chapter 4: salary-gap · 8 steps (0..7). CSS prefix: .sg- */
export default function SalaryGap({ step }: ChapterStepProps) {
  return (
    <div className="sg-scene">
      {/* Step 0: Job gap — DE vs DA */}
      {step === 0 && (
        <>
          <div className="sg-title">岗位薪资差距</div>
          <div className="sg-pair">
            <R delay={200}><div className="sg-item"><span className="sg-label">数据工程师</span><span className="sg-number">14.5<span className="sg-unit">万</span></span></div></R>
            <span className="sg-vs">vs</span>
            <R delay={500}><div className="sg-item"><span className="sg-label">数据分析师</span><span className="sg-number">10.2<span className="sg-unit">万</span></span></div></R>
          </div>
          <R delay={800}><div className="sg-diff">差 4.3 万</div></R>
        </>
      )}
      {/* Step 1: Note */}
      {step === 1 && (
        <R delay={0}><div className="sg-note">"数据岗统一薪酬"根本行不通</div></R>
      )}
      {/* Step 2: Experience gap */}
      {step === 2 && (
        <>
          <div className="sg-title">经验等级薪资差距</div>
          <div className="sg-pair">
            <R delay={200}><div className="sg-item"><span className="sg-label">入门级</span><span className="sg-number">9.4<span className="sg-unit">万</span></span></div></R>
            <span className="sg-vs">vs</span>
            <R delay={500}><div className="sg-item"><span className="sg-label">高管级</span><span className="sg-number">19<span className="sg-unit">万</span></span></div></R>
          </div>
          <R delay={800}><div className="sg-diff">整整 2 倍</div></R>
        </>
      )}
      {/* Step 3: Note */}
      {step === 3 && (
        <R delay={0}><div className="sg-note">企业需要建立合理的薪资梯度</div></R>
      )}
      {/* Step 4: Remote gap */}
      {step === 4 && (
        <>
          <div className="sg-title">远程办公影响</div>
          <div className="sg-pair">
            <R delay={200}><div className="sg-item"><span className="sg-label">完全远程</span><span className="sg-number">14.3<span className="sg-unit">万</span></span></div></R>
            <span className="sg-vs">vs</span>
            <R delay={500}><div className="sg-item"><span className="sg-label">现场办公</span><span className="sg-number">14.7<span className="sg-unit">万</span></span></div></R>
          </div>
          <R delay={800}><div className="sg-diff">差距 2.8%</div></R>
        </>
      )}
      {/* Step 5: Note */}
      {step === 5 && (
        <R delay={0}><div className="sg-note">定远程薪酬策略时，这个数字得考虑进去</div></R>
      )}
      {/* Step 6: Company size */}
      {step === 6 && (
        <>
          <div className="sg-title">公司规模薪资对比</div>
          <div className="sg-triple">
            <R delay={200}><div className="sg-item"><span className="sg-label">中型企业</span><span className="sg-number sg-highlight">14.7<span className="sg-unit">万</span></span></div></R>
            <R delay={500}><div className="sg-item"><span className="sg-label">大型企业</span><span className="sg-number">12.6<span className="sg-unit">万</span></span></div></R>
            <R delay={800}><div className="sg-item"><span className="sg-label">小型企业</span><span className="sg-number">9.2<span className="sg-unit">万</span></span></div></R>
          </div>
          <R delay={1100}><div className="sg-sub">中型公司在抢人这件事上最舍得花钱</div></R>
        </>
      )}
      {/* Step 7: Note */}
      {step === 7 && (
        <R delay={0}><div className="sg-note">在 AI 领域，中小企业薪资并不处于绝对劣势</div></R>
      )}
    </div>
  );
}

function R({ delay, children }: { delay: number; children: React.ReactNode }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(16px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}>{children}</div>;
}

import { useEffect, useState } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./Value.css";

/** Chapter 5: value · 10 steps (0..9). CSS prefix: .vl- */
export default function Value({ step }: ChapterStepProps) {
  return (
    <div className="vl-scene scene-enter">
      {/* Step 0: Efficiency */}
      {step === 0 && (
        <>
          <div className="vl-title">管理效率提升</div>
          <R delay={200}><div className="vl-text">传统薪酬调研，HR 团队要花好几周收集行业报告。数据驱动方法能自动化采集和预测。从"了解市场"到"拿到建议"的周期大幅缩短。</div></R>
        </>
      )}
      {/* Step 1: Cost */}
      {step === 1 && (
        <>
          <div className="vl-title">成本优化</div>
          <R delay={200}><div className="vl-text">薪酬定高了，人力成本白白浪费。定低了，人走了再招，重置成本更高。模型给的预测区间能帮你在"有竞争力"和"可控成本"之间找到平衡。</div></R>
        </>
      )}
      {/* Step 2: Info transparency */}
      {step === 2 && (
        <>
          <div className="vl-title">三个层面的战略价值</div>
          <div className="vl-cards">
            <R delay={200}><div className="vl-card"><span className="vl-card-num">01</span><span className="vl-card-title">信息透明化</span><span className="vl-card-desc">模型把每个因素的权重算得清清楚楚。HR 不用再拍脑袋，能看到哪些因素真正影响薪资。</span></div></R>
            <div className="vl-card" style={{ opacity: 0.3 }}><span className="vl-card-num">02</span><span className="vl-card-title">决策科学化</span><span className="vl-card-desc">用模型预测薪资区间</span></div>
            <div className="vl-card" style={{ opacity: 0.3 }}><span className="vl-card-num">03</span><span className="vl-card-title">策略动态化</span><span className="vl-card-desc">模型定期更新</span></div>
          </div>
        </>
      )}
      {/* Step 3: Decision science */}
      {step === 3 && (
        <>
          <div className="vl-title">三个层面的战略价值</div>
          <div className="vl-cards">
            <div className="vl-card" style={{ opacity: 0.3 }}><span className="vl-card-num">01</span><span className="vl-card-title">信息透明化</span><span className="vl-card-desc">权重清晰</span></div>
            <R delay={200}><div className="vl-card"><span className="vl-card-num">02</span><span className="vl-card-title">决策科学化</span><span className="vl-card-desc">从"大概值 15 万"升级到"基于行业数据，预期区间 12.5 万到 16.8 万"。</span></div></R>
            <div className="vl-card" style={{ opacity: 0.3 }}><span className="vl-card-num">03</span><span className="vl-card-title">策略动态化</span><span className="vl-card-desc">模型定期更新</span></div>
          </div>
        </>
      )}
      {/* Step 4: Counter-intuitive */}
      {step === 4 && (
        <R delay={0}><div className="vl-big">数据驱动的优势在于<br />能捕捉那些<em>反直觉</em>的模式</div></R>
      )}
      {/* Step 5: Dynamic strategy */}
      {step === 5 && (
        <>
          <div className="vl-title">三个层面的战略价值</div>
          <div className="vl-cards">
            <div className="vl-card" style={{ opacity: 0.3 }}><span className="vl-card-num">01</span><span className="vl-card-title">信息透明化</span></div>
            <div className="vl-card" style={{ opacity: 0.3 }}><span className="vl-card-num">02</span><span className="vl-card-title">决策科学化</span></div>
            <R delay={200}><div className="vl-card"><span className="vl-card-num">03</span><span className="vl-card-title">策略动态化</span><span className="vl-card-desc">市场数据在变，模型可以定期更新。薪酬策略能跟着市场走，实现数据采集、模型更新、决策优化的闭环。</span></div></R>
          </div>
        </>
      )}
      {/* Step 6: Info source comparison */}
      {step === 6 && (
        <>
          <div className="vl-title">传统 vs 数据驱动</div>
          <div className="vl-compare">
            <R delay={200}><div className="vl-compare-col">
              <span className="vl-compare-label">信息来源</span>
              <div className="vl-compare-item">个人经验、零散信息<br />样本小、偏差大</div>
              <div className="vl-compare-item active">系统化大规模数据<br />结论可复现</div>
            </div></R>
          </div>
          <R delay={600}><div className="vl-sub">9,909 条样本覆盖 82 个国家，远非个人经验能比</div></R>
        </>
      )}
      {/* Step 7: Decision logic */}
      {step === 7 && (
        <>
          <div className="vl-title">决策逻辑对比</div>
          <div className="vl-compare">
            <R delay={200}><div className="vl-compare-col">
              <span className="vl-compare-label">传统</span>
              <div className="vl-compare-item">经验规则 → 模糊判断 → 主观拍板</div>
            </div></R>
            <R delay={500}><div className="vl-compare-col">
              <span className="vl-compare-label">数据驱动</span>
              <div className="vl-compare-item active">数据 → 模型 → 量化证据 → 辅助决策</div>
            </div></R>
          </div>
        </>
      )}
      {/* Step 8: Culture */}
      {step === 8 && (
        <>
          <div className="vl-title">组织文化差异</div>
          <div className="vl-compare">
            <R delay={200}><div className="vl-compare-col">
              <span className="vl-compare-label">传统</span>
              <div className="vl-compare-item">"权威说了算"<br />内部公平性难保证</div>
            </div></R>
            <R delay={500}><div className="vl-compare-col">
              <span className="vl-compare-label">数据驱动</span>
              <div className="vl-compare-item active">"让数据说话"<br />减少人为偏见和权力博弈</div>
            </div></R>
          </div>
        </>
      )}
      {/* Step 9: Core insight */}
      {step === 9 && (
        <R delay={0}><div className="vl-big">数据不再是辅助参考<br />而是决策的<em>起点</em></div></R>
      )}
    </div>
  );
}

function R({ delay, children }: { delay: number; children: React.ReactNode }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(16px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}>{children}</div>;
}

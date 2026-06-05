import type { ChapterDef } from "./types";
import HookChapter from "../chapters/01-hook/Hook";
import { narrations as hookNarrations } from "../chapters/01-hook/narrations";
import DataModelChapter from "../chapters/02-data-model/DataModel";
import { narrations as dataModelNarrations } from "../chapters/02-data-model/narrations";
import FindingsChapter from "../chapters/03-findings/Findings";
import { narrations as findingsNarrations } from "../chapters/03-findings/narrations";
import SalaryGapChapter from "../chapters/04-salary-gap/SalaryGap";
import { narrations as salaryGapNarrations } from "../chapters/04-salary-gap/narrations";
import ValueChapter from "../chapters/05-value/Value";
import { narrations as valueNarrations } from "../chapters/05-value/narrations";
import ReflectionChapter from "../chapters/06-reflection/Reflection";
import { narrations as reflectionNarrations } from "../chapters/06-reflection/narrations";

export const CHAPTERS: ChapterDef[] = [
  {
    id: "hook",
    title: "薪资差一倍，到底差在哪",
    narrations: hookNarrations,
    Component: HookChapter,
  },
  {
    id: "data-model",
    title: "清洗数据，选两种模型",
    narrations: dataModelNarrations,
    Component: DataModelChapter,
  },
  {
    id: "findings",
    title: "三大因素决定薪资",
    narrations: findingsNarrations,
    Component: FindingsChapter,
  },
  {
    id: "salary-gap",
    title: "岗位、经验、远程、规模的具体差距",
    narrations: salaryGapNarrations,
    Component: SalaryGapChapter,
  },
  {
    id: "value",
    title: "数据驱动管理的三个层面价值",
    narrations: valueNarrations,
    Component: ValueChapter,
  },
  {
    id: "reflection",
    title: "局限、风险与未来",
    narrations: reflectionNarrations,
    Component: ReflectionChapter,
  },
];

"use client";

import { Cpu, DollarSign, Gauge, Globe2, Leaf, ShieldCheck, Timer, Zap } from "lucide-react";
import { REGIONS, SENSITIVITY, WORKLOAD_TYPES } from "@/lib/compute-data";
import type { WorkloadInput } from "@/lib/routing";

export default function WorkloadForm({
  value,
  onChange,
  onRun,
}: {
  value: WorkloadInput;
  onChange: (next: WorkloadInput) => void;
  onRun: () => void;
}) {
  function update<K extends keyof WorkloadInput>(key: K, v: WorkloadInput[K]) {
    onChange({ ...value, [key]: v });
  }

  return (
    <div className="cf-shell p-5 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Cpu size={16} className="text-[#5b8cff]" />
          <h3 className="text-base font-semibold text-white">Workload definition</h3>
        </div>
        <span className="text-[11px] uppercase tracking-[0.22em] text-white/45">
          Local routing engine
        </span>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Field label="Workload name" icon={<Cpu size={14} />}>
          <input
            value={value.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="e.g. Frontier-7B finetune"
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#5b8cff]/60 focus:outline-none"
          />
        </Field>

        <Field label="Workload type" icon={<Zap size={14} />}>
          <select
            value={value.workloadType}
            onChange={(e) => update("workloadType", e.target.value as WorkloadInput["workloadType"])}
            className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white focus:border-[#5b8cff]/60 focus:outline-none"
          >
            {WORKLOAD_TYPES.map((t) => (
              <option key={t.id} value={t.id} className="bg-[#070b18]">
                {t.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Monthly budget" icon={<DollarSign size={14} />}>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={2000}
              max={400_000}
              step={1000}
              value={value.monthlyBudget}
              onChange={(e) => update("monthlyBudget", Number(e.target.value))}
              className="cf-range flex-1"
            />
            <span className="w-24 text-right font-mono text-sm text-white">
              ${value.monthlyBudget.toLocaleString()}
            </span>
          </div>
        </Field>

        <Field label="Region preference" icon={<Globe2 size={14} />}>
          <select
            value={value.region}
            onChange={(e) => update("region", e.target.value as WorkloadInput["region"])}
            className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white focus:border-[#5b8cff]/60 focus:outline-none"
          >
            {REGIONS.map((r) => (
              <option key={r.id} value={r.id} className="bg-[#070b18]">
                {r.label}
              </option>
            ))}
          </select>
        </Field>

        <Slider
          label="Latency priority"
          icon={<Timer size={14} />}
          value={value.latencyPriority}
          onChange={(v) => update("latencyPriority", v)}
        />
        <Slider
          label="Energy / clean-power priority"
          icon={<Leaf size={14} />}
          value={value.energyPriority}
          onChange={(v) => update("energyPriority", v)}
        />
        <Slider
          label="Reliability priority"
          icon={<Gauge size={14} />}
          value={value.reliabilityPriority}
          onChange={(v) => update("reliabilityPriority", v)}
        />
        <Slider
          label="Urgency"
          icon={<Zap size={14} />}
          value={value.urgency}
          onChange={(v) => update("urgency", v)}
        />

        <Field label="Data sensitivity" icon={<ShieldCheck size={14} />} fullWidth>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {SENSITIVITY.map((s) => {
              const active = value.sensitivity === s.id;
              return (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => update("sensitivity", s.id)}
                  className={`rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                    active
                      ? "border-[#5b8cff]/60 bg-[#5b8cff]/15 text-white"
                      : "border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/[0.07]"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                    Tier {s.tier}
                  </div>
                  <div className="mt-1 text-sm font-medium">{s.label}</div>
                </button>
              );
            })}
          </div>
        </Field>
      </div>

      <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/45">
          Scoring runs locally. No paid APIs, no telemetry, no surprises.
        </p>
        <button
          onClick={onRun}
          className="btn btn-primary justify-center"
        >
          Run routing engine
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  icon,
  children,
  fullWidth,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <label className={`block ${fullWidth ? "md:col-span-2" : ""}`}>
      <span className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
        {icon}
        {label}
      </span>
      {children}
    </label>
  );
}

function Slider({
  label,
  icon,
  value,
  onChange,
}: {
  label: string;
  icon: React.ReactNode;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <Field label={label} icon={icon}>
      <div className="flex items-center gap-3">
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="cf-range flex-1"
        />
        <span className="w-12 text-right font-mono text-sm text-white">{value}</span>
      </div>
    </Field>
  );
}

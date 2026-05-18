"use client";

import { useMemo, useState } from "react";
import WorkloadForm from "@/components/product/WorkloadForm";
import RoutingReport from "@/components/product/RoutingReport";
import { defaultWorkload, routeWorkload, type WorkloadInput } from "@/lib/routing";

export default function ComputeRouter({
  compact = false,
  initial,
}: {
  compact?: boolean;
  initial?: Partial<WorkloadInput>;
}) {
  const seed = useMemo(() => ({ ...defaultWorkload(), ...(initial ?? {}) }), [initial]);
  const [workload, setWorkload] = useState<WorkloadInput>(seed);
  const [pinned, setPinned] = useState<WorkloadInput | null>(seed);

  const report = useMemo(() => routeWorkload(pinned ?? workload), [pinned, workload]);

  return (
    <div className={compact ? "grid gap-6 lg:grid-cols-[0.95fr_1.05fr]" : "grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"}>
      <WorkloadForm
        value={workload}
        onChange={setWorkload}
        onRun={() => setPinned({ ...workload })}
      />
      <RoutingReport report={report} />
    </div>
  );
}

"use client";

import { Progress } from "@/components/progress";
import { useEffect, useState } from "react";

type Props = {
  percentageStorageUsed: number;
};

export function StorageBar({ percentageStorageUsed }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentageStorageUsed), 500);
    return () => clearTimeout(timer);
  }, [percentageStorageUsed]);

  return <Progress value={progress} className="h-1 rounded-full bg-cyan-200" />;
}

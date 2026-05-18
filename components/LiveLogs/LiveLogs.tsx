const logs = [
  "socket connected",
  "telemetry synchronized",
  "memory pressure normal",
  "edge stream active"
];

export default function LiveLogs() {

  return (

    <div className="bg-zinc-950 border border-cyan-900 rounded p-4 h-64 overflow-auto">

      <div className="text-cyan-400 mb-4">
        LIVE LOGS
      </div>

      <div className="flex flex-col gap-2 text-xs text-zinc-400">

        {logs.map((log, i) => (
          <div key={i}>
            {log}
          </div>
        ))}

      </div>

    </div>
  );
}

const events = [
  "[INFO] NODE-01 ONLINE",
  "[WARN] CPU HIGH",
  "[INFO] STREAM ACTIVE",
  "[AI] anomaly pattern detected"
];

export default function EventStream() {

  return (

    <div className="bg-zinc-950 border border-cyan-900 rounded p-4 h-64 overflow-auto">

      <div className="text-cyan-400 mb-4">
        EVENT STREAM
      </div>

      <div className="flex flex-col gap-2 text-sm">

        {events.map((e, i) => (
          <div key={i}>
            {e}
          </div>
        ))}

      </div>

    </div>
  );
}

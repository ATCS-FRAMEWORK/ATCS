const items = [
  "CORE",
  "TELEMETRY",
  "NODES",
  "NETWORK",
  "ALERTS",
  "AI STREAM"
];

export default function Sidebar() {

  return (

    <div className="w-64 bg-zinc-950 border-r border-cyan-900 p-4">

      <div className="text-cyan-400 text-sm mb-6">
        NAVIGATION
      </div>

      <div className="flex flex-col gap-3">

        {items.map((item) => (

          <div
            key={item}
            className="p-3 border border-cyan-900 rounded hover:bg-cyan-950/20 cursor-pointer"
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  );
}

export default function Header() {

  return (
    <div className="w-full border-b border-cyan-900 bg-black p-4">

      <div className="flex justify-between items-center">

        <div>
          <div className="text-2xl text-cyan-400 font-bold">
            ATCS OPERATIONAL CORE
          </div>

          <div className="text-xs text-zinc-500 mt-1">
            EDGE INTELLIGENCE PLATFORM
          </div>
        </div>

        <div className="flex gap-6 text-sm">

          <div>
            STATUS:
            <span className="text-green-400 ml-2">
              ONLINE
            </span>
          </div>

          <div>
            NODES:
            <span className="text-cyan-400 ml-2">
              12
            </span>
          </div>

          <div>
            ALERTS:
            <span className="text-red-400 ml-2">
              2
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

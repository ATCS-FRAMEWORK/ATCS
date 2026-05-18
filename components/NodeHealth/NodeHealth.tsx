export default function NodeHealth() {

  return (

    <div className="bg-zinc-950 border border-cyan-900 rounded p-4">

      <div className="text-cyan-400 mb-4">
        NODE HEALTH
      </div>

      <div className="grid grid-cols-4 gap-4">

        <div className="border border-green-700 p-3 rounded">
          NODE-01
        </div>

        <div className="border border-green-700 p-3 rounded">
          NODE-02
        </div>

        <div className="border border-yellow-700 p-3 rounded">
          NODE-03
        </div>

        <div className="border border-red-700 p-3 rounded">
          NODE-04
        </div>

      </div>

    </div>
  );
}

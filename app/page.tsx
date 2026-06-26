import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import EventStream from "@/components/EventStream/EventStream";
import LiveLogs from "@/components/LiveLogs/LiveLogs";
import NodeHealth from "@/components/NodeHealth/NodeHealth";
import FooterAI from "@/components/FooterAI/FooterAI";

export default function Home() {

  return (

    <main className="bg-black text-cyan-400 min-h-screen">

      <Header />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-6">

          <div className="grid grid-cols-2 gap-6">

            <EventStream />

            <LiveLogs />

          </div>

          <div className="mt-6">

            <NodeHealth />

          </div>

        </div>

      </div>

      <FooterAI />

    </main>
  );
}

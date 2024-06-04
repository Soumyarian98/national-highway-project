import { Card } from "@/components/ui/card";

import DashboardLayout from "@/layout/dashboard-layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <DashboardLayout contained>
      <div className="flex flex-col justify-center items-center max-w-[900px] mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <Link to="/phase" className="block col-span-6">
            <Card className="w-full overflow-hidden relative cursor-pointer">
              <p className="font-bold text-white text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Phase 1
              </p>
              <img alt="Phase 1 Image" src="/google_earth_left.png" />
            </Card>
          </Link>
          <Card className="block col-span-6 overflow-hidden relative cursor-not-allowed">
            <p className="font-bold text-white text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Phase 2
            </p>
            <img alt="Phase 2 Image" src="/google_earth_right.png" />
          </Card>
        </div>
        <div className="flex flex-col gap-8 mt-12">
          <div className="space-y-2">
            <h2 className="text-lg capitalize font-bold">Introduction</h2>
            <p className="leading-relaxed">
              The Government of India has taken up development of Economic
              Corridors, Inter Corridors, Feeder Corridors and National
              Corridors to improve the efficiency of Freight Movements in India
              under Bharatmala Pariyojana. National Highway Authority of India
              has been appointed as Nodal Agency for proposed development of
              Pathalgaon – Kunkuri CG/JH Border section of which is a part
              Bharatmala Pariyojana, (Lot-5/Package-7).
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg capitalize font-bold">
              Description of the project
            </h2>
            <p className="leading-relaxed">
              The proposed highway starts from village Turua Ama near Pathalgaon
              22°33'42.96"N 83°33'52.61"E and ends at CG-JH border near Shankh
              river 22°56'24.10"N 84°23'52.45"E in Jashpur district in the state
              of Chhattisgarh. Scope of present report is confined to the
              package 7 (Ch.0+000toCh.104.250+000) This is a green field
              alignment, and is proposed for 4-Lane .The proposed length of
              Project Highway is about 104.250 kms. The road passes through
              approx. 100 villages of Jashpur district through important
              villages/towns like Pathalgaon, Kansabel, Kunkuri, Duldula,
              Jashpur e.t.c
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg capitalize font-bold">
              Benefits of project
            </h2>
            <p className="leading-relaxed">
              The benefits of the Project are multi-fold. It will substantially
              reduce the travel time between Pathalgaon-Kunkuri in Jhaspur
              District and the other remote areas falling on the alignment. In
              addition to the improved connectivity, it will also provide a
              boost to the economic status of the villages / towns falling in
              the dedicated Project area. The proposed route between
              Pathalgaon-Kunkuri-Jashpur measures about 104 km which shall be
              reduced the time travel to about 2.5 hrs. as compared to the
              existing route NH 43.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;

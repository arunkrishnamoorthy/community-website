"use client";
// import { Dropdown } from 'primereact/dropdown';
import LandingNavBar from "@/components/landing-navbar";
import DropDownTracks from "./DropDown";
import EventHeader from "@/components/event-header-section";
import EventHero from "@/components/event-hero";
import Footer from "@/components/footer";
import TimelineComponent from "@/components/timeline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Bengaluru from "@/public/bengaluru_city.png";
import { useRouter } from "next/navigation";
import Sessions from "@/components/sessions";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import AcloudGuruji from "@/public/sponsers/acloudguruji.png";
import SAPConcur from "@/public/sponsers/SAP_Concur_R_grad_blk.jpg";
import archtech from "@/public/sponsers/archtech.png";
import primus from "@/public/sponsers/primus.png";
import mindset from "@/public/sponsers/mindset.png";
import rojo_logo from "@/public/sponsers/Rojo_logo.png";
import sappress from "@/public/sponsers/sap-press.jpg";
import aws from "@/public/sponsers/icons8-aws-logo-384.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SessionModal from "@/components/modal/SessionModal";
import { useSession } from "@/hooks/use-session-modal";
import deloitte from "@/public/sponsers/deloitte.png";
import ChecklistModal from "@/components/modal/ChecklistModal";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SwitchUI from "@/components/ui/switch";
import AgendaUI from "@/components/ui/agenda";
import ListBox from "@/components/ui/listbox";
import { usechecklist } from "@/hooks/use-checklist-modal";

type eventdata = {
  id: string;
  title: string;
  register: string;
  eventCompleted: boolean;
  linktoeventfeedback: string;
};

interface listdataPropos {
  key: string;
  value: string;
}

type event = eventdata | null;

const Home = () => {

  const { onOpen: onOpenChecklist } = usechecklist();

  const router = useRouter();
  const [data, setData] = useState<event>(null);

  const [isMounted, setIsMounted] = useState(false);

  // const [aiJourneySelected, aiJourneySetEnabled] = useState(false);
  // const [aiJouryneySelectedValue, aiJourneySelectedFn] = useState(null);

  // let aijourneys: listdataPropos[] = [
  //   { key: "dev", value:"Developer Journey"},
  //   { key: "arch", value:"Architects Journey"},
  //   { key: "consult", value:"Consultants Journey" },
  //   { key: "admin", value:"Consultants Journey"  },
  //   { key: "pm", value:"Consultants Journey"  },
  // ];

  let aijourneys: string[] = [
    "Developer Journey",
    "Architects Journey",
    "Consultants Journey",
    "Consultants Journey",
    "Consultants Journey"
  ];

  useEffect(() => {
    fetch(`/api/events/sap-inside-track-dec-2024`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    setIsMounted(true);
  }, []);


  if (!isMounted) {
    return null;
  }

  return (
    // ffe505
    <div className="h-full">
      {/* <div className="relative"> */}
      <div className="w-full bg-gradient-to-r ">
        <div className="mx-auto max-w-screen-xl">
          <LandingNavBar />
        </div>
      </div>
      {/* <div className="top-6 w-full  bg-gradient-to-r from-[#ffb805] to-[#e1cf2b] "> */}
      <div className="top-6 w-full  bg-gradient-to-r ">
        <div className=" max-w-screen-xl mx-auto bg-[url('/bengaluru_city.png')]">
          <EventHeader
            title={data?.title}
            register={data?.register}
            eventCompleted={data?.eventCompleted}
            linktoeventfeedback={data?.linktoeventfeedback}
          />
        </div>
      </div>

      <AgendaUI />

      <div>
      </div>
      <div>
        <div className="mx-auto max-w-screen-xl">
          <div className="mt-8 text-4xl font-semibold text-sky-900">Sponsors</div>
          <div className="font-light">
            {/* <p className="w-full mb-4 -mt-4 text-center text-base font-semibold uppercase text-gray-400 tracking-wider">
                             Platinum Sponsors
                        </p> */}

            <div className="flex flex-row justify-between p-10">
              

<a
                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                href=""
                target="_blank"
                title="AWS"
              >
                <Image
                  width={175}
                  height={175}
                  src={aws}
                  objectFit="cover"
                  alt="AWS"
                />
              </a>
              <a
                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                href=""
                target="_blank"
                title="rojo_logo"
              >
                <Image
                  width={175}
                  height={175}
                  src={rojo_logo}
                  objectFit="cover"
                  alt="rojo_logo"
                />
              </a>
              <a
                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                href=""
                target="_blank"
                title="mindset"
              >
                <Image
                  width={175}
                  height={175}
                  src={mindset}
                  objectFit="cover"
                  alt="mindset"
                />
              </a>
              <a
                className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                href=""
                target="_blank"
                title="SAP Press"
              >
                <Image
                  width={175}
                  height={175}
                  src={sappress}
                  objectFit="cover"
                  alt="SAP Press"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <div className="bg-gradient-to-r from-[#041b30] to-[#001528]">
        <div className="mx-auto max-w-screen-xl">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;

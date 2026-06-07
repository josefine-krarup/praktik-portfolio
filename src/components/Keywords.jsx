"use client";

import { useState } from "react";
import CountUp from "react-countup";
import Headings from "./Headings";

const Keywords = () => {
  const [done, setDone] = useState(false);

  return (
    <section className="bg-secondary-blue">
      <Headings title="Nøgletal" variant="right" background="white" />

      <div className="block md:grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[1100px] mx-auto pb-20">
        <div className="p-8 text-center">
          <h3 className="text-6xl lg:text-7xl font-extrabold ">
            <CountUp end={3} duration={5} enableScrollSpy scrollSpyOnce />
          </h3>
          <p className="mt-4">Semestre på Multimediedesigner</p>
        </div>

        <div className="p-8 text-center ">
          <h3 className="text-6xl lg:text-7xl font-extrabold">
            <CountUp end={100} duration={5} enableScrollSpy scrollSpyOnce />%
          </h3>
          <p className="mt-4">Dedikeret til læring og udvikling</p>
        </div>

        <div className="p-8 text-center">
          <h3 className="text-6xl lg:text-7xl font-extrabold">{!done ? <CountUp end={100} duration={5} enableScrollSpy scrollSpyOnce onEnd={() => setDone(true)} /> : "∞"}</h3>
          <p className="mt-4">Nysgerrighed</p>
        </div>

        <div className="p-8 text-center">
          <h3 className="text-6xl lg:text-7xl font-extrabold">
            <CountUp end={1} duration={5} enableScrollSpy scrollSpyOnce />
          </h3>
          <p className="mt-4">Praktikplads søges</p>
        </div>
      </div>
    </section>
  );
};

export default Keywords;

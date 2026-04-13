import React from 'react'
import AdvisoryBoard from "@/components/AdvisoryBoard";
import CompanyStatus from "@/components/CompanyStatus";
import Hero from "@/components/Hero";
import Indigenous from "@/components/Indigenous";
import OurMission from "@/components/OurMission";
import RegenerativeFuture from "@/components/RegenerativeFuture";
import SetsUs from "@/components/SetsUs";


function page() {
  return (
      <>
          <Hero />
          <OurMission />
          <Indigenous />
          <CompanyStatus />
          <AdvisoryBoard />
          <SetsUs />
          <RegenerativeFuture />
      </>
  )
}

export default page
import React from "react";
import { SocialCard } from "./social-card";
import { SocialDeets } from "./social-deets";

export function SocialProof() {
  return (
    <div className="items-start flex flex-row justify-evenly mt-[128px]">
      <SocialCard />
      <div className="grid grid-flow-col gap-[28px] grid-rows-2 ">
        <div className="px-2">
          <SocialDeets
            title="URL Shortening"
            description={`Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.`}
          />
        </div>
        <div className="px-2">
          <SocialDeets
            title="Custom URLs"
            description="With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses."
          />
        </div>
        <div className="px-2">
          <SocialDeets
            title="QR Codes"
            description="Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution."
          />
        </div>
        <div className="px-2">
          <SocialDeets
            title="Data Analytics"
            description="Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress."
          />
        </div>
      </div>
    </div>
  );
}

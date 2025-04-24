import React from "react";
import { Separator } from "@/components/ui/separator";
import { PhoneCall } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary-green dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Smart Farm</h2>
            <p className="text-sm">
              Providing fresh, healthy pork with care and sustainability.
            </p>
          </div>

 
  

          {/* <div>
            <h3 className="text-md font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div> */}
        </div>
        <Separator className="my-8 border-white opacity-20" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} smartFarm. All rights reserved.</p>
          <div className="items-center flex gap-2">
          <PhoneCall className="w-6 h-6 animate-bounce"/>
            +250781093895
          </div>
        </div>
      </div>
    </footer>
  );
};

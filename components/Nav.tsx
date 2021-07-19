import * as React from "react";
import { useRouter } from "next/router";
import { requests, IRequestEntity } from "../shared/requests";

type requestTypes = Array<string & IRequestEntity>;

function Nav() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm: space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map<requestTypes>(
          ([key, { title, url }]): React.ComponentProps<any> => (
            <h2
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            >
              {title}
            </h2>
          )
        )}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-12" />
    </nav>
  );
}

export default Nav;

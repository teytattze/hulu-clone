import * as React from "react";

type HeaderItemProps = {
  title: string;
  Icon: React.ComponentProps<any>;
};

function HeaderItem({ title, Icon }: HeaderItemProps) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 tracking-widest group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;

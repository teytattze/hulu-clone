import * as React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { IResponseEntity } from "../shared/response";

type ThumbnailProps = {
  result: IResponseEntity;
};

const Thumbnail = React.forwardRef<HTMLDivElement, ThumbnailProps>(
  ({ result }, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    return (
      <div
        ref={ref}
        className="p-2 group cursor-pointer transform transition duration-200 ease-in sm:hover:scale-105 hover:z-50"
      >
        <Image
          layout="responsive"
          height={1080}
          width={1920}
          objectFit="cover"
          objectPosition="center"
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          alt={result.id}
        />
        <div className="p-2">
          <p className="truncate max-w-md">{result.overview}</p>
          <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold truncate">
            {result.title || result.original_name}
          </h2>
          <p className="flex items-center opacity-0 group-hover:opacity-100 truncate">
            {result.media_type && `${result.media_type} •`}{" "}
            {result.release_date || result.first_air_date} •{" "}
            <ThumbUpIcon className="h-5 mx-2" />
          </p>
        </div>
      </div>
    );
  }
);

export default Thumbnail;

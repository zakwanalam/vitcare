import type { NextConfig } from "next";

/** @type {import ('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
    async redirects(){
      return [
        {
          source:'/',
          destination :'/Home',
          permanent:true
        }
      ]
    }
};

export default nextConfig;

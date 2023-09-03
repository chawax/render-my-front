import Router from "next/router";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
        Router.push('/movies')
    }
  });
}


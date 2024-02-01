import { useState, useEffect } from "react";
import React from "react";
import "./loader.css";
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);

export default function Loader() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter(
        (counter) => (
          counter < 100 ? counter + 1 : clearInterval(count),
          setCounter(100),
          reveal
        )
      );
    }, 25);
  });

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });

    t1.to(".follow", {
      width: "100%",
      duration: 1.2,
      delay: 0.7,
      ease: Expo.easeInOut,
    })
      .to(".bar", {
        opacity: 0,
        duration: 0.3,
      })
      .to(".bar", {
        display: "none",
        duration: 0.3,
      })
      .to(".follow", {
        height: "100%",
        duration: 0.7,
        delay: 0.5,
        ease: Expo.easeInOut,
      });
  };
  return (
    <>
      <Loading >
        <Follow className="follow"></Follow>
        <ProgessBar
          className="bar"
          style={{ width: counter + "%" }}
        ></ProgessBar>
        <Count className="count">{counter}%</Count>
      </Loading>
    </>
  );
}

const Loading = styled.div`
height: 100%;
width: 100%;
background-color: #121212;
display: flex;
justify—content: center;
align—items: center;
position: absolute;
top: 0;
`;

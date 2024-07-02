import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/exercises";

const Generator = () => {
  const [showModal, setShowModal] = useState(false);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");
  function toggleModal() {
    setShowModal(!showModal);
  }
  function updateMuscles(muscleGroup){
    if (muscles.length > 2) return
    if (poison !== "individual "){
      setMuscles([muscleGroup])
      return
    }
    if(muscles.includes(muscleGroup)){
      setMuscles(muscles.filter(val => val !== muscleGroup ))
      return
    }

    setMuscles([...muscles, muscleGroup])
  }
  function Header({ index, title, description }) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-2">
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
            {index}
          </p>
          <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
        </div>
        <p className="text-sm sm:text-base mx-auto">{description}</p>
      </div>
    );
  }
  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["it's", "Fit", "O'Clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setPoison(type);
              }}
              className={
                "bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600" +
                (type === poison ? " border-blue-600" : "border-blue-400 ")
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />

      <div className="bg-slate-950 py-3 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={toggleModal}
          className="relative  flex items-center justify-center"
        >
          <p>Select muscle groups</p>
          <i className="fa-solid fa-caret-down p-3 absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col">
            {poison === "individual"
              ? WORKOUTS[poison].map((muscle, index) => (
                  <button onClick={()=> {

                  }} className={"hover:text-blue-400 duration-200"} key={index}>
                    <p>{muscle}</p>
                  </button>
                ))
              : Object.keys(WORKOUTS[poison]).map((muscleGroup, index) => (
                  <button className="hover:text-blue-400 duration-200" key={index}>
                    <p>{muscleGroup}</p>
                  </button>
                ))}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select Your Ultimate Objective."}
      />
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              className={
                "bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600" +
                (scheme === goal ? " border-blue-600" : "border-blue-400 ")
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Generator;

import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import data from "./Knowledge.json";

const Knowledge = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [readMore, setReadClose] = useState(true);
  const toggleReadMore = () => {
    setReadClose(!readMore);
  };

  return (
    <section className="flex justify-center items-center flex-col">
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center py-8">
        <div className="flex w-full max-lg:flex-col-reverse gap-10 max-w-[1300px] max-lg:justify-center max-lg:items-center">
          <div>
            <div>
              <h2 className="text-3xl font-bold font-notoSans mb-2 flex items-center text-[#10217D]">
                {data.title}
              </h2>

              <h3 className="text-2xl font-semibold mt-4">
                {data.content.procedureDetails.title}
              </h3>
              <ul className="list-disc ml-6 space-y-2 mb-3">
                {data.content.procedureDetails.steps.map((step, index) => (
                  <li key={index}>
                    <strong>{step.title}:</strong> {step.description}
                    {step.items && (
                      <ul className="list-disc ml-6 space-y-1 mt-2">
                        {step.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {step.techniques && (
                      <ul className="list-disc ml-6 space-y-1 mt-2">
                        {step.techniques.map((technique, idx) => (
                          <li key={idx}>{technique}</li>
                        ))}
                      </ul>
                    )}
                    {step.additionalInfo && (
                      <p className="mt-2">{step.additionalInfo}</p>
                    )}
                    {step.steps && (
                      <ul className="list-disc ml-6 space-y-1 mt-2">
                        {step.steps.map((subStep, idx) => (
                          <li key={idx}>{subStep}</li>
                        ))}
                      </ul>
                    )}
                    {step.note && <p className="mt-2">{step.note}</p>}
                  </li>
                ))}
              </ul>

              <div>
                <h3 id="recovery" className="text-2xl font-semibold mt-4">
                  {data.content.recoveryAftercare.title}
                </h3>

                <h4 className="font-semibold mt-4">
                  {data.content.recoveryAftercare.stages.immediatePostOp.title}
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.immediatePostOp.instructions.map(
                    (instruction, index) => (
                      <li key={index}>{instruction}</li>
                    )
                  )}
                </ul>
                <h5 className="font-semibold mt-4">Pain Management:</h5>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.immediatePostOp.painManagement.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
                <h5 className="font-semibold mt-4">Activity Restrictions:</h5>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.immediatePostOp.activityRestrictions.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
                <h5 className="font-semibold mt-4">Follow-Up:</h5>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.immediatePostOp.followUp.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>

                <h4 className="font-semibold mt-4">
                  {data.content.recoveryAftercare.stages.firstWeek.title}
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.firstWeek.instructions.map(
                    (instruction, index) => (
                      <li key={index}>{instruction}</li>
                    )
                  )}
                </ul>

                <h4 className="font-semibold mt-4">
                  {data.content.recoveryAftercare.stages.weeksTwoToFour.title}
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.weeksTwoToFour.instructions.map(
                    (instruction, index) => (
                      <li key={index}>{instruction}</li>
                    )
                  )}
                </ul>

                <h4 className="font-semibold mt-4">
                  {data.content.recoveryAftercare.stages.weeksFourToSix.title}
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.recoveryAftercare.stages.weeksFourToSix.instructions.map(
                    (instruction, index) => (
                      <li key={index}>{instruction}</li>
                    )
                  )}
                </ul>

                <p className="mt-4">{data.content.recoveryAftercare.note}</p>

                <h3 id="risks-safety" className="text-2xl font-semibold mt-4">
                  {data.content.risksAndSafety.title}
                </h3>
                <p className="mb-4">
                  {data.content.risksAndSafety.description}
                </p>
                <h4 className="font-semibold mt-4">Common Risks:</h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.risksAndSafety.commonRisks.map(
                    (risk, index) => (
                      <li key={index}>{risk}</li>
                    )
                  )}
                </ul>
                <h4 className="font-semibold mt-4">Rare but Serious Risks:</h4>
                <ul className="list-disc ml-6 space-y-2">
                  {data.content.risksAndSafety.rareRisks.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
                <p className="mt-4">
                  {data.content.risksAndSafety.safetyMeasures}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;

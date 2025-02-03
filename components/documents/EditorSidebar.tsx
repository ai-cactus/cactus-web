import React, { Dispatch, SetStateAction } from "react";
import { BiInfoCircle } from "react-icons/bi";

interface IProps {
  analysisType: "all" | "page";
  setAnalysisType: Dispatch<SetStateAction<"all" | "page">>;
  analyzeFrom: number;
  setAnalyzeFrom: Dispatch<SetStateAction<number>>;
  analyzeTo: number;
  setAnalyzeTo: Dispatch<SetStateAction<number>>;
}

const EditorSidebar = (props: IProps) => {
  const {
    analysisType,
    setAnalysisType,
    analyzeFrom,
    setAnalyzeFrom,
    analyzeTo,
    setAnalyzeTo,
  } = props;

  return (
    <aside className="flex flex-col bg-white w-[355px] fixed h-[calc(100vh-64px)] top-[64px] right-0 border-l-black/10 border-l px-4 py-5">
      <section className="flex-1 overflow-y-auto">
        <h2 className="text-blue-600 text-base font-semibold pb-4 mb-4 border-b border-b-black/10">
          Your Compliance Score: 85%
        </h2>
        <div className="uppercase bg-red-100 border border-red-400 p-3 text-xs flex flex-row items-center gap-1 rounded-md mb-4">
          <BiInfoCircle color="red" />6 conflicts found!
        </div>
        {/* <div className='uppercase bg-red-100 border border-red-400 p-3 text-xs flex flex-row items-center gap-1 rounded-md'><BiInfoCircle color='red' />Conflicts found on Pages 2 and 5.</div> */}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          aspernatur sapiente nobis perferendis. Modi quas quisquam dolorum,
          amet fugit excepturi ad qui ab itaque, at veritatis nostrum illum
          cupiditate facere? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Consequatur, culpa. Iure nam voluptatibus, aperiam quaerat
          expedita optio eligendi culpa minus blanditiis recusandae dolorum
          perspiciatis nulla perferendis ratione ipsam nisi tempore. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dignissimos, repellat
          exercitationem tempore nobis, perferendis nemo aut optio quae beatae
          ex nisi quasi quas quaerat iure! Est sunt cum fugiat veniam! Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Cumque iste facere
          quibusdam ratione distinctio impedit! Voluptatem sit explicabo
          cupiditate, molestiae aperiam non impedit corrupti at, quas
          praesentium id? Illo, voluptatibus.
        </p>
      </section>

      <section className="mt-4">
        <h3 className="text-blue-600 text-base font-semibold mb-4">
          Select Pages to Analyze
        </h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="analysis-type"
              checked={analysisType === "all"}
              onChange={(e) => e.target.checked && setAnalysisType("all")}
              className="form-checkbox"
            />
            <span className="text-sm">Analyze All Pages</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="analysis-type"
              checked={analysisType === "page"}
              onChange={(e) => e.target.checked && setAnalysisType("page")}
              className="form-checkbox"
            />
            <span className="text-sm">Specify Page Range:</span>
          </label>
          {analysisType === "page" && (
            <div className="flex flex-col gap-2">
              <p className="text-sm">Specify Page Range: </p>
              <div className="flex flex-row gap-2">
                <label className="flex-1 flex flex-row items-center gap-2">
                  <span className="text-sm">From</span>
                  <input
                    type="number"
                    value={analyzeFrom}
                    onChange={(e) => setAnalyzeFrom(e.target.valueAsNumber)}
                    className="border border-black/10 rounded min-w-0 w-full"
                  />
                </label>
                <label className="flex-1 flex flex-row items-center gap-2">
                  <span className="text-sm">To</span>
                  <input
                    type="number"
                    value={analyzeTo}
                    onChange={(e) => setAnalyzeTo(e.target.valueAsNumber)}
                    className="border border-black/10 rounded min-w-0 w-full"
                  />
                </label>
              </div>
            </div>
          )}
        </div>
      </section>
    </aside>
  );
};

export default EditorSidebar;

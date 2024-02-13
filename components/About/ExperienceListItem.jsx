import JobDate from "./JobDate";
import JobDescription from "./JobDescription";
import JobTitle from "./JobTitle";
import JobCompany from "./Jobcompany";

const ExperienceListItem = ({ title, desc, date, company, idx }) => {
  return (
    <>
      {idx % 2 === 0 ? (
        <div className="flex justify-between h-48">
          <div className="w-1/3 ">
            <JobTitle title={title} />

            <JobDescription desc={desc} />

            <JobDate date={date} />

            <JobCompany company={company} />
          </div>

          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>

          <div className="w-1/3 "></div>
        </div>
      ) : (
        <div className="flex justify-between h-48">
          <div className="w-1/3 "></div>

          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>

          <div className="w-1/3 ">
            <JobTitle title={title} />

            <JobDescription desc={desc} />

            <JobDate date={date} />

            <JobCompany company={company} />
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceListItem;

import ProjectsHeader from "./Components/ProjectHeader";
import ProjectsSubHeader from "./Components/ProjectSubHeader";

function AllProjects() {
    return (
        <div className="bg-slate-50 w-full min-h-screen flex">
            <AllProjectsArea/>
        </div>
    );
      
    function AllProjectsArea(){
        return (
            <div className="w-[78%] p-10 flex flex-col gap-3 border">
                <ProjectsHeader/>
                <ProjectsSubHeader/>
            </div>
        )
    }
}

export default AllProjects;
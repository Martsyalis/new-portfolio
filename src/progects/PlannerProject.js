import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VisibilitySensor from "react-visibility-sensor";
import PlannerAdd from "../assets/planner-add.png";
import plannerBudget from "../assets/planner-budget.png";

function PlannerProject() {
  return (
    <React.Fragment>
      <div>
        <img src={PlannerAdd} alt="Planner app" className="project-img" />
        <img src={plannerBudget} alt="Planner app" />
      </div>
    </React.Fragment>
  );
}

export default PlannerProject;

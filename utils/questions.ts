const Gas = require("../assets/gas.svg");
const Electricity = require("../assets/electricity.svg");
const Lpg = require("../assets/lpg.svg");
const Oil = require("../assets/oil.svg");
const MoveBoiler = require("../assets/move-boiler-icon.svg");
const NoX = require("../assets/no-x.svg");
const FlueMountWall = require("../assets/flue-mount-wall.svg");
const FlueMountRoof = require("../assets/flue-mount-roof.svg");
const FlueCovered = require("../assets/flue-covered.svg");
const FlueUnCovered = require("../assets/flue-uncovered.svg");

export const questionArr = [
  {
    question: "Which type of fuel does your boiler use?",
    supportingText:
      "This is some Sub Text that the editor can insert and therefore update the information to the customer about the question and there enlightening the customer with a wealth of helpfule information",
    options: [
      {
        label: "Gas",
        icon: Gas,
      },
      {
        label: "Electricity",
        icon: Electricity,
      },
      {
        label: "LPG",
        icon: Lpg,
      },
      {
        label: "Oil",
        icon: Oil,
      },
    ],
  },
  {
    question: "Do you want to move your boiler? ",
    supportingText:
      "This is some Sub Text that the editor can insert and therefore update the information to the customer about the question and there enlightening the customer with a wealth of helpfule information",
    options: [
      {
        label: "Yes",
        icon: MoveBoiler,
      },
      {
        label: "No",
        icon: NoX,
      },
    ],
  },
  {
    question: "Where is your flue? ",
    supportingText:
      "Your flue is the chimney that takes the waste gases from your boiler safely outside. It can be attached to a wall or a roof. Look at the i button for more information.",
    options: [
      {
        label: "Wall mounted",
        icon: FlueMountWall,
      },
      {
        label: "Roof mounted",
        icon: FlueMountRoof,
      },
    ],
  },
  {
    question:
      "Is your flue in a covered area such as a car port or under a balcony? ",
    supportingText:
      "Your flue is the chimney that takes the waste gases from your boiler safely outside. It can be attached to a wall or a roof. Look at the i button for more information.",
    options: [
      {
        label: "Yes",
        icon: FlueCovered,
      },
      {
        label: "No",
        icon: FlueUnCovered,
      },
    ],
  },
];

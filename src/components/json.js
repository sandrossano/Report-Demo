const employees = [
  {
    ID: 1,
    PlantId: "JPDAMRC11",
    Local: "ACERRA",
    Addr: "STRADA PROV. ACERRA-POMOGLIANO ",
    TpServ: "IDRICO",
    Last: "01/09/2021",
    Prox: "31/08/2026"
  },
  {
    ID: 2,
    PlantId: "JANCAST01",
    Local: "ANACAPRI",
    Addr: "SALITA CAPOSCURO",
    TpServ: "IDRICO",
    Last: "13/02/2019",
    Prox: "12/02/2024"
  },
  {
    ID: 3,
    PlantId: "JANCFST01-FE01",
    Local: "ANACAPRI",
    Addr: "V LA FOLLICARA",
    TpServ: "FOGRNARIO",
    Last: "26/04/2017",
    Prox: "25/04/2022"
  },
  {
    ID: 4,
    PlantId: "JANCFST01-FE02",
    Local: "ANACAPRI",
    Addr: "V LA FOLLICARA",
    TpServ: "FOGRNARIO",
    Last: "26/04/2017",
    Prox: "25/04/2022"
  },
  {
    ID: 5,
    PlantId: "JANCDEP02",
    Local: "ANACAPRI",
    Addr: "LOCALITA LA SELVA",
    TpServ: "DEPURATORE",
    Last: "02/03/2021",
    Prox: "02/03/2023"
  },
  {
    ID: 6,
    PlantId: "JANCFST06",
    Local: "ANACAPRI",
    Addr: "V GROTTA AZZURRA",
    TpServ: "FOGRNARIO",
    Last: "02/03/2021",
    Prox: "01/03/2026"
  },
  {
    ID: 7,
    PlantId: "JANCFST05",
    Local: "ANACAPRI",
    Addr: "V CANNULA",
    TpServ: "FOGRNARIO",
    Last: "01/09/2021",
    Prox: "31/08/2026"
  },
  {
    ID: 8,
    PlantId: "JANCFST04",
    Local: "ANACAPRI",
    Addr: "V MESOLA ",
    TpServ: "FOGRNARIO",
    Last: "01/09/2021",
    Prox: "31/08/2026"
  },
  {
    ID: 9,
    PlantId: "JAGRAST01",
    Local: "ANGRI",
    Addr: "V MONTE TACCARO SNC",
    TpServ: "IDRICO",
    Last: "02/03/2021",
    Prox: "02/03/2024"
  }
];

const tasks = [
  {
    ID: 1,
    Subject: "Prepare 2013 Financial",
    StartDate: "2013/01/15",
    DueDate: "2013/01/31",
    Status: "Completed",
    Priority: "High",
    Completion: 100,
    EmployeeID: 8
  },
  {
    ID: 2,
    Subject: "Prepare 3013 Marketing Plan",
    StartDate: "2013/01/01",
    DueDate: "2013/01/31",
    Status: "Completed",
    Priority: "High",
    Completion: 100,
    EmployeeID: 5
  },
  {
    ID: 3,
    Subject: "Update Personnel Files",
    StartDate: "2013/02/03",
    DueDate: "2013/02/28",
    Status: "Completed",
    Priority: "High",
    Completion: 100,
    EmployeeID: 2
  },
  {
    ID: 4,
    Subject: "Review Health Insurance Options Under the Affordable Care Act",
    StartDate: "2013/02/12",
    DueDate: "2013/04/25",
    Status: "In Progress",
    Priority: "High",
    Completion: 50,
    EmployeeID: 2
  },
  {
    ID: 5,
    Subject: "Choose between PPO and HMO Health Plan",
    StartDate: "2013/02/15",
    DueDate: "2013/04/15",
    Status: "In Progress",
    Priority: "High",
    Completion: 75,
    EmployeeID: 1
  },
  {
    ID: 6,
    Subject: "Google AdWords Strategy",
    StartDate: "2013/02/16",
    DueDate: "2013/02/28",
    Status: "Completed",
    Priority: "High",
    Completion: 100,
    EmployeeID: 1
  },
  {
    ID: 7,
    Subject: "New Brochures",
    StartDate: "2013/02/17",
    DueDate: "2013/02/24",
    Status: "Completed",
    Priority: "Normal",
    Completion: 100,
    EmployeeID: 1
  },
  {
    ID: 11,
    Subject: "Rollout of New Website and Marketing Brochures",
    StartDate: "2013/02/20",
    DueDate: "2013/02/28",
    Status: "Completed",
    Priority: "High",
    Completion: 100,
    EmployeeID: 5
  },
  {
    ID: 12,
    Subject: "Update Sales Strategy Documents",
    StartDate: "2013/02/20",
    DueDate: "2013/02/22",
    Status: "Completed",
    Priority: "Normal",
    Completion: 100,
    EmployeeID: 9
  },
  {
    ID: 15,
    Subject: "Review 2012 Sales Report and Approve 2013 Plans",
    StartDate: "2013/02/23",
    DueDate: "2013/02/28",
    Status: "Completed",
    Priority: "Normal",
    Completion: 100,
    EmployeeID: 5
  },
  {
    ID: 16,
    Subject: "Deliver R&D Plans for 2013",
    StartDate: "2013/03/01",
    DueDate: "2013/03/10",
    Status: "Completed",
    Priority: "High",
    Completion: 100,
    EmployeeID: 3
  },
  {
    ID: 20,
    Subject: "Approve Hiring of John Jeffers",
    StartDate: "2013/03/02",
    DueDate: "2013/03/12",
    Status: "Completed",
    Priority: "Normal",
    Completion: 100,
    EmployeeID: 4
  },
  {
    ID: 20,
    Subject: "Approve Hiring of John Jeffers",
    StartDate: "2013/03/02",
    DueDate: "2013/03/12",
    Status: "Completed",
    Priority: "Normal",
    Completion: 100,
    EmployeeID: 6
  },
  {
    ID: 21,
    Subject: "Non-Compete Agreements",
    StartDate: "2013/03/12",
    DueDate: "2013/03/14",
    Status: "Completed",
    Priority: "Low",
    Completion: 100,
    EmployeeID: 2
  },
  {
    ID: 22,
    Subject: "Update NDA Agreement",
    StartDate: "2013/03/14",
    DueDate: "2013/03/16",
    Status: "Completed",
    Priority: "High",
    Completion: 100,
    EmployeeID: 1
  },
  {
    ID: 23,
    Subject: "Update Employee Files with New NDA",
    StartDate: "2013/03/16",
    DueDate: "2013/03/26",
    Status: "Need Assistance",
    Priority: "Normal",
    Completion: 90,
    EmployeeID: 4
  },
  {
    ID: 24,
    Subject: "Update Employee Files with New NDA",
    StartDate: "2013/03/16",
    DueDate: "2013/03/26",
    Status: "Need Assistance",
    Priority: "Normal",
    Completion: 90,
    EmployeeID: 6
  },
  {
    ID: 25,
    Subject: "Sign Updated NDA",
    StartDate: "2013/03/20",
    DueDate: "2013/03/25",
    Status: "Completed",
    Priority: "Urgent",
    Completion: 100,
    EmployeeID: 7
  },
  {
    ID: 26,
    Subject: "Sign Updated NDA",
    StartDate: "2013/03/20",
    DueDate: "2013/03/25",
    Status: "Completed",
    Priority: "Urgent",
    Completion: 100,
    EmployeeID: 8
  },
  {
    ID: 27,
    Subject: "Sign Updated NDA",
    StartDate: "2013/03/20",
    DueDate: "2013/03/25",
    Status: "Need Assistance",
    Priority: "Urgent",
    Completion: 25,
    EmployeeID: 9
  },
  {
    ID: 35,
    Subject: "Update Revenue Projections",
    StartDate: "2013/03/24",
    DueDate: "2013/04/07",
    Status: "Completed",
    Priority: "Normal",
    Completion: 100,
    EmployeeID: 8
  },
  {
    ID: 36,
    Subject: "Review Revenue Projections",
    StartDate: "2013/03/25",
    DueDate: "2013/04/06",
    Status: "Completed",
    Priority: "High",
    Completion: 100,
    EmployeeID: 9
  },
  {
    ID: 40,
    Subject: "Provide New Health Insurance Docs",
    StartDate: "2013/03/28",
    DueDate: "2013/04/07",
    Status: "Completed",
    Priority: "Normal",
    Completion: 100,
    EmployeeID: 4
  },
  {
    ID: 41,
    Subject: "Provide New Health Insurance Docs",
    StartDate: "2013/03/28",
    DueDate: "2013/04/07",
    Status: "Completed",
    Priority: "Normal",
    Completion: 100,
    EmployeeID: 6
  },
  {
    ID: 50,
    Subject: "Give Final Approval for Refunds",
    StartDate: "2013/05/05",
    DueDate: "2013/05/15",
    Status: "Completed",
    Priority: "Normal",
    Completion: 100,
    EmployeeID: 2
  },
  {
    ID: 52,
    Subject: "Review Product Recall Report by Engineering Team",
    StartDate: "2013/05/17",
    DueDate: "2013/05/20",
    Status: "Completed",
    Priority: "High",
    Completion: 100,
    EmployeeID: 1
  },
  {
    ID: 55,
    Subject: "Review Overtime Report",
    StartDate: "2013/06/10",
    DueDate: "2013/06/14",
    Status: "Completed",
    Priority: "Normal",
    Completion: 100,
    EmployeeID: 7
  },
  {
    ID: 60,
    Subject: "Refund Request Template",
    StartDate: "2013/06/17",
    DueDate: "2014/04/01",
    Status: "Deferred",
    Priority: "Normal",
    Completion: 0,
    EmployeeID: 9
  },
  {
    ID: 71,
    Subject: "Upgrade Server Hardware",
    StartDate: "2013/07/22",
    DueDate: "2013/07/31",
    Status: "Completed",
    Priority: "Urgent",
    Completion: 100,
    EmployeeID: 7
  },
  {
    ID: 72,
    Subject: "Upgrade Personal Computers",
    StartDate: "2013/07/24",
    DueDate: "2014/04/30",
    Status: "In Progress",
    Priority: "Normal",
    Completion: 85,
    EmployeeID: 7
  },
  {
    ID: 74,
    Subject: "Decide on Mobile Devices to Use in the Field",
    StartDate: "2013/07/30",
    DueDate: "2013/08/02",
    Status: "Completed",
    Priority: "High",
    Completion: 100,
    EmployeeID: 3
  },
  {
    ID: 78,
    Subject: "Try New Touch-Enabled WinForms Apps",
    StartDate: "2013/08/11",
    DueDate: "2013/08/15",
    Status: "Completed",
    Priority: "Normal",
    Completion: 100,
    EmployeeID: 3
  },
  {
    ID: 81,
    Subject: "Review Site Up-Time Report",
    StartDate: "2013/08/24",
    DueDate: "2013/08/30",
    Status: "Completed",
    Priority: "Urgent",
    Completion: 100,
    EmployeeID: 5
  },
  {
    ID: 99,
    Subject: "Submit D&B Number to ISP for Credit Approval",
    StartDate: "2013/11/04",
    DueDate: "2013/11/07",
    Status: "Completed",
    Priority: "High",
    Completion: 100,
    EmployeeID: 8
  },
  {
    ID: 117,
    Subject: "Approval on Converting to New HDMI Specification",
    StartDate: "2014/01/11",
    DueDate: "2014/01/31",
    Status: "Deferred",
    Priority: "Normal",
    Completion: 75,
    EmployeeID: 3
  },
  {
    ID: 138,
    Subject: "Review HR Budget Company Wide",
    StartDate: "2014/03/20",
    DueDate: "2014/03/25",
    Status: "In Progress",
    Priority: "Normal",
    Completion: 40,
    EmployeeID: 6
  },
  {
    ID: 145,
    Subject: "Final Budget Review",
    StartDate: "2014/03/26",
    DueDate: "2014/03/27",
    Status: "In Progress",
    Priority: "High",
    Completion: 25,
    EmployeeID: 6
  }
];

export default {
  getEmployees() {
    return employees;
  },
  getTasks() {
    return tasks;
  }
};

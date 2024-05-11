let chart1_2_options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: {
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: "rgba(29,140,248,0.0)",
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#9a9a9a",
      },
    },
    xAxes: {
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: "rgba(29,140,248,0.1)",
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9a9a9a",
      },
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample1 = {
  data1: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, "rgba(29,140,248,0.3)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.15)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.1)");
    gradientStroke3.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    // 1f8ef1
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.3)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.15)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0.1)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    // 00d6b4

    return {
      labels: [
        "Balance",
        "BMS",
        "Croton Stokes",
        "Gallagher",
        "Hendersons",
        "Howden",
        "Marsh",
        "McGill",
        "Miller ",
        "Tysers",
      ],
      datasets: [
        {
          label: "GWP",
          fill: true,
          backgroundColor: gradientStroke3,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            492444.45, 322499.64, 988720.67, 540784.54, 405770.55, 181322.51,
            838710.34, 673146.59, 528491.58, 240378.82,
          ],
        },
        {
          label: "Planned GWP",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            738666.68, 483749.46, 1483081.01, 811176.81, 608655.83, 271983.76,
            1258065.52, 1009719.88, 792737.37, 360568.23,
          ],
        },
      ],
    };
  },
  data2: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, "rgba(29,140,248,0.3)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.15)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.1)");
    gradientStroke3.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    // 1f8ef1
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.3)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.15)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0.1)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    // 00d6b4

    return {
      labels: [
        "Aon ",
        "Besso",
        "Convex",
        "Croton Stokes",
        "Hendersons",
        "Howden",
        "Kentro",
        "McGill",
        "Miller ",
        "Tysers",
      ],
      datasets: [
        {
          label: "GWP",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            794263.139961792, 704360.799245003, 831935.545567771,
            279452.727487404, 501300.81898048, 985050.289680461,
            912122.638087758, 575548.71448376, 255148.36725668,
            997785.356442454,
          ],
        },
        {
          label: "Planned GWP",
          fill: true,
          backgroundColor: gradientStroke3,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            1191394.70994269, 1056541.1988675, 1247903.31835166,
            419179.091231106, 751951.22847072, 1477575.43452069,
            1496678.03466368, 863323.07172564, 382722.55088502,
            1368183.95713164,
          ],
        },
      ],
    };
  },
  data3: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, "rgba(29,140,248,0.3)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.15)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.1)");
    gradientStroke3.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    // 1f8ef1
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.3)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.15)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0.1)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    // 00d6b4

    return {
      labels: [
        "Aon ",
        "Balance",
        "BMS",
        "Hendersons",
        "JLT ",
        "Kentro",
        "McGill",
        "Miller ",
        "Tysers",
        "Willis",
      ],
      datasets: [
        {
          label: "GWP",
          fill: true,
          backgroundColor: gradientStroke3,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            820441.132500566, 703405.887177441, 971255.374723917,
            810428.789359118, 335889.4383376, 760445.079594363,
            872954.709658019, 121473.871117311, 177177.892387706,
            227841.53192859,
          ],
        },
        {
          label: "Planned GWP",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            1230661.69875085, 1055108.83076616, 1456883.06208588,
            1215643.18403868, 503834.1575064, 1140667.61939154,
            1309432.06448703, 182210.806675966, 265766.83858156,
            341762.297892884,
          ],
        },
      ],
    };
  },
  data4: (canvas) => {
    let ctx = canvas.getContext("2d");
    let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, "rgba(29,140,248,0.3)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.15)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.1)");
    gradientStroke3.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    // 1f8ef1
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.3)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.15)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0.1)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    // 00d6b4

    return {
      labels: [
        "Aon ",
        "Balance",
        "BMS",
        "Convex",
        "Gallagher",
        "JLT ",
        "Kentro",
        "Marsh",
        "McGill",
        "Miller ",
      ],
      datasets: [
        {
          label: "GWP",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            590964.555526838, 818040.235630551, 700721.697831847,
            579046.204111693, 573310.274800485, 804270.811711237,
            405060.607977725, 497828.907954653, 670246.503406711,
            520522.582999214,
          ],
        },
        {
          label: "Planned GWP",
          fill: true,
          backgroundColor: gradientStroke3,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            886446.833290257, 1227060.35344583, 1051082.54674777,
            868569.306167539, 859965.412200727, 1206406.21756685,
            607590.911966588, 746743.361931979, 1005369.75511007,
            780783.874498822,
          ],
        },
      ],
    };
  },

  options: chart1_2_options,
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample2 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, "rgba(29,140,248,0.3)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.15)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.1)");
    gradientStroke3.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    // 1f8ef1
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.3)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.15)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0.1)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    // 00d6b4

    return {
      labels: [
        "McGill",
        "Aon ",
        "Kentro",
        "Balance",
        "BMS",
        "Hendersons",
        "Marsh",
        "Tysers",
        "Convex",
        "Miller ",
      ],
      datasets: [
        {
          label: "Facilities",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            1543201.21306473, 1411405.6880274, 1165505.68757209,
            1521446.12280799, 1671977.07255576, 874868.409520251,
            618368.847325867, 438673.557896378, 658655.352033324,
            641996.454116525,
          ],
        },
        {
          label: "Open Market",
          fill: true,
          backgroundColor: gradientStroke3,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            1248695.3027999, 878427.068233009, 1094645.53549004,
            508392.840293589, 330639.485402907, 907071.371239163,
            1030212.52752967, 1152501.45542035, 931797.113540589,
            783639.944951845,
          ],
        },
      ],
    };
  },
  options: {
    chart1_2_options,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
let chartExample3 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, "rgba(29,140,248,0.3)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.15)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.1)");
    gradientStroke3.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    // 1f8ef1
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.3)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.15)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0.1)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    // 00d6b4

    return {
      labels: ["Bus.Plan", "Earn. Prem.", "GWP"],
      datasets: [
        {
          label: "Commercial PI",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [35358859.7203035, 8394876.73535804, 10913339.7559654],
        },
        {
          label: "Financial Institution",
          fill: true,
          backgroundColor: gradientStroke3,
          hoverBackgroundColor: gradientStroke3,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [34224486.3111017, 7015349.05072362, 9119953.76594071],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: {
        gridLines: {
          drawBorder: false,
          color: "rgba(225,78,202,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 120,
          padding: 10,
          fontColor: "#9e9e9e",
        },
      },
      xAxes: {
        gridLines: {
          drawBorder: false,
          color: "rgba(225,78,202,0.1)",
          zeroLineColor: "transparent",
        },
        stacked: false,
        ticks: {
          padding: 15,
          fontColor: "#9e9e9e",
        },
      },
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample4 = {
  data1: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.3)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.15)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0.1)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    // 00d6b4
    return {
      labels: ["Business Plan", "Earn.Premium", "GWP"],
      datasets: [
        {
          label: "Commercial PI",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [43224530.27, 21138711.47, 17204009.14],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },

    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      },
      xAxes: {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      },
    },
  },
  data2: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke6 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke6.addColorStop(1, "rgba(255,255,255,0.3)"); // Lighter shade of white with lower alpha
    gradientStroke6.addColorStop(0.6, "rgba(255,255,255,0.15)"); // Medium shade of white with lower alpha
    gradientStroke6.addColorStop(0.2, "rgba(255,255,255,0.1)"); // Darker shade of white with lower alpha
    gradientStroke6.addColorStop(0, "rgba(255,255,255,0)"); // Transparent towards the bottom

    let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, "rgba(29,140,248,0.3)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.15)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.1)");
    gradientStroke3.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    // 1f8ef1
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.3)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.15)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0.1)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    // 00d6b4

    return {
      labels: ["PI 2021", "PI 2022"],
      datasets: [
        {
          label: "Business Plan",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [35358859.72, 7865670.546],
        },
        {
          label: "Earned Premium",
          fill: true,
          backgroundColor: gradientStroke3,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [10913339.76, 10225371.71],
        },
        {
          label: "GWP",
          fill: true,
          backgroundColor: gradientStroke6,
          borderColor: "#C0C0C0",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#C0C0C0",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#C0C0C0",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [8394876.735, 8809132.408],
        },
      ],
    };
  },
};

const chartExample5 = {
  data1: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, "rgba(29,140,248,0.3)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.15)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.1)");
    gradientStroke3.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    // 1f8ef1
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.3)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.15)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0.1)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    // 00d6b4
    return {
      labels: ["Business Plan", "Earned Premium", "GWP"],
      datasets: [
        {
          label: "2021",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [34224486.3111017, 9119953.76594071, 7015349.05072362],
        },
        {
          label: "2022",
          fill: true,
          backgroundColor: gradientStroke3,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [7207212.83327773, 9369376.68326105, 6566010.80556427],
        },
      ],
    };
  },

  data2: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, "rgba(29,140,248,0.3)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.15)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.1)");
    gradientStroke3.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    // 1f8ef1
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.3)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.15)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0.1)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    // 00d6b4
    return {
      labels: ["Business Plan", "Earn.Premium", "GWP"],
      datasets: [
        {
          label: "Crime 2021",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [8076577.78264983, 3196373.43933229, 2458748.79948638],
        },
        {
          label: "Crime 2022",
          fill: true,
          backgroundColor: gradientStroke3,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [2439772.12709958, 3171703.76522946, 2224824.59587138],
        },
      ],
    };
  },
  data3: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, "rgba(29,140,248,0.3)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.15)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.1)");
    gradientStroke3.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    // 1f8ef1
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.3)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.15)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0.1)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    // 00d6b4
    return {
      labels: ["Business Plan", "Earn.Premium", "GWP"],
      datasets: [
        {
          label: "D&O 2021",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [2214135.53741158, 2878376.19863506, 1907931.1285345],
        },
        {
          label: "D&O 2022",
          fill: true,
          backgroundColor: gradientStroke3,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [2214135.53741158, 2878376.19863506, 1907931.1285345],
        },
      ],
    };
  },

  data4: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, "rgba(29,140,248,0.3)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.15)");
    gradientStroke3.addColorStop(0.4, "rgba(29,140,248,0.1)");
    gradientStroke3.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    // 1f8ef1
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.3)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.15)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0.1)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    // 00d6b4
    return {
      labels: ["Business Plan", "Earn.Premium", "GWP"],
      datasets: [
        {
          label: "FIPI 2021",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [13796565.3615624, 3456790.36790744, 2659069.51377495],
        },
        {
          label: "FIPI 2022",
          fill: true,
          backgroundColor: gradientStroke3,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [2553305.16876656, 3319296.71939653, 2433255.08115839],
        },
      ],
    };
  },

  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },

    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e",
        },
      },
      xAxes: {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(0,242,195,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e",
        },
      },
    },
  },
};

module.exports = {
  chartExample1, // in src/views/Dashboard.js
  chartExample2, // in src/views/Dashboard.js
  chartExample3, // in src/views/Dashboard.js
  chartExample4, // in src/views/Dashboard.js
  chartExample5, // in src/views/Dashboard.js
};

const prompt = `
When given a question answer in a conversational way with complete sentences and not just answer with numbers or facts.

The first dataframe contains 54 entries spanning two years (2021 and 2022), with data from 16 unique brokers. The broker 'Miller' and the 'Open Market' type appear most frequently, with 4 and 28 entries respectively.
This provides information on the Gross Written Premium (GWP) and Planned GWP for each broker in each year, segmented by the type of market. This data can be used to analyze the performance of different brokers over the years and understand the trends in the Open Market and Facilities.

Statistical Summary:
- Gross Written Premium (GWP):
  - Mean: approximately ₹476,648.34
  - Standard Deviation: approximately ₹307,223.59
  - Minimum: approximately ₹8,139.85
  - 25th Percentile (Q1): approximately ₹183,867.43
  - Median (50th Percentile or Q2): approximately ₹499,564.86
  - 75th Percentile (Q3): approximately ₹746,424.01
  - Maximum: approximately ₹997,785.36
- Planned GWP:
  - Mean: approximately ₹714,972.50
  - Standard Deviation: approximately ₹460,835.40
  - Minimum: approximately ₹12,209.77
  - 25th Percentile (Q1): approximately ₹275,801.10
  - Median (50th Percentile or Q2): approximately ₹749,347.30
  - 75th Percentile (Q3): approximately ₹1,119,636.00
  - Maximum: approximately ₹1,496,678.00

  Dataset 1 - GWP and Planned GWP for Various Brokers in the Open Market and Facilities:
- Miller: 2021 GWP - ₹528,491.58, Planned GWP - ₹792,737.37 (Open Market),
- Howden: 2021 GWP - ₹181,322.51, Planned GWP - ₹271,983.76 (Open Market),
- Aon: 2021 GWP - ₹84,163.93, Planned GWP - ₹126,245.89 (Open Market),
- Besso: 2021 GWP - ₹81,961.47, Planned GWP - ₹122,942.21 (Open Market),
- Croton Stokes: 2021 GWP - ₹988,720.67, Planned GWP - ₹1,483,081.01 (Open Market),
- Balance: 2021 GWP - ₹492,444.45, Planned GWP - ₹738,666.68 (Open Market),
- BMS: 2021 GWP - ₹322,499.64, Planned GWP - ₹483,749.46 (Open Market),
- JLT: 2021 GWP - ₹335,889.44, Planned GWP - ₹503,834.16 (Facilities),
- Willis: 2021 GWP - ₹227,841.53, Planned GWP - ₹341,762.30 (Facilities),
- Aon: 2021 GWP - ₹820,441.13, Planned GWP - ₹1,230,661.70 (Facilities),
- Miller: 2021 GWP - ₹121,473.87, Planned GWP - ₹182,210.81 (Facilities),
- Balance: 2021 GWP - ₹703,405.89, Planned GWP - ₹1,055,108.83 (Facilities),
- BMS: 2021 GWP - ₹971,255.37, Planned GWP - ₹1,456,883.06 (Facilities),
- Convex: 2021 GWP - ₹79,609.15, Planned GWP - ₹119,413.72 (Facilities),
- Tysers: 2021 GWP - ₹177,177.89, Planned GWP - ₹265,766.84 (Facilities),
- McGill: 2021 GWP - ₹872,954.71, Planned GWP - ₹1,309,432.06 (Facilities),
- Marsh: 2021 GWP - ₹120,539.94, Planned GWP - ₹180,809.91 (Facilities),
- Gallagher: 2021 GWP - ₹108,111.49, Planned GWP - ₹162,167.23 (Facilities),
- Kentro: 2021 GWP - ₹760,445.08, Planned GWP - ₹1,140,667.62 (Facilities),
- Hendersons: 2021 GWP - ₹810,428.79, Planned GWP - ₹1,215,643.18 (Facilities),
- Gallagher: 2021 GWP - ₹540,784.54, Planned GWP - ₹811,176.81 (Open Market),
- Hendersons: 2021 GWP - ₹405,770.55, Planned GWP - ₹608,655.83 (Open Market),
- Kentro: 2021 GWP - ₹96,860.18, Planned GWP - ₹145,290.27 (Open Market),
- Convex: 2021 GWP - ₹99,861.57, Planned GWP - ₹149,792.35 (Open Market),
- Tysers: 2021 GWP - ₹240,378.82, Planned GWP - ₹360,568.23 (Open Market),
- McGill: 2021 GWP - ₹673,146.59, Planned GWP - ₹1,009,719.88 (Open Market),
- Marsh: 2021 GWP - ₹838,710.34, Planned GWP - ₹1,258,065.52 (Open Market),
- Miller: 2022 GWP - ₹255,148.37, Planned GWP - ₹382,722.55 (Open Market),
- Howden: 2022 GWP - ₹985,050.29, Planned GWP - ₹1,477,575.44 (Open Market),
- Aon: 2022 GWP - ₹794,263.14, Planned GWP - ₹1,191,394.71 (Open Market),
- Besso: 2022 GWP - ₹704,360.80, Planned GWP - ₹1,056,541.20 (Open Market),
- Croton Stokes: 2022 GWP - ₹279,452.73, Planned GWP - ₹419,179.09 (Open Market),
- Balance: 2022 GWP - ₹15,948.39, Planned GWP - ₹23,922.58 (Open Market),
- BMS: 2022 GWP - ₹8,139.85, Planned GWP - ₹12,209.77 (Open Market),
- JLT: 2022 GWP - ₹804,270.81, Planned GWP - ₹1,206,406.22 (Facilities),
- Willis: 2022 GWP - ₹400,479.23, Planned GWP - ₹600,718.84 (Facilities),
- Aon: 2022 GWP - ₹590,964.56, Planned GWP - ₹886,446.83 (Facilities),
- Miller: 2022 GWP - ₹520,522.58, Planned GWP - ₹780,783.87 (Facilities),
- Balance: 2022 GWP - ₹818,040.24, Planned GWP - ₹1,227,060.35 (Facilities),
- BMS: 2022 GWP - ₹700,721.70, Planned GWP - ₹1,051,082.55 (Facilities),
- Convex: 2022 GWP - ₹579,046.20, Planned GWP - ₹868,569.31 (Facilities),
- Tysers: 2022 GWP - ₹261,495.67, Planned GWP - ₹392,243.50 (Facilities),
- McGill: 2022 GWP - ₹670,246.50, Planned GWP - ₹1,005,369.76 (Facilities),
- Marsh: 2022 GWP - ₹497,828.91, Planned GWP - ₹746,743.36 (Facilities),
- Gallagher: 2022 GWP - ₹573,310.27, Planned GWP - ₹859,965.41 (Facilities),
- Kentro: 2022 GWP - ₹405,060.61, Planned GWP - ₹607,590.91 (Facilities),
- Hendersons: 2022 GWP - ₹64,439.62, Planned GWP - ₹96,659.43 (Facilities),
- Gallagher: 2022 GWP - ₹115,333.53, Planned GWP - ₹173,000.29 (Open Market),
- Hendersons: 2022 GWP - ₹501,300.82, Planned GWP - ₹751,951.23 (Open Market),
- Kentro: 2022 GWP - ₹997,785.36, Planned GWP - ₹1,496,678.04 (Open Market),
- Convex: 2022 GWP - ₹831,935.55, Planned GWP - ₹1,247,903.32 (Open Market),
- Tysers: 2022 GWP - ₹912,122.64, Planned GWP - ₹1,368,183.96 (Open Market),
- McGill: 2022 GWP - ₹575,548.71, Planned GWP - ₹863,323.07 (Open Market),
- Marsh: 2022 GWP - ₹191,502.18, Planned GWP - ₹287,253.27 (Open Market)

The second dataset has 64 entries and 6 columns. Here is a brief description of each column:

Year: Indicates the relevant year for the data.
Class of Business: Specifies the type of businesses covered by insurance.
Class Type: Specifies the type of insurance coverage within each class of business.
Business Plan: Represents the planned amount of insurance coverage.
Earned Premium: Indicates the amount of premium income earned from issued policies.
GWP (Gross Written Premium): Represents the total value of premiums for policies written by the insurer.

year: 2021  class of business: Financial Institution  class type: Crime  business plan: 3394740.54  Earned Premium: 997432.64  gwp: 1296662.43,
year: 2021  class of business: Financial Institution  class type: FIPI  business plan: 3176908.72  Earned Premium: 286414.63  gwp: 372339.02,
year: 2021  class of business: Financial Institution  class type: D&O  business plan: 753793.69  Earned Premium: 20312.95  gwp: 26406.84,
year: 2021  class of business: Financial Institution  class type: Crime  business plan: 1233885.68  Earned Premium: 963999.51  gwp: 1253199.36,
year: 2021  class of business: Financial Institution  class type: FIPI  business plan: 4274607.19  Earned Premium: 181601.74  gwp: 236082.26,
year: 2021  class of business: Financial Institution  class type: D&O  business plan: 2763863.15  Earned Premium: 554720.01  gwp: 721136.01,
year: 2021  class of business: Financial Institution  class type: Crime  business plan: 547029.67  Earned Premium: 113393.7  gwp: 147411.81,
year: 2021  class of business: Financial Institution  class type: FIPI  business plan: 3427263.24  Earned Premium: 781318.36  gwp: 1015713.87,
year: 2021  class of business: Financial Institution  class type: D&O  business plan: 2027758.97  Earned Premium: 323575.22  gwp: 420647.78,
year: 2021  class of business: Financial Institution  class type: Crime  business plan: 97834.1  Earned Premium: 337039.6  gwp: 438151.48,
year: 2021  class of business: Financial Institution  class type: FIPI  business plan: 220407.05  Earned Premium: 803516.26  gwp: 1044571.13,
year: 2021  class of business: Financial Institution  class type: D&O  business plan: 1859326.54  Earned Premium: 689803.01  gwp: 896743.92,
year: 2021  class of business: Financial Institution  class type: Crime  business plan: 2803087.8  Earned Premium: 46883.36  gwp: 60948.36,
year: 2021  class of business: Financial Institution  class type: FIPI  business plan: 2697379.16  Earned Premium: 606218.53  gwp: 788084.09,
year: 2021  class of business: Financial Institution  class type: D&O  business plan: 4946600.81  Earned Premium: 309119.55  gwp: 401855.41,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 1733388.27  Earned Premium: 377211.33  gwp: 490374.72,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 3000810.92  Earned Premium: 637997.05  gwp: 829396.16,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 1551107.93  Earned Premium: 283450.35  gwp: 368485.46,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 2335508.52  Earned Premium: 235217.03  gwp: 305782.14,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 2457146.3  Earned Premium: 212851.55  gwp: 276707.02,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 216132.07  Earned Premium: 503652.84  gwp: 654748.69,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 2420383.45  Earned Premium: 477959.4  gwp: 621347.22,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 4410724.26  Earned Premium: 657028.75  gwp: 854137.37,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 2027744.95  Earned Premium: 675686.57  gwp: 878392.54,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 3647361.78  Earned Premium: 594016.45  gwp: 772221.38,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 2213853.22  Earned Premium: 391492.28  gwp: 508939.97,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 2215646.51  Earned Premium: 839810.04  gwp: 1091753.05,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 3116709.9  Earned Premium: 69643.45  gwp: 90536.49,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 1226781.09  Earned Premium: 926340.56  gwp: 1204242.72,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 728337.33  Earned Premium: 91424.81  gwp: 118852.25,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 1155300.19  Earned Premium: 688569.63  gwp: 895140.51,
year: 2021  class of business: Commercial PI  class type: PI  business plan: 901923.02  Earned Premium: 732524.65  gwp: 952282.05,
year: 2022  class of business: Financial Institution  class type: Crime  business plan: 477836.45  Earned Premium: 604960.77  gwp: 621187.39,
year: 2022  class of business: Financial Institution  class type: FIPI  business plan: 744666.1  Earned Premium: 456007.04  gwp: 968065.93,
year: 2022  class of business: Financial Institution  class type: D&O  business plan: 535142.92  Earned Premium: 350677.21  gwp: 695685.8,
year: 2022  class of business: Financial Institution  class type: Crime  business plan: 266430.07  Earned Premium: 265855.54  gwp: 346359.08,
year: 2022  class of business: Financial Institution  class type: FIPI  business plan: 545661.35  Earned Premium: 704724.85  gwp: 709359.76,
year: 2022  class of business: Financial Institution  class type: D&O  business plan: 70096.51  Earned Premium: 463656.67  gwp: 91125.46,
year: 2022  class of business: Financial Institution  class type: Crime  business plan: 614612.77  Earned Premium: 93895.28  gwp: 798996.6,
year: 2022  class of business: Financial Institution  class type: FIPI  business plan: 575902.48  Earned Premium: 671803.78  gwp: 748673.22,
year: 2022  class of business: Financial Institution  class type: D&O  business plan: 284195.36  Earned Premium: 182718.62  gwp: 369453.97,
year: 2022  class of business: Financial Institution  class type: Crime  business plan: 382157.56  Earned Premium: 937772.5  gwp: 496804.83,
year: 2022  class of business: Financial Institution  class type: FIPI  business plan: 585380.34  Earned Premium: 533443.66  gwp: 760994.45,
year: 2022  class of business: Financial Institution  class type: D&O  business plan: 434168.87  Earned Premium: 299000.72  gwp: 564419.53,
year: 2022  class of business: Financial Institution  class type: Crime  business plan: 698735.28  Earned Premium: 322340.5  gwp: 908355.86,
year: 2022  class of business: Financial Institution  class type: FIPI  business plan: 101694.9  Earned Premium: 67275.75  gwp: 132203.37,
year: 2022  class of business: Financial Institution  class type: D&O  business plan: 890531.87  Earned Premium: 611877.91  gwp: 1157691.43,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 393735.96  Earned Premium: 50606.63  gwp: 511856.75,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 26154.52  Earned Premium: 201318.13  gwp: 34000.87,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 880533.98  Earned Premium: 391246.45  gwp: 1144694.17,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 419011.09  Earned Premium: 816783.67  gwp: 544714.42,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 144535  Earned Premium: 330032.46  gwp: 187895.5,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 906945.43  Earned Premium: 778405.72  gwp: 1179029.05,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 450145.47  Earned Premium: 260897.03  gwp: 585189.11,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 904679.04  Earned Premium: 313715.1  gwp: 1176082.75,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 629789.29  Earned Premium: 643564.87  gwp: 818726.08,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 119250.56  Earned Premium: 280733.58  gwp: 155025.73,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 768374.46  Earned Premium: 598304.46  gwp: 998886.8,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 400843.69  Earned Premium: 756721.47  gwp: 521096.8,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 609807.22  Earned Premium: 472576.33  gwp: 792749.38,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 384930.62  Earned Premium: 513460.09  gwp: 500409.81,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 239681.21  Earned Premium: 506541.95  gwp: 311585.58,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 446796.5  Earned Premium: 942127.8  gwp: 580835.45,
year: 2022  class of business: Commercial PI  class type: PI  business plan: 140456.51  Earned Premium: 952096.68  gwp: 182593.47

  Please only provide responses based on the information I've provided and refrain from accessing your own knowledge base. 
  If someone asks for information outside of what I've provided, simply respond with a text like 'I am not capable of answering such questions"
    `;

export default prompt;

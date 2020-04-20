import { countiesList } from "./countiesList";
import { loadCounties } from "../actions";

describe("countiesList", () => {
  it("should return an initial state", () => {
    const expectedResult = { counties: [], type: "LOAD_COUNTIES" };
    const result = loadCounties([], []);
    expect(result).toEqual(expectedResult);
  });
  it("should return an array of county info when recieving LOAD_COUNTIES action", () => {
    const mockAction = {
      type: "LOAD_COUNTIES",
      counties: [
        {
          OBJECTID: 1,
          STAETFP: "08",
          COUNTYFP: "109",
          GEOID: "08109",
          COUNTY: "SAGUACHE",
          LABEL: "Saguache",
          FULL_: "Saguache County",
          County_Pos_Cases: 3,
          County_Population: 6837,
          County_Rate_Per_100_000: -1,
          State_Population: 5695430,
          State_Pos_Unknown: 111,
          State_Pos_Cases: 8280,
          Data_Source:
            "Colorado Department of Public Health and Environment - Number of Positive COVID-19 Cases by County",
          Date_Data_Last_Updated: "Data through April 14, 2020",
          State_Number_Tested: 40533,
          State_Number_Hospitalizations: 1636,
          State_Deaths: 357,
          State_Number_of_Counties_Pos: 56,
          State_Rate_Per_100000: 145.41,
          Shape__Area: 13273871024.1289,
          Shape__Length: 529491.079018544,
          State_Number_Outbreaks: 83,
        },
        {
          OBJECTID: 2,
          STAETFP: "08",
          COUNTYFP: "115",
          GEOID: "08115",
          COUNTY: "SEDGWICK",
          LABEL: "Sedgwick",
          FULL_: "Sedgwick County",
          County_Pos_Cases: 0,
          County_Population: 2275,
          County_Rate_Per_100_000: 0,
          State_Population: 5695430,
          State_Pos_Unknown: 111,
          State_Pos_Cases: 8280,
          Data_Source:
            "Colorado Department of Public Health and Environment - Number of Positive COVID-19 Cases by County",
          Date_Data_Last_Updated: "Data through April 14, 2020",
          State_Number_Tested: 40533,
          State_Number_Hospitalizations: 1636,
          State_Deaths: 357,
          State_Number_of_Counties_Pos: 56,
          State_Rate_Per_100000: 145.41,
          Shape__Area: 2491281577.11719,
          Shape__Length: 208249.56871408,
          State_Number_Outbreaks: 83,
        },
        {
          OBJECTID: 3,
          STAETFP: "08",
          COUNTYFP: "017",
          GEOID: "08017",
          COUNTY: "CHEYENNE",
          LABEL: "Cheyenne",
          FULL_: "Cheyenne County",
          County_Pos_Cases: 0,
          County_Population: 1862,
          County_Rate_Per_100_000: 0,
          State_Population: 5695430,
          State_Pos_Unknown: 111,
          State_Pos_Cases: 8280,
          Data_Source:
            "Colorado Department of Public Health and Environment - Number of Positive COVID-19 Cases by County",
          Date_Data_Last_Updated: "Data through April 14, 2020",
          State_Number_Tested: 40533,
          State_Number_Hospitalizations: 1636,
          State_Deaths: 357,
          State_Number_of_Counties_Pos: 56,
          State_Rate_Per_100000: 145.41,
          Shape__Area: 7613550869.75391,
          Shape__Length: 373455.831824096,
          State_Number_Outbreaks: 83,
        },
      ],
    };

    const mockCounties = [
      {
        OBJECTID: 1,
        STAETFP: "08",
        COUNTYFP: "109",
        GEOID: "08109",
        COUNTY: "SAGUACHE",
        LABEL: "Saguache",
        FULL_: "Saguache County",
        County_Pos_Cases: 3,
        County_Population: 6837,
        County_Rate_Per_100_000: -1,
        State_Population: 5695430,
        State_Pos_Unknown: 111,
        State_Pos_Cases: 8280,
        Data_Source:
          "Colorado Department of Public Health and Environment - Number of Positive COVID-19 Cases by County",
        Date_Data_Last_Updated: "Data through April 14, 2020",
        State_Number_Tested: 40533,
        State_Number_Hospitalizations: 1636,
        State_Deaths: 357,
        State_Number_of_Counties_Pos: 56,
        State_Rate_Per_100000: 145.41,
        Shape__Area: 13273871024.1289,
        Shape__Length: 529491.079018544,
        State_Number_Outbreaks: 83,
      },
      {
        OBJECTID: 2,
        STAETFP: "08",
        COUNTYFP: "115",
        GEOID: "08115",
        COUNTY: "SEDGWICK",
        LABEL: "Sedgwick",
        FULL_: "Sedgwick County",
        County_Pos_Cases: 0,
        County_Population: 2275,
        County_Rate_Per_100_000: 0,
        State_Population: 5695430,
        State_Pos_Unknown: 111,
        State_Pos_Cases: 8280,
        Data_Source:
          "Colorado Department of Public Health and Environment - Number of Positive COVID-19 Cases by County",
        Date_Data_Last_Updated: "Data through April 14, 2020",
        State_Number_Tested: 40533,
        State_Number_Hospitalizations: 1636,
        State_Deaths: 357,
        State_Number_of_Counties_Pos: 56,
        State_Rate_Per_100000: 145.41,
        Shape__Area: 2491281577.11719,
        Shape__Length: 208249.56871408,
        State_Number_Outbreaks: 83,
      },
      {
        OBJECTID: 3,
        STAETFP: "08",
        COUNTYFP: "017",
        GEOID: "08017",
        COUNTY: "CHEYENNE",
        LABEL: "Cheyenne",
        FULL_: "Cheyenne County",
        County_Pos_Cases: 0,
        County_Population: 1862,
        County_Rate_Per_100_000: 0,
        State_Population: 5695430,
        State_Pos_Unknown: 111,
        State_Pos_Cases: 8280,
        Data_Source:
          "Colorado Department of Public Health and Environment - Number of Positive COVID-19 Cases by County",
        Date_Data_Last_Updated: "Data through April 14, 2020",
        State_Number_Tested: 40533,
        State_Number_Hospitalizations: 1636,
        State_Deaths: 357,
        State_Number_of_Counties_Pos: 56,
        State_Rate_Per_100000: 145.41,
        Shape__Area: 7613550869.75391,
        Shape__Length: 373455.831824096,
        State_Number_Outbreaks: 83,
      },
    ];
    const result = countiesList([], mockAction);
    expect(result).toEqual(mockCounties);
  });
});

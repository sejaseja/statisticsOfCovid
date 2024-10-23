export interface CovidStatistics {
    casesToday: number;
    totalCases: string;
    activeCases: string;
    totalRecovered: number;
    deathsToday: number;
    totalDeaths: string;
    testedToday: string;
    totalTested: string;
    percentPositive: string;
    peopleTestedPerMillion: string;
    date : string;
  }

  export interface ontariocases {
    totalCases: string;
    resolved: string;
    deaths: number;
    hospitalized: number;
    inICU: number;
    inICUOnVentilator: number;
  }
  
  
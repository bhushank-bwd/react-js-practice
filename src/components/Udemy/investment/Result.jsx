import React from "react";
import { calculateInvestmentResults, formatter } from "./investment_formula";

const Result = ({ userInput }) => {
  const res = calculateInvestmentResults(userInput);
  console.log(res);
  const initial =
    res[0].valueEndOfYear - res[0].interest - res[0].annualInvestment;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="w-32 text-center">Year</th>
            <th className="w-32 text-center">Investment Values</th>
            <th className="w-32 text-center">Interest Year</th>
            <th className="w-32 text-center">Total Interest</th>
            <th className="w-32 text-center">Investment Capital</th>
          </tr>
        </thead>
        <tbody>
          {res.map((yearData, index) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initial;
            const totalInvested = yearData.valueEndOfYear - totalInterest;
            return (
              <tr key={index}>
                <td className="w-32 text-center">{yearData.year}</td>
                <td className="w-32 text-center">
                  {formatter.format(yearData.valueEndOfYear)}
                </td>
                <td className="w-32 text-center">
                  {formatter.format(yearData.interest)}
                </td>
                <td className="w-32 text-center">
                  {formatter.format(totalInterest)}
                </td>
                <td className="w-32 text-center">
                  {formatter.format(totalInvested)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Result;

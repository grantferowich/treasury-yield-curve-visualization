## Motivation

The goal of this project is to built a chart using Chart.js. The main data will be from the U.S. Treasury. Specifically, yield curve inversion is a well-known early warning indicator for economic recession in the United States.

The yield curve plots the interest rate on a U.S. Treasury security of varying maturity lengths. The basic idea is that a 10-year or 30-year Treasury security should provide a greater return than a 1-year or 5-year instrument.

We can see intuitively to see that if one instrument, the 30-year security, takes three decades before it will return to the initial principal, as an investor I want to be compensated with more interest. If I get my principal back in a year or five years, I will accept relatively lower interest.

In short, 10-year securities should have a higher interest rate than 3-month securities. If this is not the case, we say the yield curve is inverted.

Glenn Rudebusch and John Williams of the San Francisco Federal Reserve write in a [2008 paper](https://www.frbsf.org/economic-research/files/wp07-16bk.pdf):

"For over two decades, researchers have provided evidence that the yield curve, specifically the spread between long- and short-term interest rates, contains useful information for signaling future recessions. Despite these findings, forecasters appear to have generally placed too little weight on the yield spread when projecting declines in the aggregate economy. Indeed, we show that professional forecasters appear worse at predicting recessions a few quarters ahead than a simple real-time forecasting model that is based on the yield spread."

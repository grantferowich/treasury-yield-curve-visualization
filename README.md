## Motivation

The goal of this mini-project is to build a chart using Chart.js. The main data will be from the U.S. Treasury. Specifically, yield curve inversion is a well-known early warning indicator for economic recession in the United States.

The yield curve plots the interest rate on a U.S. Treasury security of varying maturity lengths. The basic idea is that a 10-year or 30-year Treasury security should provide a greater return than a 1-year or 5-year instrument.

We can see intuitively to see that if one instrument, the 30-year security, takes three decades before it will return to the initial principal, as an investor I want to be compensated with more interest. If I get my principal back in a year or five years, I will accept relatively lower interest.

In short, 10-year securities should have a higher interest rate than 3-month securities. If this is not the case, we say the yield curve is inverted.

Glenn Rudebusch and John Williams of the San Francisco Federal Reserve write in a [2008 paper](https://www.frbsf.org/economic-research/files/wp07-16bk.pdf):

"For over two decades, researchers have provided evidence that the yield curve, specifically the spread between long- and short-term interest rates, contains useful information for signaling future recessions."

![yield spread](/assets/YieldSpread.png)


"Despite these findings, forecasters appear to have generally placed too little weight on the yield spread when projecting declines in the aggregate economy. Indeed, we show that professional forecasters appear worse at predicting recessions a few quarters ahead than a simple real-time forecasting model that is based on the yield spread."

The yield spread is defined "to be the difference between the yield on a 10-year U.S. Treasury note and the yield on a 3-month Treasury bill." The authors also say they build the yield spread with "quarterly averages of the constant-maturity yields for each Treasury security."



## Approach

I am interested in the simple technical indicator for predicting recession, and I am also interested in learning more about [Chart.js](https://www.chartjs.org/).

## Applications 

The survey compares how well professional forecasters predict recession in the next quarter, versus how well the yield spread predicts recessions. "The forecasts from the yield spread model, based on real-time estimates, are significantly
more accurate than the SPF probability forecasts for forecast horizons of three and four quarters.
At shorter horizons, the yield curve spread model is not useful at predicting recessions and its
forecast accuracy is statistically indistinguishable from those of the SPF," according to the 2008 paper. 

## Deliverables

The first deliverable is to build something, anything, moderately resembling a chart with some data from the Treasury. On the y-axis I'd like to see interest rates, on the x-axis, time to maturity.These rates are commonly referred to as "Constant Maturity Treasury" rates, or CMTs. I will use data from this link for this deliverable: https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Pages/TextView.aspx?data=yield

The first deliverable will take the most recent day's data and construct the yield curve.

["1 Mo", "2 Mo", "3 Mo", "6 Mo","1 Yr", "2 Yr", "3 Yr", "5 Yr", "7 Yr", "10 Yr", "20 Yr", "30 Yr"]

[1.45,1.37, 1.27, 1.11, 0.97, 0.86, 0.85, 0.89, 1.03, 1.13, 1.46, 1.65].

Voila! 
![basic yield curve](/assets/Deliverable1.png)
![yield curve 2](/assets/TreasuryYieldPurple.png)

//================================= pie chart meter thing ========================
function charts(bot) {
    Highcharts.chart('kd', {
      chart: {
          plotBackgroundColor: 'green',
          plotBorderWidth: 0,
          plotShadow: false
      },
      title: {
          text: bot.redWin.toString()+'/'+bot.blueWin.toString(),
          align: 'center',
          verticalAlign: 'middle',
          y: 80
      },
      colors: ['red','blue'],
      plotOptions: {
          pie: {
              dataLabels: {
                  enabled: true,
                  distance: -50,
                  style: {
                      fontWeight: 'bold',
                      color: null
                  }
              },
              startAngle: -90,
              endAngle: 90,
              center: ['50%', '75%']
          }
      },
      series: [{
          type: 'pie',
          name: 'Wins',
          innerSize: '50%',
          data: [
              [" ",    bot.redWin],
              [" ",     bot.blueWin],

          ]
      }]
  });
}


// ================================================== Red move chart ==================================
function movement(bot) {
    Highcharts.chart('redMove', {
      chart: {
        plotBackgroundColor: 'green',
          type: 'column'
      },
      title:{text:"   "},
      colors: ['red'],
      xAxis: {
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Moves'
          }
      },
      legend: {
          enabled: false
      },

      series: [{
          name: 'Move',
          data: [
              ['Forwards', bot.f],
              ['Backwards', bot.b],
              ['Left', bot.l],
              ['Rigth', bot.r]
          ],

      }]
  });
}

//================================================ Blue move chart ========================================
function movementB(bot) {
    Highcharts.chart('blueMove', {
      chart: {
        plotBackgroundColor: 'green',
        plotBorderColor: 'green',
        selectionMarkerFill: 'green',
          type: 'column'
      },

      title:{text:"   "},
      colors: ['blue'],
      xAxis: {
          type: 'category',

          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Moves'
          }
      },
      legend: {
          enabled: false
      },

      series: [{
          name: 'Move',
          data: [
              ['Forwards', bot.f],
              ['Backwards', bot.b],
              ['Left', bot.l],
              ['Rigth', bot.r]
          ],

      }]
  });
}

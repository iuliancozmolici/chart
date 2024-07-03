const fillChartPie = async () => {
  const dom = document.getElementById("chart");
  const myChart = echarts.init(dom);

  const loadJsonData = async (category) => {
    const response = await fetch(`/json/${category.toLowerCase()}.json`);
    return await response.json();
  };

  const jsonString = '[["Food", 3], ["Services", 6], ["Distractions", 2], ["Others", 2]]';
  const jsonObject = JSON.parse(jsonString);
  console.log(jsonObject);

  var option = {
    title: {
      text: 'Expenses Chart',
      subtext: 'Click on legend to remove a category',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter(params) {
        return `${params.marker}${params.name}: <b>${params.value} MDL</b> (${params.percent}%)`;
      }
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      borderRadius: 3,
      borderWidth: 2,
      padding: 10,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        selectedMode: 'single',
        radius: '50%',
        data: jsonObject.map(item => {
          return { name: item[0], value: item[1] };
        }),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  if (jsonObject.length === 0) {
    option.legend.show = false;
    option.tooltip.formatter = '0 MDL';
    option.series[0].color = 'lightgray';
    option.series[0].data = [{ name: "Empty", value: 0 }];
  }

  myChart.setOption(option);

  myChart.on('click', async function (params) {
    const selectedCategory = params.name;
    const results = await loadJsonData(selectedCategory);
    const displayInfo = document.querySelector('.display-info');
    displayInfo.innerHTML = createTable(results);
  });
};

const createTable = (results) => {
  let tableHTML = '';
  const excludedKeys = ['id', 'description'];

  tableHTML += '<div class="table-row-header">';
  for (let key in results[0]) {
    if (!excludedKeys.includes(key)) {
      tableHTML += `<div class="table-cell"><p class="cell-key">${key}</p></div>`;
    }
  }
  tableHTML += '</div>';

  for (let result of results) {
    tableHTML += '<div class="table-row">';
    for (let key in result) {
      if (!excludedKeys.includes(key)) {
        tableHTML += `<div class="table-cell"><p class="cell-value">${result[key]}</p></div>`;
      }
    }
    tableHTML += '</div>';
  }

  return tableHTML;
};

window.onload = function () {
  fillChartPie();
};





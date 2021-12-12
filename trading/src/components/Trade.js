import React, { useEffect, useState } from "react";
import Chart from 'chart.js/auto';

const Trade = ({ resultsCount }) => {
    const [show, setShow] = useState(null)
    const [currency, setCurrency] = useState(null)

    useEffect(() => {
        console.log('show=', show);
        setCurrency(resultsCount.find(val => (val.T === show)))
    }, [show])

    useEffect(()=>{
        getChart()
    },[])
    let myChart;
    const getChart=()=>{
    if (myChart)
       myChart.destroy();
        const ctx = document.getElementById('myChart').getContext('2d');
         myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January ', 'February', 'March', 'April ', 'May ', 'June ', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: '# of Votes',
                    data: [8, 5, 3, 5, 2, 3, 5, 2, 3, 4, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    return (
        
        <div >
            <label htmlFor="cars">choose a share :</label><br />
            <select className='Selector' name="tName" id="tName" onChange={(e) => { setShow(e.target.value); }}>
                {
                    resultsCount ? resultsCount.map((i, index) => {
                        return (
                            <option key={index} value={i.T} >{i.T}</option>
                        )
                    }) : ''
                }
            </select>
            <div>
           <canvas id="myChart"></canvas>
       </div>

            <div className="d1">
                {
                    currency ? (<div>
                        <div class="numbers">
                            <div class="totalCases box">
                                <div class="one">
                                    <p>VW</p>
                                </div>
                                <div class="two"><span id='totalCasesText'>{currency.vw}$</span></div>
                            </div>
                            <div class="totaldeath box">
                                <div class="one">
                                    <p>Open</p>
                                </div>
                                <div class="two"><span id='totalDeathText'>{currency.o}$</span></div>
                            </div>
                            <div class="totalrecoverd box">
                                <div class="one">
                                    <p>Close</p>
                                </div>
                                <div class="two"><span id='totalRecoveredText'>{currency.c}$</span></div>
                            </div>
                            <div class="criticalcondition box">
                                <div class="one">
                                    <p>hight</p>
                                </div>
                                <div class="two"> <span id='totalCriticalText'>{currency.h} $</span></div>
                            </div>
                            <div class="criticalcondition box">
                                <div class="one">
                                    <p>LOW</p>
                                </div>
                                <div class="two"> <span id='totalCriticalText'>{currency.l}$</span></div>
                            </div>
                        </div>
                   
                    </div>) : ''
                }

            </div>
            
        </div>
    )
}
<div class="statisticbox">
                <canvas id="myChart" width="1083" height="562" style="display: block; box-sizing: border-box; height: 449.6px; width: 866.4px;"></canvas>
            </div>


export default Trade
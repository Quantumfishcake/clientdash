import { Bar } from 'vue-chartjs'
import axios from 'axios'


export default {

    extends: Bar,
    data() {

        return {
            info: null,
            data1: null,
            data2: null,
            gradient: null,
            gradient2: null,
            highval: null,
        }
    },
    mounted() {
        this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
        this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
        this.gradient.addColorStop(0, '#ffd75f')
        this.gradient.addColorStop(1, '#ffc001');
        this.gradient2.addColorStop(0, '#4c4c4c')
        this.gradient2.addColorStop(1, '#2f2f2f');

        axios
            .get('https://api.myjson.com/bins/kf88q')
            .then(response => (
                this.info = response,
                this.data1 = response.data['2017'],
                this.data2 = response.data['2018'],
                this.highval = Math.max(...this.data1, ...this.data2) * 1.1,
                this.renderChart({
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [
                        {
                            label: 'Sessions',
                            borderWidth: 1,
                            backgroundColor: this.gradient2,
                            data: this.data1
                        }, {
                            label: 'Revenue',
                            borderWidth: 1,
                            backgroundColor: this.gradient,
                            borderRadius: 10,
                            data: this.data2
                        }
                    ]
                }, {
                        responsive: true,
                        legend:{display: false},
                        maintainAspectRatio: false,
                        aspectRatio: 5,
                        scales: {
                            xAxes: [{
                                barPercentage: 0.6,
                                gridLines: {
                                    display: false
                                }, 
                                ticks: {
                                    fontColor: '#c4c6c5',
                                    fontFamily: 'dosis',
                                    fontSize: 14,
                                }
                                
                            }],
                            yAxes: [{
                                gridLines: {
                                    display: true
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'REVENUE',
                                    fontColor: '#c4c6c5',
                                    fontFamily: 'dosis',
                                    fontSize: 14
                                },
                                ticks: {
                                    fontColor: '#c4c6c5',
                                    fontFamily: 'dosis',
                                    fontSize: 14,
                                    max: this.highval
                                }
                            }],
                        }, 
                        
                        legend: {
                            position: 'top',
                            labels: {
                                padding: 20,
                                fontColor: '#c4c6c5',
                                fontFamily: 'dosis',
                                fontSize: 14,
                                
                            }
                        }
                    })
            ))
    },
}


import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Jan',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'March',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'April',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'June',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'July',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>HELLO SHAHRUKH,</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h4>EARNING</h4>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>$198K</h1>
                <h5>+ 37.8% this month</h5>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h4>ORDERS</h4>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>$2.4K</h1>
                <h5>- 2% this month</h5>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h4>BALANCE</h4>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>$2.4K</h1>
                <h5>- 2% this month</h5>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h4>TOTAL SALES</h4>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>$89K</h1>
                <h5>+ 11% this week</h5>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home
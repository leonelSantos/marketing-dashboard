import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent } from './components/ui/card';
//import { Button } from './components/ui/button';

const fullData = [
  { fullName: 'APPLIED PHYSIOLOGY - M.S.Ed.', name: 'AAPH', leads: 595, cold: 592, enrolled: 1 },
  { fullName: 'ATHLETIC TRAINING - M.S.Ed.', name: 'ATHT', leads: 264, cold: 263, enrolled: 0 },
  { fullName: 'COMMUNITY SOCIAL CHANGE - M.S.Ed.', name: 'CSC', leads: 41, cold: 41, enrolled: 0 },
  { fullName: 'COUNSELING MENTAL HEALTH- M.S.Ed.', name: 'CNSM', leads: 69, cold: 61, enrolled: 3 },
  { fullName: 'HIGHER ED ADMINISTRATION - M.S.Ed.', name: 'HE-ADM', leads: 83, cold: 83, enrolled: 0 },
  { fullName: 'HIGHER ED COMMUNITY - Ed.D.', name: 'HE-COM', leads: 1, cold: 1, enrolled: 0 },
  { fullName: 'HIGHER ED LEADERSHIP - Ed.D.', name: 'HE-LD', leads: 100, cold: 100, enrolled: 0 },
  { fullName: 'SPORTS ADMINISTRATION - M.S.Ed.', name: 'SADM', leads: 1, cold: 1, enrolled: 0 },
]; 

//const pieData = fullData.filter(item => item.leads > 0);
const pieData = fullData.filter(item => item.leads > 0).map(item => ({
  fullName: item.fullName,
  name: item.name,
  leads: item.leads
}));

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#ffc658', '#8dd1e1'];

const Dashboard = () => {
  const openDatasetLink = () => {
    window.open('https://miamiedu-my.sharepoint.com/:x:/r/personal/d_iacomoni_miami_edu/Documents/SEHD%20Marketing/Marketing%20Campaigns%20Evaluation.xlsx?d=w1c951b07ab344e48a78f19744e60db9e&csf=1&web=1&e=yHWnLh', '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="p-4 space-y-4 font-inter">
       <div className="flex flex-col items-center mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Vrooman FY 23' & '24 Campaign Dashboard</h1>
        <button 
          onClick={openDatasetLink} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          View Dataset
        </button>
      </div>
      <Card className="shadow-lg">
        <CardHeader>Leads by Campaign</CardHeader>
        <CardContent className="transform rotate-x-10 perspective-1000">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fullData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              
              <Bar dataKey="leads" fill="#8884d8">
                {fullData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`url(#colorGradient-${index})`} />
                ))}
              </Bar>
              <defs>
                {fullData.map((entry, index) => (
                  <linearGradient id={`colorGradient-${index}`} x1="0" y1="0" x2="0" y2="1" key={`gradient-${index}`}>
                    <stop offset="5%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0.3}/>
                  </linearGradient>
                ))}
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>Leads Funnel</CardHeader>
        <CardContent className="transform rotate-x-10 perspective-1000">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fullData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              
              <Bar dataKey="leads" fill="url(#colorLeads)" />
              <Bar dataKey="cold" fill="url(#colorCold)" />
              <Bar dataKey="enrolled" fill="url(#colorEnrolled)" />
              <defs>
                <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.3}/>
                </linearGradient>
                <linearGradient id="colorCold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ffc658" stopOpacity={0.3}/>
                </linearGradient>
                <linearGradient id="colorEnrolled" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8dd1e1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8dd1e1" stopOpacity={0.3}/>
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>Distribution of Leads</CardHeader>
        <CardContent className="transform rotate-x-20 perspective-1000">
          <ResponsiveContainer width="100%" height={500}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={120}
                outerRadius={200}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="leads"
                nameKey="fullName" 
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`url(#pieColorGradient-${index})`} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="vertical" align="right" verticalAlign="middle" formatter={(value, entry, index) => pieData[index].fullName}/>
              <defs>
                {pieData.map((entry, index) => (
                  <linearGradient id={`pieColorGradient-${index}`} x1="0" y1="0" x2="0" y2="1" key={`gradient-${index}`}>
                    <stop offset="0%" stopColor={COLORS[index % COLORS.length]} stopOpacity={1}/>
                    <stop offset="100%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0.6}/>
                  </linearGradient>
                ))}
              </defs>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-x-10 {
          transform: rotateX(10deg);
        }
        .rotate-x-20 {
          transform: rotateX(20deg);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent } from './components/ui/card';

const fullData = [
  { fullName: 'APPLIED PHYSIOLOGY - M.S.Ed.', name: 'Applied Physiology', leads: 595, cold: 592, enrolled: 1 },
  { fullName: 'ATHLETIC TRAINING - M.S.Ed.', name: 'Athletic Training', leads: 264, cold: 263, enrolled: 0 },
  { fullName: 'COMMUNITY SOCIAL CHANGE - M.S.Ed.', name: 'Community Social Change', leads: 41, cold: 41, enrolled: 0 },
  { fullName: 'COUNSELING - M.S.Ed.', name: 'Counseling', leads: 69, cold: 61, enrolled: 3 },
  { fullName: 'HIGHER ED Administration - M.S.Ed.', name: 'H.E Admin', leads: 83, cold: 83, enrolled: 0 },
  { fullName: 'HIGHER ED Community - Ed.D.', name: 'H.E Community', leads: 1, cold: 1, enrolled: 0 },
  { fullName: 'HIGHER ED Leadership - Ed.D.', name: 'H.E Leadership', leads: 100, cold: 100, enrolled: 0 },
  { fullName: 'Sport Administration - M.S.Ed.', name: 'Sport Admin', leads: 1, cold: 1, enrolled: 0 },
]; 

const pieData = fullData.filter(item => item.leads > 0);

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#ffc658', '#8dd1e1'];

const Dashboard = () => {
  return (
    <div className="p-4 space-y-4 font-inter">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 border-b pb-4">Marketing Campaigns Dashboard</h1>
      
      <Card className="shadow-lg">
        <CardHeader>Leads by Campaign</CardHeader>
        <CardContent className="transform rotate-x-10 perspective-1000">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fullData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Legend />
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
              <Legend />
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
                innerRadius={100}
                outerRadius={140}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="leads"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`url(#pieColorGradient-${index})`} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
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
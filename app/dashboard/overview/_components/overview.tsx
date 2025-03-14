'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import PageContainer from '@/components/layout/page-container';

type BookingTrends = {
  [key: string]: {
    pending: number;
    confirmed: number;
    completed: number;
  };
};

type DashboardData = {
  count_service: number;
  count_booking: number;
  count_customer: number;
  booking_trends: BookingTrends;
};

const Dashboard = () => {
  const [data, setData] = useState<DashboardData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dashboard')
      .then((res) => res.json())
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return (
      <PageContainer>
        <div className="space-y-4 p-4">
          {/* Header */}
          <div className="h-6 w-1/3 animate-pulse rounded-md bg-gray-300"></div>

          {/* Content blocks */}
          <div className="h-4 w-full animate-pulse rounded-md bg-gray-300"></div>
          <div className="h-4 w-5/6 animate-pulse rounded-md bg-gray-300"></div>
          <div className="h-4 w-2/3 animate-pulse rounded-md bg-gray-300"></div>
        </div>
      </PageContainer>
    );
  }

  const chartData = Object.entries(data.booking_trends).map(
    ([month, values]) => ({
      month,
      pending: values.pending,
      confirmed: values.confirmed,
      completed: values.completed
    })
  );

  return (
    <PageContainer>
      <div className="space-y-8 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
            <CardHeader className="bg-blue-50 pb-2">
              <CardTitle className="flex items-center text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                Total Services
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-3xl font-bold text-gray-800">
                {data.count_service}
              </div>
              <p className="text-sm text-gray-500">
                Available service offerings
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
            <CardHeader className="bg-green-50 pb-2">
              <CardTitle className="flex items-center text-green-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8z" />
                  <path d="M12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                </svg>
                Total Bookings
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-3xl font-bold text-gray-800">
                {data.count_booking}
              </div>
              <p className="text-sm text-gray-500">Bookings processed</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
            <CardHeader className="bg-purple-50 pb-2">
              <CardTitle className="flex items-center text-purple-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Total Customers
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-3xl font-bold text-gray-800">
                {data.count_customer}
              </div>
              <p className="text-sm text-gray-500">Registered users</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="bg-gray-50">
            <CardTitle className="flex items-center text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              Booking Trends
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: '#6b7280' }}
                  axisLine={{ stroke: '#e5e7eb' }}
                />
                <YAxis
                  tick={{ fill: '#6b7280' }}
                  axisLine={{ stroke: '#e5e7eb' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend
                  verticalAlign="top"
                  height={36}
                  wrapperStyle={{ paddingTop: '10px' }}
                />
                <Bar
                  dataKey="pending"
                  name="Pending"
                  fill="#8884d8"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="confirmed"
                  name="Confirmed"
                  fill="#82ca9d"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="completed"
                  name="Completed"
                  fill="#ff7300"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
};

export default Dashboard;

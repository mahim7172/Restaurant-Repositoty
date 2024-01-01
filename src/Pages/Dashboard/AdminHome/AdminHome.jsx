import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaCar, FaPerson, FaWallet } from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend, } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const AdminHome = () => {
    const { user } = UseAuth()
    const axiosSeccure = UseAxiosSecure()

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSeccure.get('/admin-stats');
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSeccure.get('/order-stats')
            return res.data;

        }
    })


    //  custom shape for bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    // custom shape for bar pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(item => {
        return { name: item?.category, value: item?.revenue }
    })
    return (
        <div>
            <h2 className="text-2xl ">Hi😊 Welcome {user?.displayName ? user.displayName : "Back"}   </h2>
            <div className="lg:flex lg:gap-2   mt-12 ">
                {/* Revenue */}
                <div className="bg-red-400  rounded-lg flex items-center py-3 px-2 gap-2 text-white font-bold">
                    <div className="text-2xl">
                        <FaWallet></FaWallet>
                    </div>
                    <div>
                        <h2 className="text-xl"> $ {stats?.revenue}</h2>
                        <h2 className="ml-2">Revenue</h2>
                    </div>
                </div>
                {/* Customers */}
                <div className="bg-orange-400  rounded-lg flex items-center py-3 px-2 gap-2 text-white font-bold">
                    <div className="text-2xl">
                        <FaPerson></FaPerson>
                    </div>
                    <div>
                        <h2 className="text-xl">{stats?.users}</h2>
                        <h2 className="">Customers</h2>
                    </div>
                </div>
                {/* Products */}
                <div className="bg-yellow-400  rounded-lg flex items-center py-3 px-2 gap-2 text-white font-bold">
                    <div className="text-2xl">
                        <FaMagic></FaMagic>
                    </div>
                    <div>
                        <h2 className="text-xl"> $ {stats?.menuItems}</h2>
                        <h2 className="ml-2">Products</h2>
                    </div>
                </div>
                {/* Orders */}
                <div className="bg-red-400  rounded-lg flex items-center py-3 px-2 gap-2 text-white font-bold">
                    <div className="text-2xl">
                        <FaCar></FaCar>
                    </div>
                    <div>
                        <h2 className="text-xl"> $ {stats?.orders}</h2>
                        <h2 className="ml-2">Orders</h2>
                    </div>
                </div>
            </div>
            <div className="lg:flex">
                <div>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div>

                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;
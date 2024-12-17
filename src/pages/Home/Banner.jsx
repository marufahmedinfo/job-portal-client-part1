import { motion } from "motion/react"
import team1 from '../../assets/team/team (1).jpg'
import team2 from '../../assets/team/team (2).jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[500px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl" />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 4, delay: 2, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl" />
                </div>

                <div className="flex-1">
                    <h1 className="text-5xl font-bold">The <motion.span
                        animate={{ x: [0, 50, 0], backgroundColor: 'bg-gradient-to-r from-blue-500 to-blue-200' }}
                        transition={{ delay: 2, duration: 4, repeat: Infinity }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200"
                    > Easiest Way</motion.span><br />
                        to Get Your New Job</h1>
                    <p className="py-6">
                        Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

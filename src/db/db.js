import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
	try {
		const mongoDBInstance = await mongoose.connect(
			`${process.env.MONGODB_URI}/${DB_NAME}`
		);
		console.log(`MongoDB Connected to ${mongoDBInstance.connection.host}`);
	} catch (error) {
		console.log('MongoDB Connection Failed', error);
		process.exit(1);
	}
};

export { connectDB };

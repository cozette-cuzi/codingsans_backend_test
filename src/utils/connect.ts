import mongoose from 'mongoose';
import config from 'config';

const connect = async (): Promise<typeof mongoose> => {
  const dbURI = config.get<string>('dbURI');
  try {
    return await mongoose.connect(dbURI);
  } catch (err) {
    return process.exit(1);
  }
};

export default connect;

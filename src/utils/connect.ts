import mongoose from 'mongoose';
import config from 'config';

const connect = async () => {
  const dbURI = config.get<string>('dbURI');
  try {
    await mongoose.connect(dbURI);
  } catch (err) {
    process.exit(1);
  }
};

export default connect;

import { startScrap } from "./scrap";
import { connectDB } from "./db/connection";


(async () => {

  try{

    await connectDB();

    await startScrap();

  }catch(error){
    console.log(error);
    process.exit(1);
  }

})();
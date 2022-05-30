import app from "./app.js";
import { MESSAGE } from "./configs/constants.config.js";

try {
  async () => await app.get('conn').authenticate();
  console.log(MESSAGE.DATABASE.CONNECTION_SUCCESS);
  
    app.listen(app.get('port'), () => {
    console.log(MESSAGE.APP.SERVER_LISTENER.replace("PORT", app.get('port')));
  });
} catch (error) {
  console.error(MESSAGE.DATABASE.CONNECTION_FAILURE, error);
}

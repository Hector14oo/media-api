import { app } from './app.js';
import { mediaRouter } from './routes/media.routes.js';
import { authRouter } from './routes/auth.routes.js';
import { favoritesRouter } from './routes/favorites.routes.js';
import { connectDB } from './db.js';

connectDB();
app.use('/api/media', mediaRouter);
app.use('/api/auth', authRouter);
app.use('/api/favorites', favoritesRouter);

const PORT = globalThis.process.env.PORT;

app.listen(PORT, console.log(`The server is listening on port: ${PORT}`));

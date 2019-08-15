import app from './app';
const PORT = process.env.PORT || 8080;

export const server = app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});